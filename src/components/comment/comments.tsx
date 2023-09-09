"use client"
import React from 'react'
import CommentForm from './comment-form'
import Comment from './comment'
import UseComment from '@/lib/use-comment'
import { CommentWithReplies } from '@/lib/Type'

export default function Comments({slug}: {
    slug: string
}) {
    const {postComment, data, isLoading, error} = UseComment(slug)
    console.log("data")
    console.log(data)
    
    if (isLoading) {
        return <div>Loading Comments...</div>
    }

    return (
        <section className="bg-white dark:bg-gray-900 antialiased mt-16">
            <div className=" mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments (number of comment)</h2>
                </div>
                <CommentForm slug={slug} postComment={postComment}/>
                <Comment comments={data as CommentWithReplies[]} slug={slug} postComment={postComment}/>
            </div>
        </section>
  )
}
