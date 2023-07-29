import { openGraphBasic } from '@/lib/shared-metadata';
import ProjectTabs from './../../components/project_tabs';

export const metadata = {
    title: "Projects",
    description: "Showing My Projects",
    openGraph: {
        ...openGraphBasic,
        title: "Projects",
        description: "Showing My Projects",
        images: [{
            url:'/ogimage/projects.png',
            width:1200,
            height:600,
            alt:'Og Project Image Alt',
          }],
        url: "/projects",
      },
}

export default function Home() {
  return (
    <main className="h-full min-h-screen">
      <ProjectTabs />
    </main>
  )
}
