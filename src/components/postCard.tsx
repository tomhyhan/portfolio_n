import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// todo: tags being cut off
export default function PostCard({post}: {
  post: Post
}) {
  return (
    <Link href={`/algo/${post.slug}`} className="max-w-sm rounded-lg 
        overflow-hidden shadow-lg mb-9 
        h-[17rem] mx-auto
        hover:-translate-y-2
        bg-gray-200">
        <Image width={300} height={300} className="w-full h-32" src={`/algo/${post.slug}.png`} alt={post.slug} />
        <div className="px-6 py-4 ">
            <div className="font-bold text-base mb-2">{post.title}</div>
            <time className="text-gray-700 text-base">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>
        </div>
        <div className="px-6  pb-2">
            {post.tags.split(',').map((tag, idx) => (
              <span key={idx} className="inline-block bg-green-400 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))}
        </div>
    </Link>
  )
}
