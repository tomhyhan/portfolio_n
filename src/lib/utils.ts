import { projects } from './projectType';

export function getCount(filter: string | null) {
  const my_projects = projects || null;
  const category = filter || 'All';
  if (my_projects == null) return 0
  if (category == 'All') return my_projects.length;
  return my_projects.reduce((acc, project) => {
    if (project.category == category) {
      return acc + 1;
    }
    return acc + 0;
  }, 0);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



