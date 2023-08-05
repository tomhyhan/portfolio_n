import SkillList from './skillList';

export default function Skill({title, skillList}: {
    title: string;
    skillList: {image: string; tag: string}[];
}) {
  return (
        <div  className="w-full h-full flex flex-col items-center justify-center my-5">
          <h2 className="text-white text-xl mb-10">{title}</h2>
          <ol className="flex w-full sm:w-1/2">
            {skillList.map((skill, idx) => (
              <SkillList key={idx} skill={skill} />
            ))}
          </ol>
        </div>  )
}
