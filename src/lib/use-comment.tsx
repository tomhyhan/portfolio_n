import React, { useEffect, useRef, useState } from 'react'
import { CommentBody, CommentList, DenamoComment } from './Type'
import useSWR from 'swr';
import fetchWrapper from './http/fetch-wrapper';
import { delay } from './comment/utils';

async function getComments(url: string) {
    const response = await fetch(url);
    
    if (!response.ok) {
        console.error(await response.json())
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
    const [isEditing, setIsEditing] = useState<string|null>(null)
    const [networkError, setNetworkError] = useState<unknown|null>(null)
    const isNew = useRef<string|null>(null)
    const editCommentRef = useRef<HTMLTextAreaElement | null>(null)
    const commentRef = useRef<HTMLDivElement|null>(null)

    useEffect(() => {
        editCommentRef.current?.focus()
    },[editCommentRef.current])

    
    useEffect(() => { 
        commentRef.current?.scrollIntoView({behavior: "smooth"})
    }, [commentRef.current, commentRef, isNew, isNew.current])
    

    const handleIsEditing = async (commentId: string) => {
        isNew.current = commentId 
        setIsEditing(commentId)
    }

    const postComment = async (body: CommentBody) => {
        try {
            const commentReponse = await fetchWrapper(`${process.env.BASE_URL}/api/comments`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            isNew.current = commentReponse.pk.S
            await mutate()
        } catch (error) {
            setNetworkError(error)

        }

    }

    const editComment = async (commentId: string, comment: string, parentId: string) => {
        try {
            await fetchWrapper(`${process.env.BASE_URL}/api/comments`, {
                    method: 'PUT',
                    body: JSON.stringify({commentId, comment}),
            })
        } catch (error) {
            setNetworkError(error)
        }

        // setIsNew(commentId)
        isNew.current = commentId
        editCommentRef.current = null
        setIsEditing(null)
        await mutate()
    }
    
    const deleteComment = async (commentId: string, parentId: string) => {
        commentId=commentId.replace("COMMENT#", "")
        try {
            await fetchWrapper(`${process.env.BASE_URL}/api/comments?commentId=${commentId}`, {
                method: 'DELETE',
            })
            isNew.current = commentId
            await mutate()
        } catch (error) {
            setNetworkError(error)
        }
    }
    
    
  return {postComment, 
        data, 
        isLoading, 
        error, 
        networkError,
        deleteComment,
        editComment,
        isEditing,
        handleIsEditing,
        editCommentRef,
        commentRef,
        isNew,
    }
}
