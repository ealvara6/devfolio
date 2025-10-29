import { withOpacity } from '@/utils/color';
import { SECTIONS } from './section';
import { TECH_REGISTRY } from './tech';

export const TechStack = () => {
  return (
    <section className="min-h-screen flex flex-col mx-7 gap-10">
      <h1 className="self-center text-2xl font-bold tracking-wider">
        Technology
      </h1>
      {SECTIONS.map((section) => {
        return (
          <div className="min-h-[20vh] flex flex-col">
            <h2 className="text-lg tracking-wide pb-1">{section.name}</h2>
            <div className="border border-accent grow rounded-md py-10 px-4 flex gap-y-6 gap-x-8 flex-wrap justify-center ">
              {section.tech.map((techKey) => {
                const tech = TECH_REGISTRY[techKey];
                const from = withOpacity(tech.baseColor, 0.18);
                const to = withOpacity(tech.baseColor, 0.05);
                return (
                  <div
                    className={`w-20 h-20 border flex flex-col justify-center gap-2 border-border rounded-md items-center`}
                    style={{
                      background: `linear-gradient(to bottom, ${from}, ${to})`,
                    }}
                  >
                    <img src={tech.icon} alt={`${tech.name} Icon`} />
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
