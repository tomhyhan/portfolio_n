import Image from 'next/image'
import React from 'react'

export default function SkillList({skill}: {
    skill: {image: string; tag: string};
}) {
  return (
    <li className="w-20 h-20 min-w-[30] relative mx-5 hover:-translate-y-3">
        <Image className="w-full h-full border-4 
        border-gray-200 rounded-xl bg-white object-fill" 
            src={`/skills/${skill.image}.png`} 
            alt={skill.tag} width={24} height={24} />
        <div className="flex justify-center items-center absolute 
                        w-full h-full top-0 left-0 p-2
                        bg-gray-900 bg-opacity-50 rounded-xl text-center
                        opacity-0 hover:opacity-80 cursor-pointer">
            <span className=" text-white text-sm font-bold
            ">{skill.tag}</span>
        </div>
    </li>
  )
}
