import type { ReactNode } from 'react';

const techSection = [
  {
    name: 'Frontend',
    tech: [
      {
        name: 'React',
        img: 'image',
      },
    ],
  },
  {
    name: 'Backend',
    tech: [
      {
        name: 'React',
        img: 'image',
      },
    ],
  },
  {
    name: 'Database',
    tech: [
      {
        name: 'React',
        img: 'image',
      },
    ],
  },
  {
    name: 'Tools',
    tech: [
      {
        name: 'React',
        img: 'image',
      },
    ],
  },
];

export const TechStack = () => {
  return (
    <section className="min-h-screen flex flex-col mx-7 gap-10">
      <h1 className="self-center text-2xl font-bold tracking-wider">
        Technology
      </h1>
      {techSection.map((techSection) => {
        return (
          <div className="min-h-[20vh] flex flex-col">
            <h2 className="text-lg tracking-wide pb-1">{techSection.name}</h2>
            <div className="border border-accent grow rounded-md p-2">
              {techSection.tech.map((tech) => {
                return (
                  <div className="w-20 h-20 border flex flex-col justify-center gap-2 border-border rounded-md items-center">
                    <div>{tech.img}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
