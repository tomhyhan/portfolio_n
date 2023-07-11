import { skillTypes } from '@/lib/skillsType'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      {Object.entries(skillTypes).map(([title, skillList], idx) => (
        <div key={idx} >
          <h2>{title}</h2>
          <ol className="flex ">
            {skillList.map((skill, idx) => (
              <li key={idx}>
                <Image className="w-20 h-20 border-4 border-gray-200 rounded-xl bg-slate-600" 
                  src={`/skills/${skill.image}.png`} 
                  alt={skill.tag} width={24} height={24} />
                <span>{skill.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </main>
  )
}
