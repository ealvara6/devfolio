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
      <div className="flex items-center flex-col gap-14 w-full">
        <SubHeading className="self-center">Projects</SubHeading>
        <div className="flex flex-col gap-12 w-full lg:flex-row lg:flex-wrap justify-center">
          {projectData.map((project) => {
            return (
              <FadeInSection className="lg:max-w-xl w-full">
                <ProjectCard data={project} />
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
