import { allPosts, Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import PostPage from '@/components/postPage'
import { Metadata } from 'next'
import { openGraphBasic } from '@/lib/shared-metadata'

export async function generateStaticParams() {
    return allPosts.filter(post => post.category == "dev").map((post) => ({
      slug: post.slug,
    }))
}

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
    // read route params
    const post = allPosts.find((post) => post.slug === slug)
   
    if (!post) {
        return {}
    }
    return {
        title: post.postTitle,
        description: post.description,
        openGraph: {
            ...openGraphBasic,
            title: post.postTitle,
            description: post.description,
            images: [{
                url:`/algo/${post.slug}.png`,
                width:1200,
                height:600,
                alt:`Og ${post.slug} Image Alt`,
              }],
            url: `/dev/${post.slug}`,
        },
    }
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
