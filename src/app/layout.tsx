import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Tom's Portfolio/blog",
  description: 'everything about me :)',
//   openGraph: {
//     title: 'Tom',
//     description: 'everything about me :)',
//   },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Header />
            {children}
            
        </body>
    </html>
  )
}
