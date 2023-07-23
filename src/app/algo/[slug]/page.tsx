import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Information from '@/components/mdxhelper/information'
import MdxComponentWraper from '@/components/mdxComponentWraper'

export async function generateStaticParams() {
   
    return allPosts.map((post) => ({
      slug: post.slug,
    }))
}

export default function Page({params: {slug}}: {params: {slug: string}}) {
    const post = allPosts.find((post) => post.slug === slug)
    
    return (
        <div className="p-14 bg-white font-light">
            <MdxComponentWraper code={post!.body.code} />
        </div>
    )
}
