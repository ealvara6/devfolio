import type { Project } from './projectData';

export const ProjectCard = ({ data }: { data: Project }) => {
  const Tech = ({ tech }: { tech: string[] }) => {
    return (
      <div className="flex flex-wrap w-full gap-4 text-sm grow">
        {tech.map((name) => {
          return (
            <div className="flex items-start">
              <div className="font-bold border rounded-full px-6 py-1.5 border-accent text-accent-light bg-accent/20">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="xl:w-xl sm:w-3xl h-[470px] bg-surface rounded-md relative flex flex-col justify-between 2xl:max-w-3xl xl:max-w-xl  md:max-w-5xl">
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
        <div className="text-md text-gray-300 max-w-2xl flex-1">
          {data.desc}
        </div>
        <Tech tech={data.tech} />
        <div className="flex gap-4 justify-center pb-6">
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
