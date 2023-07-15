import { ProjectType } from '@/lib/projectType';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Project({project, disappear}: {
    project: ProjectType
    disappear: boolean
}) {
//   "animate-[appear_1s_ease-in-out]"
  return (
    <Link className={clsx("m-6 w-60 h-40 relative ", 
        disappear ? "animate-[disappear_0.3s_ease-in-out]" : 
        "animate-[appear_0.3s_ease-in-out]")} href={project.src} target="blank">
    <Image className="rounded-xl w-full h-full" width={300} height={300} src={`/projects/${project.image}`} alt={project.name} />
    <div className="w-full h-full px-5 rounded-xl absolute top-0 left-0 flex justify-center items-center flex-col bg-slate-900 opacity-0 hover:opacity-80 ">
        <h3 className="text-orange-300">{project.name}</h3>
        <hr className="h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent bg-white to-transparent" />
        {project.createdWith.map((tech, idx) => <span className='text-white' key={idx}>{tech}</span>)}
    </div>
    </Link>
  )
}
