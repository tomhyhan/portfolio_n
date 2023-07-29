import Header from '@/components/Header'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Footer from '@/components/footer'
import { openGraphBasic } from '@/lib/shared-metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Tom's Portfolio/blog",
    description: "My journey to become a full stack developer",
    keywords: ['Nextjs', 'React', 'JavaScript', 'blog', 'portfolio', 'dynamodb', 'algorithm', 'mdx', 'tailwindcss', 'typescript', 'Vercel', 'AWS'],
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    openGraph: {
      ...openGraphBasic,
      title: "Tom's Portfolio/blog",
      description: 'My journey to become a full stack developer',
      images: [{
        url:'/skills/next.png',
        width:1200,
        height:600,
        alt:'Og Image Alt',
      }],
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={clsx(inter.className, "bg-gradient-to-b from-slate-700 h-fit")}>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  )
}
