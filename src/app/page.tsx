import Image from 'next/image'
import Header from '@/components/Header';

export const metadata = {
  title: "Tom's Portfolio/blog",
  description: "My journey to become a full stack developer",
  keywords: ['Next.js', 'React', 'JavaScript', 'blog', 'portfolio'],
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Tom's Portfolio/blog",
    description: 'My journey to become a full stack developer',
    images: [{
      url:'/skills/next.png',
      width:1200,
      height:600,
      alt:'Og Image Alt',
    }],
    type: 'website',
    siteName: "blog"
  },
}

export default function Home({}) {
  return (
    <>
    <main className="min-h-screen">
        main page
        {/* <h1>Blog: {blog}</h1> */}
    </main>
    </>
  )
}
