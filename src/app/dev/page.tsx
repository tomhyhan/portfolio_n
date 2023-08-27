import { allPosts, Post } from 'contentlayer/generated'
import { v4 as uuidv4 } from 'uuid';
import PostCard from '@/components/postCard';
import { compareDesc } from 'date-fns';
import { openGraphBasic } from '@/lib/shared-metadata';

export const metadata = {
    title: "Development",
    description: "My Development Blog",
    openGraph: {
        ...openGraphBasic,
        title: "Development",
        description: "My Development Blog",
        images: [{
            url:'/ogimage/algos.png',
            width:1200,
            height:600,
            alt:'Og Development Image Alt',
          }],
        url: "/dev",
      },
}

export default function Home() {
  const posts = allPosts.filter(post => post.category == "dev").sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  return (
    <main className="min-h-screen grid sm:grid-cols-2 md:grid-cols-3 gap-10
     py-12 px-3 w-full  bg-slate-100">
      {posts.map((post: Post,) => (
        <PostCard key={uuidv4()} post={post} />
      ))}
    </main>
  )
}
