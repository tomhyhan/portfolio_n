"use client"
import React from 'react'
import CommentForm from './comment-form'
import Comment from './comment'
import UseComment from '@/lib/use-comment'
import { CommentList } from '@/lib/Type'

export default function Comments({slug}: {
    slug: string
}) {
    const {postComment, data, isLoading, error, updateComment} = UseComment(slug)
    
    if (isLoading) {
        return <div>Loading Comments...</div>
    }
    const commentForm = (parent: string) => (
        <CommentForm slug={slug} postComment={postComment} updateComment={updateComment} comments={data as CommentList} parent={parent}/>
    )

    return (
        <section className="bg-white dark:bg-gray-900 antialiased mt-16">
            <div className=" mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments (number of comment)</h2>
                </div>
                {commentForm("COMMENT#root")}
                <Comment comments={data as CommentList} slug={slug} commentForm={commentForm} margin={0} parentid={"COMMENT#root"}/>
            </div>
        </section>
  )
}
