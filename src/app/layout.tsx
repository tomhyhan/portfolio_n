import Header from '@/components/Header'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })



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
