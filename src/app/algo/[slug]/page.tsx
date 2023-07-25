import { allPosts, Post } from 'contentlayer/generated'
import MdxComponentWraper from '@/components/mdxComponentWraper'
import { notFound } from 'next/navigation'
import usePostView from '@/lib/usePostView'
import PostPage from '@/components/postPage'

export async function generateStaticParams() {
    return allPosts.map((post) => ({
      slug: post.slug,
    }))
}

export default async function Page({params: {slug}}: {params: {slug: string}}) {
    const post = allPosts.find((post) => post.slug === slug)
    if (!post) {
        notFound()
    }
    return (
        <div className="bg-white font-light py-14
                        px-0 
                        lg:px-28 
                        md:px-20 
                        ">
            <PostPage post={post} />
        </div>
    )
}
