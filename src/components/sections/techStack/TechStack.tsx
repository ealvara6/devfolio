import { withOpacity } from '@/utils/color';
import { SECTIONS } from './section';
import { TECH_REGISTRY } from './tech';
import { SubHeading } from '@/components/shared/SubHeading';
import clsx from 'clsx';

export const TechStack = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        'flex flex-col lg:grid lg:grid-cols-2 lg:auto-rows-min lg:gap-y-10',
        className,
      )}
    >
      <SubHeading className="self-center col-span-2 text-center">
        Technology
      </SubHeading>
      {SECTIONS.map((section, index) => {
        console.log(SECTIONS.length, index);
        return (
          <div
            className={`min-h-sm flex flex-col items-center min-h-full ${
              index === 0 && 'lg:row-span-2'
            }`}
            key={section.key}
          >
            <h2 className="text-xl tracking-wider pb-3 self-center font-semibold text-accent-light/90">
              {section.name}
            </h2>
            <div className="relative rounded-md py-10 px-4 flex flex-wrap justify-center items-center max-w-lg lg:max-w-xl w-full h-full gap-y-2 gap-x-5">
              <div className="h-full rounded-md absolute w-full inset-0 z-10 bg-accent bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-500" />
              <div className="inset-[2px] bg-surface rounded-md absolute z-10" />
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
