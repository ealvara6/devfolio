import headShot from '@/assets/headShot.png';
import type React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TechStack } from '../techStack/TechStack';

export const About = () => {
  const Card = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={clsx('w-full h-fit bg-surface rounded-xl p-8', className)}
      >
        {children}
      </div>
    );
  };

  return (
    <section
      className="min-h-fit sm:max-w-10/12 flex flex-col xl:grid xl:grid-cols-2 gap-10 items-center xl:items-stretch pt-14 px-7 mx-auto"
      id="About"
    >
      <Card className="row-span-2 h-full flex flex-col">
        <div className="gap-2 items-center flex flex-col flex-1">
          <img
            src={headShot}
            alt="head shot of Eduardo Alvarado"
            className="rounded-xl h-full w-full object-cover"
          />
          <div className="text-center">
            <div className="text-xl tracking-wide font-semibold">
              Eduardo Alvarado
            </div>
            <div className="text-base text-text-muted font-medium">
              Jr. Full Stack Web Developer
            </div>
          </div>
          <button className="w-full border py-3 border-accent bg-accent rounded-md text-lg mt-3">
            Download CV
          </button>
        </div>
      </Card>
      <Card className="flex flex-col py-12">
        <div>
          <div className="text-3xl font-semibold tracking-wider pb-0.5">
            About Me
          </div>
          <div className="text-xs text-accent font-light tracking-wide flex items-center gap-0.5">
            <CheckBadgeIcon className="w-4" /> Available for Hire
          </div>
        </div>
        <div className="w-full border border-accent" />
        <div>
          <div className="pb-5 text-base tracking-tight">
            I'm Eduardo, a web developer with a degree in Management Information
            Systems from the University of Houston. I focus on building modern,
            responsive web applications that follow today's best practices.
          </div>
          <div className=" text-base tracking-tight">
            When I'm not coding, you'll usually find me at the gym or
            experimenting with new recipes. I love cooking, staying active, and
            finding small ways to keep improving — whether it's in the kitchen
            or in my projects.
          </div>
        </div>
      </Card>
      <Card className="min-h-full flex flex-col justify-center">
        <TechStack className="gap-10" />
      </Card>
    </section>
  );
};
