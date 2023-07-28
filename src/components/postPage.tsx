"use client"

import { Post } from 'contentlayer/generated'
import React, { useEffect } from 'react'
import MdxComponentWraper from './mdxComponentWraper'
import usePostView from '@/lib/usePostView'

export default function PostPage({post}: {
    post: Post
}) {
    // const {data, error, updateView} = usePostView(post.slug)

    // useEffect(() => {
    //   updateView()
    // }, [])

  return (
    <>
    {/* ... thinking about this feature */}
      {/* {error ? <div>loading...</div> : <>{data.view}</>} */}
        <h1 className="text-3xl text-center">{post?.postTitle}</h1>
            include status
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-16"/>
                <MdxComponentWraper code={post.body.code} />
    </>
  )
}
