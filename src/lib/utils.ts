import { projects } from './projectType';

export function getCount(filter: string | null) {
  const category = filter || 'All';
  if (category == 'All') return projects.length;
  return projects.reduce((acc, project) => {
    if (project.category == category) {
      return acc + 1;
    }
    return acc + 0;
  }, 0);
}
