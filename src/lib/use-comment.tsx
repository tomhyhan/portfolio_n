import React from 'react'
import { CommentBody, DenamoComment } from './Type'
import useSWR from 'swr';
import { generateData } from './comment/utils';

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

    const updateComment = async (comment: DenamoComment) => {   
        const parentId = "COMMENT#root"
        let current = data
        if (comment.parentid.S === parentId) {
            mutate([ ...data, comment])
        } else {
            generateData(current, comment)
            mutate([...current])
        }
    }

  return {postComment, data, isLoading, error, updateComment}
}
