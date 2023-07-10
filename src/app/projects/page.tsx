import Image from 'next/image'
import ProjectTabs from './../../components/project_tabs';

export default function Home() {
  return (
    <div className="h-full min-h-screen">
      <ProjectTabs />
    </div>
  )
}
