import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'

export default function Home() {
    // console.log(allPosts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allPosts.map((post: Post) => (
        <p>{post.title}</p>
      ))}
    </main>
  )
}
