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
        <h1 className="self-center text-2xl font-semibold tracking-wider sm:text-3xl md:text-4xl">
          Projects
        </h1>
        <div className="flex flex-col gap-12 w-full items-center justify-center">
          {projectData.map((project) => {
            return (
              <FadeInSection className="lg:max-w-9/12 w-full">
                <ProjectCard data={project} />
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
