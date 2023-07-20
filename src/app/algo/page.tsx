import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { v4 as uuidv4 } from 'uuid';
import PostCard from '@/components/postCard';
import { compareDesc } from 'date-fns';

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  return (
    <main className="flex min-h-screen items-start 
                justify-start py-12 px-3 w-full flex-wrap">
      {posts.map((post: Post,) => (
        <PostCard key={uuidv4()} post={post} />
      ))}
    </main>
  )
}
