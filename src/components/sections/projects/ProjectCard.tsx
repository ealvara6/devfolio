import { Button } from '@/components/shared/Button';
import type { Project } from './projectData';

export const ProjectCard = ({ data }: { data: Project }) => {
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
    // <div className=" sm:w-4xl h-[470px] bg-surface rounded-md relative flex flex-col justify-between 2xl:max-w-3xl xl:max-w-4xl  md:max-w-5xl">
    <div className="bg-surface rounded-md relative flex flex-col justify-between gap-2 h-[460px]">
      <div className="relative">
        <img
          src={data.img}
          alt={`Image of ${data.name}`}
          className="object-cover w-full h-60 rounded-t-md brightness-75"
          loading="lazy"
        />
        <div className="absolute bottom-2 px-4">
          <div className="text-xl tracking-wider font-semibold">
            {data.name}
          </div>
          <div>{data.tagline}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-2 gap-2.5 flex-1">
        <div className="text-md text-gray-300 flex-1">{data.desc}</div>
        <Tech tech={data.tech} />
        <div className="flex gap-4 justify-center pb-6 pt-6">
          <Button className="w-36" href={data.url} target="_blank">
            Live Preview
          </Button>
          <Button
            className="w-36"
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
