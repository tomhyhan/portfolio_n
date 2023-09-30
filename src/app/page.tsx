import { sourceCodePro } from './fonts';
import Link from 'next/link';


export default function Home({}) {
  return (
    <>
    <main className={`${sourceCodePro.className} min-h-screen `}>
      <div className="w-full sm:w-1/2 h-[30rem] flex flex-col justify-center items-start mx-auto">
        <h1 className="mb-5 text-5xl font-bold text-neutral-200">Hello, I am Tom</h1>  
        <p className="mb-5 text-2xl text-neutral-300">I Love building things and solving problems. Continuously challenging myself with new tasks to learn and grow</p>
        <p className="mb-5 text-slate-500">BCIT graduate, Currently working as a Full Stack Developer</p>
        <Link href="/#aboutme"
        className="rounded-md px-2 py-1 
        border-green-600 text-green-600 border-2
        hover:opacity-60">
          About This Blog
        </Link>
      </div>
      <div id="aboutme" className="text-white w-full h-auto min-h-[30rem] bg-slate-100">
        <div className="w-11/12 sm:w-1/2 h-full min-h-[30rem] space-y-4 flex flex-col justify-evenly mx-auto py-10 text-slate-900">
          <p>
            Welcome to my Blog! This space is all about sharing 
            my lifelong journey of programming and more.
          </p>
          <p>
              In this blog, I will share my programming adventures,
              algorithms, projects, and challenges. 
          </p>
          <p>
              But It&apos;s not just about code! 
              I&apos;ll also be sharing you on a journey through my thoughts, 
              life philosophy, and experiences.
          </p>
          <p>
              In the upcoming updates, I&apos;m excited to add new features to my 
              blog, including authentication, comments, posts on 
              various programming topics, an AI search engine, and much more! 
              The possibilities are endless!          
          </p>
          <p>
              Thank you for visiting! Feel free to explore any content you 
              like.
          </p>
        </div>
      </div>
    </main>
    </>
  )
}
