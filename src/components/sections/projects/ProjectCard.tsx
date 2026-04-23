import { Button } from '@/components/shared/Button';
import type { Project } from './projectData';

export const ProjectCard = ({ data }: { data: Project }) => {
  const Features = () => {
    return (
      <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
        {data.keyFeatures.map((feature) => {
          return <li className="text-sm">{feature}</li>;
        })}
      </ul>
    );
  };

  const Tech = ({ tech }: { tech: string[] }) => {
    return (
      <div className="flex flex-wrap w-full gap-4 grow">
        {tech.map((name) => {
          return (
            <div className="flex items-start">
              <div className="font-semibold border rounded-full px-5 py-1 border-accent text-accent-light bg-accent/20 text-xs sm:text-sm">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="bg-surface rounded-md relative xl:grid xl:grid-cols-2 flex flex-col justify-between gap-2 min-h-[550px]  hover:scale-[1.01] transition-all duration-300">
      <img
        src={data.img.medium}
        srcSet={`
          ${data.img.small} 400w,
          ${data.img.medium} 800w,
          ${data.img.large} 1600w,
          `}
        alt={`Image of ${data.name}`}
        className="rounded-md h-full w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-col px-4 pt-2 gap-6 flex-1">
        <div className="flex flex-col gap-1.5">
          <div className="text-3xl md:text-4xl font-bold tracking-tight">
            {data.name}
          </div>
          <div className="md:text-base font-medium text-text-muted text-sm">
            {data.tagline}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-base max-w-lg leading-7 text-zinc-200 pb-6">
            {data.desc}
          </div>
          <div>
            <div className="pb-1 text-lg font-semibold tracking-wide">
              Key Features
            </div>
            <Features />
          </div>
          <Tech tech={data.tech} />
        </div>
        <div className="flex gap-10 justify-center pb-6 pt-6">
          <Button className="w-2xs" href={data.url} target="_blank">
            Live Preview
          </Button>
          <Button
            className="w-2xs"
            variant="outline"
            href={data.github}
            target="_blank"
          >
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};
