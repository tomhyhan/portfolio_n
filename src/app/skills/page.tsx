import Skill from '@/components/skill'
import { skillTypes } from '@/lib/skillsType'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[30rem]">
      {Object.entries(skillTypes).map(([title, skillList], idx) => (
        <Skill key={idx} title={title} skillList={skillList} />
      ))}
    </main>
  )
}
