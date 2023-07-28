import ProjectTabs from './../../components/project_tabs';

const metadata = {
  title: "project page"
}

export default function Home() {
  return (
    <main className="h-full min-h-screen">
      <ProjectTabs />
    </main>
  )
}
