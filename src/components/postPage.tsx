"use client"

import { Post } from 'contentlayer/generated'
import React, { useEffect } from 'react'
import MdxComponentWraper from './mdxComponentWraper'
import usePostView from '@/lib/usePostView'
import { format, parseISO } from 'date-fns'

export default function PostPage({post}: {
    post: Post
}) {
    const {data, error, updateView} = usePostView(post.slug)

    useEffect(() => {
      updateView()
    }, [])
 
  return (
    <>
        <h1 className="text-3xl text-center">{post?.postTitle}</h1>
        <div className="text-gray-700 mt-5 my-16">
            <p className="text-end">{format(parseISO(post.publishedAt), 'LLLL d, yyyy')}</p>
            <p className="text-end">Status: {post?.status.toUpperCase()}</p>
            <p className="text-end">Views: {error ? <span>loading...</span> : <>{data.view}</>}</p>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
        <MdxComponentWraper code={post.body.code} />
    </>
  )
}
