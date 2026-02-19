import { SubHeading } from '@/components/shared/SubHeading';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';

export const Projects = () => {
  return (
    <section className="min-h-screen pt-14 mx-7" id="projects">
      <div className="flex flex-col gap-14">
        <SubHeading className="self-center">Projects</SubHeading>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:items-center lg:justify-center">
          {projectData.map((project) => {
            return <ProjectCard data={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
