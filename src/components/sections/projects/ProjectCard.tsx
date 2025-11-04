import { ChevronRightIcon } from '@heroicons/react/24/outline';
import type { Project } from './projectData';

export const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <div className="w-full h-72 bg-surface rounded-md flex flex-col justify-between">
      <img
        src={data.img}
        alt={`Image of ${data.name}`}
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <div className="p-4 flex justify-between border-t border-border">
        <div className="text-lg tracking-wider">{data.name}</div>
        <ChevronRightIcon className="w-5 text-accent-light" />
      </div>
    </div>
  );
};
