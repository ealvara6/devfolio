import reactSvg from '@/assets/react.svg';

const blueFrom = 'rgba(0,216,255,0.18)';
const blueTo = 'rgba(0,216,255,0.05)';

type TechCardProps = {
  name: string;
  img: string;
  colorFrom: string;
  colorTo: string;
};

type TechSectionProps = {
  name: string;
  tech: TechCardProps[];
};

const techSection: TechSectionProps[] = [
  {
    name: 'Frontend',
    tech: [
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
    ],
  },
  {
    name: 'Backend',
    tech: [
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
    ],
  },
  {
    name: 'Database',
    tech: [
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
    ],
  },
  {
    name: 'Tools',
    tech: [
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
      },
      {
        name: 'React',
        img: reactSvg,
        colorFrom: blueFrom,
        colorTo: blueTo,
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
            <div className="border border-accent grow rounded-md py-10 px-4 flex gap-y-6 gap-x-8 flex-wrap justify-center ">
              {techSection.tech?.map((tech) => {
                return (
                  <div
                    className={`w-20 h-20 border flex flex-col justify-center gap-2 border-border rounded-md items-center bg-gradient-to-b from-[${tech.colorFrom}] to-[${tech.colorTo}] `}
                  >
                    <img src={tech.img} alt={`${tech.name} Icon`} />
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
