import Skill from '@/components/skill'
import { openGraphBasic } from '@/lib/shared-metadata'
import { skillTypes } from '@/lib/skillsType'

export const metadata = {
    title: "Skills",
    description: "Showing My Skills",
    openGraph: {
        ...openGraphBasic,
        title: "Skills",
        description: "Showing My Skills",
        images: [{
            url:'/ogimage/skills.png',
            width:1200,
            height:600,
            alt:'Og Skills Image Alt',
          }],
        url: "/skills",
      },
}

export default function Home() {
  return (
    <main className="min-h-[30rem]">
      {Object.entries(skillTypes).map(([title, skillList], idx) => (
        <Skill key={idx} title={title} skillList={skillList} />
      ))}
    </main>
  )
}
