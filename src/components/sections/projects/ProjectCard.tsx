// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Project } from './projectData';

export const ProjectCard = ({ data }: { data: Project }) => {
  const Tech = ({ tech }: { tech: string[] }) => {
    return (
      <div className="flex flex-wrap w-full justify-around gap-4 text-sm grow pb-4">
        {tech.map((name) => {
          return (
            <div className="flex items-center">
              <div className="font-light border rounded-full px-6 py-1.5 border-accent/30">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="w-full min-h-72 bg-surface rounded-md relative flex flex-col justify-between 2xl:max-w-3xl xl:max-w-xl  md:max-w-5xl">
      <img
        src={data.img}
        alt={`Image of ${data.name}`}
        className="object-cover w-full h-60 rounded-t-md"
        loading="lazy"
      />
      <div className="flex flex-col px-4 pt-2 gap-2.5 items-center">
        <div className="text-center">
          <div className="text-xl tracking-wider font-semibold">
            {data.name}
          </div>
          <div className="text-sm text-text-muted">{data.tagline}</div>
        </div>
        <Tech tech={data.tech} />
        <div className="flex gap-4 justify-center pb-4">
          <button className=" py-3 w-36 bg-accent rounded-lg">
            Live Preview
          </button>
          <button className="border py-3 w-36 border-accent-light rounded-lg">
            <div className="relative">Code</div>
          </button>
        </div>
      </div>
    </div>
  );
};
