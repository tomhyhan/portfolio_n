import React from 'react'
import { CommentBody, CommentList, DenamoComment } from './Type'
import useSWR from 'swr';

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
        `${process.env.BASE_URL}/api/comments?postId=${postId}`, (url:string) => getComments(url), 
    )

    const postComment = async (body: CommentBody) => {
        try {
            const res = await fetch(`${process.env.BASE_URL}/api/comments`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            const commentReponse = await res.json()
            return commentReponse
        } catch (error) {
            throw new Error("Error posting comment")
        }
    }

    const updateComment = async (comment: DenamoComment, comments: CommentList, parentId: string) => {   
        const newComments = {...comments}
        if (parentId in newComments) {
            newComments[parentId] = [...newComments[parentId], comment]
        } else {
            newComments[parentId] = [comment]
        }
        mutate(newComments)
    }

    const editComment = async (commentId: string, comment: string) => {

    }
    
    const deleteComment = async (commentId: string) => {
        commentId=commentId.replace("COMMENT#", "")
        await fetch(`${process.env.BASE_URL}/api/comments?commentId=${commentId}`, {
            method: 'DELETE',
        })
    }
    
    
  return {postComment, 
    data, 
    isLoading, 
    error, 
    updateComment, 
    deleteComment,
    editComment
}
}
