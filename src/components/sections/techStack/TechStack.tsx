import { withOpacity } from '@/utils/color';
import { SECTIONS } from './section';
import { TECH_REGISTRY } from './tech';
import { SubHeading } from '@/components/shared/SubHeading';
import clsx from 'clsx';

export const TechStack = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        'flex flex-col lg:grid lg:grid-cols-2 lg:auto-rows-min lg:gap-y-4',
        className,
      )}
    >
      <SubHeading className="self-center col-span-2 text-center">
        Technology
      </SubHeading>
      {SECTIONS.map((section, index) => {
        return (
          <div
            className={`min-h-sm flex flex-col items-center min-h-full ${
              index === 0 && 'lg:col-span-2'
            }`}
            key={section.key}
          >
            <h2 className="text-xl tracking-wider pb-3 self-center font-semibold text-accent-light/90">
              {section.name}
            </h2>
            <div className="relative rounded-md p-4 flex flex-wrap justify-center items-center max-w-lg lg:max-w-xl w-full h-full gap-y-2 gap-x-5">
              <div className="h-full rounded-md absolute w-full inset-0 z-10 bg-accent bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-500" />
              <div className="inset-[2px] bg-surface rounded-md absolute z-10" />
              {section.tech.map((techKey) => {
                const tech = TECH_REGISTRY[techKey];
                const from = withOpacity(tech.baseColor, 0.18);
                const to = withOpacity(tech.baseColor, 0.05);
                return (
                  <a
                    key={tech.key}
                    className={`w-20 h-20 flex justify-center relative items-center rounded-md z-20 hover:scale-125 transition-all duration-300 hover:cursor-pointer group overflow-hidden`}
                    href={tech.url}
                    target="_blank"
                    style={{
                      background: `linear-gradient(to bottom, ${from}, ${to})`,
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      className={`w-10 group-hover:${tech.hoverTranslateY || '-translate-y-2/12'} transition-all`}
                    />
                    <div
                      className="absolute tracking-wider
                     text-xs text-center opacity-0 translate-y-9 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-6"
                    >
                      {tech.name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
