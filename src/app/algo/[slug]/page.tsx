import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import MdxComponentWraper from '@/components/mdxComponentWraper'

export async function generateStaticParams() {
   
    return allPosts.map((post) => ({
      slug: post.slug,
    }))
}

export default function Page({params: {slug}}: {params: {slug: string}}) {
    const post = allPosts.find((post) => post.slug === slug)
    
    return (
        <div className="bg-white font-light py-14
                        px-0 
                        lg:px-28 
                        md:px-20 
                        ">
            <h1 className="text-3xl text-center">{post?.postTitle}</h1>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-16"/>
            <MdxComponentWraper code={post!.body.code} />
        </div>
    )
}
