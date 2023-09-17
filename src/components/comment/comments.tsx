"use client"
import React from 'react'
import CommentForm from './comment-form'
import Comment from './comment'
import UseComment from '@/lib/use-comment'
import { CommentList } from '@/lib/Type'
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from '@/components/error/fallback';

export default function Comments({slug}: {
    slug: string
}) {
    const commentController = UseComment(slug)
    
    if (commentController.isLoading) {
        return <div>Loading Comments...</div>
    }
    
    const commentForm = (parent: string) => (
        <CommentForm slug={slug} postComment={commentController.postComment} updateComment={commentController.updateComment} comments={commentController.data as CommentList} parent={parent}/>
    )
    
    return (
        <ErrorBoundary FallbackComponent={Fallback}
            >
            <section className="bg-white dark:bg-gray-900 antialiased mt-16">
                <div className=" mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments</h2>
                    </div>
                    {commentForm("COMMENT#root")}
                    <Comment 
                    commentController={commentController}
                    slug={slug} 
                    commentForm={commentForm} 
                    margin={5} 
                    parentid={"COMMENT#root"} 
                    />
                </div>
            </section>
        </ErrorBoundary>
  )
}

