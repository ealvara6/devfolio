import { withOpacity } from '@/utils/color';
import { SECTIONS } from './section';
import { TECH_REGISTRY } from './tech';

export const TechStack = () => {
  return (
    <section className="min-h-screen flex flex-col mx-7 gap-22 pt-14">
      <h1 className="self-center text-3xl font-bold tracking-widest">
        Technology
      </h1>
      {SECTIONS.map((section) => {
        return (
          <div className="min-h-[20vh] flex flex-col" key={section.key}>
            <h2 className="text-xl tracking-wider pb-3 self-center font-semibold text-accent-light/90">
              {section.name}
            </h2>
            <div className="relative grow rounded-md py-10 px-4 flex gap-y-4 gap-x-5 flex-wrap justify-center">
              <div className="h-full rounded-md absolute w-full inset-0 z-10 bg-accent bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-500" />
              <div className="inset-[2px] bg-bg rounded-md absolute z-10" />
              {section.tech.map((techKey) => {
                const tech = TECH_REGISTRY[techKey];
                const from = withOpacity(tech.baseColor, 0.18);
                const to = withOpacity(tech.baseColor, 0.05);
                return (
                  <div
                    key={tech.key}
                    className={`w-20 h-20 flex flex-col justify-center rounded-md items-center z-20`}
                    style={{
                      background: `linear-gradient(to bottom, ${from}, ${to})`,
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      className="w-10"
                    />
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
