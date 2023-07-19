import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { v4 as uuidv4 } from 'uuid';
import PostCard from '@/components/postCard';

export default function Home() {
    // console.log(allPosts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allPosts.map((post: Post,) => (
        <PostCard key={uuidv4()} />
      ))}
    </main>
  )
}
