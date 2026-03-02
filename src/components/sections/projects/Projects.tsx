import { SubHeading } from '@/components/shared/SubHeading';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';

export const Projects = () => {
  return (
    <section className="min-h-fit pt-30 pb-30 px-7 mx-auto" id="Projects">
      <div className="flex flex-col gap-14">
        <SubHeading className="self-center">Projects</SubHeading>
        <div className="flex flex-col xl:flex-row gap-8 items-center xl:justify-center">
          {projectData.map((project) => {
            return <ProjectCard data={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
