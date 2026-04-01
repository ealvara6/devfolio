import { SubHeading } from '@/components/shared/SubHeading';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';
import { FadeInSection } from '@/components/shared/FadeInSection';

export const Projects = () => {
  return (
    <section
      className="min-h-[1000px] flex items-center justify-center  px-7 mx-auto"
      id="Project"
    >
      <div className="flex items-center flex-col gap-14">
        <SubHeading className="self-center">Projects</SubHeading>
        <div className="flex flex-col xl:flex-row gap-8 items-center xl:justify-center">
          {projectData.map((project) => {
            return (
              <FadeInSection>
                <ProjectCard data={project} />
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
