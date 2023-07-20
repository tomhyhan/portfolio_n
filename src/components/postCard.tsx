import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import React from 'react'

export default function PostCard({post}: {
  post: Post
}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-[28%] mx-[2%] mb-5">
        <Image width={300} height={300} className="w-full h-32" src={`/algo/${post.slug}.png`} alt="Sunset in the mountains" />
        <div className="px-6 py-4 ">
            <div className="font-bold text-base mb-2">{post.title}</div>
            <time className="text-gray-700 text-base">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>
        </div>
        <div className="px-6  pb-2">
            {post.tags.split(',').map((tag, idx) => (
              <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))}
        </div>
    </div>
  )
}
