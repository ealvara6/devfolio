import type { ReactNode } from 'react';

const techSection = [
  {
    name: 'Frontend',
  },
  {
    name: 'Backend',
  },
  {
    name: 'Database',
  },
  {
    name: 'Tools',
  },
];

export const TechStack = () => {
  return (
    <section className="min-h-screen flex flex-col mx-7 gap-10">
      <h1 className="self-center text-2xl font-bold tracking-wider">
        Technology
      </h1>
      {techSection.map((tech) => {
        return (
          <div className="min-h-[20vh] flex flex-col">
            <h2 className="text-lg tracking-wide pb-1">{tech.name}</h2>
            <div className="border border-accent grow rounded-md p-2"></div>
          </div>
        );
      })}
    </section>
  );
};
