import React, { useEffect, useRef, useState } from 'react'
import { CommentBody, CommentList, DenamoComment } from './Type'
import useSWR from 'swr';
import { handleError } from './error/handle-error';
import fetchWarpper from './http/fetch-wrapper';

async function getComments(url: string) {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Error getting comments');
    }
    const comments = await response.json();
    return comments;
}

export default function UseComment(postId: string) {
    const {data, isLoading, error, mutate } = useSWR(
        `${process.env.BASE_URL}/api/comments?postId=${postId}`, (url:string) => getComments(url), {
            dedupingInterval: 1000,            
            fallback: []
        },
    )
    const [isNew, setIsNew] = useState<string|null>(null)
    const [isEditing, setIsEditing] = useState<string|null>(null)
    const editCommentRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        editCommentRef.current?.focus()
    },[editCommentRef.current])

    const handleNew = async (commentId: string) => {
        setIsNew(commentId)
    }

    const handleIsEditing = async (commentId: string) => {
        setIsEditing(commentId)
    }

    const postComment = async (body: CommentBody) => {
        try {
            const res = await fetch(`${process.env.BASE_URL}/api/comments`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            const commentReponse = await res.json()
            setIsNew(commentReponse.pk.S)
            return commentReponse
        } catch (error) {
            throw error
        }
    }

    const updateComment = async (comment: DenamoComment, comments: CommentList, parentId: string) => {   
        comment.new = true
        if (parentId in comments) {
            comments[parentId] = [...comments[parentId], comment]
        } else {
            comments[parentId] = [comment]
        }
        mutate({...comments})
    }

    const editComment = async (commentId: string, comment: string, parentId: string) => {
        // edit comment
        try{
            // await fetch(`${process.env.BASE_URL}/api/comments`, {
            //     method: 'PUT',
            //     body: JSON.stringify({commentId, comment}),
            // })
            await fetchWarpper(`${process.env.BASE_URL}/api/comments`, {
                    method: 'PUT',
                    body: JSON.stringify({commentId, comment}),
            })
        } catch (error) {
            throw error
        }

        for (const childComment of data[parentId]) {
            if (childComment.pk.S === commentId) {
                childComment.comment.S = comment
            }
        }
        mutate({...data})

        editCommentRef.current = null
        setIsEditing(null)
    }
    
    const deleteComment = async (commentId: string, parentId: string) => {
        commentId=commentId.replace("COMMENT#", "")
        try {
            await fetch(`${process.env.BASE_URL}/api/comments?commentId=${commentId}`, {
                method: 'DELETE',
            })
        } catch (error) {
            throw error
        }

        for (const comment of data[parentId]) {
            if (comment.pk.S === commentId) {
                comment.deleted.BOOL = true
            }
        }
        mutate({...data})
    }
    
    
  return {postComment, 
        data, 
        isLoading, 
        error, 
        updateComment, 
        deleteComment,
        editComment,
        isEditing,
        handleIsEditing,
        editCommentRef,
        isNew,
        handleNew
    }
}
