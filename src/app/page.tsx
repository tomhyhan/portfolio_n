import Image from 'next/image'
import Header from '@/components/Header';
import { sourceCodePro } from './fonts';



export default function Home({}) {
  return (
    <>
    <main className={`${sourceCodePro.className} min-h-screen `}>
      <div className="w-1/2 h-[30rem] flex flex-col justify-center items-start mx-auto">
        <h1 className="mb-5 text-5xl font-bold text-neutral-200">Hello, I am Tom</h1>  
        <p className="mb-5 text-2xl text-neutral-300">I like building things and solving problems</p>
        <p className="mb-5 text-slate-500">BCIT graduate, Currently working as a Full Stack Developer</p>
        <button className="rounded-md px-2 py-1 
        border-green-600 text-green-600 border-2
        hover:opacity-60">
          About Me
        </button>
      </div>
      <div className="text-white w-full h-[30rem] bg-slate-100">
        <div className="w-1/2 flex flex-col justify-center items-start mx-auto">
          <h1 className="text-slate-900 my-5">About me</h1>
        </div>
      </div>
    </main>
    </>
  )
}
