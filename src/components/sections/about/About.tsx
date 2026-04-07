import headShot from '@/assets/headShot.png';
import type React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TechStack } from '../techStack/TechStack';
import { Button } from '@/components/shared/Button';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { SubHeading } from '@/components/shared/SubHeading';

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
      className="sm:max-w-9/12 pb-30 flex flex-col 2xl:grid 2xl:grid-cols-2 gap-10 items-center xl:items-stretch pt-14 px-7 mx-auto"
      id="About"
    >
      <FadeInSection className="row-span-2 max-h-full flex flex-col max-w-3xl mx-auto">
        <Card>
          <div className="gap-2 items-center flex flex-col flex-1">
            <img
              src={headShot}
              alt="head shot of Eduardo Alvarado"
              className="rounded-xl h-full w-full object-cover"
            />
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl tracking-wide font-semibold">
                Eduardo Alvarado
              </div>
              <div className="text-sm sm:text-base md:text-lg text-text-muted font-medium">
                Jr. Full Stack Web Developer
              </div>
            </div>
            <a href="/Resume.pdf" className="w-full" download>
              <Button className="w-full mt-3">Download CV</Button>
            </a>
          </div>
        </Card>
      </FadeInSection>
      <FadeInSection className="flex flex-col">
        <Card>
          <div>
            <SubHeading className="text-xl sm:text2xl  font-semibold tracking-wider pb-0.5">
              About Me
            </SubHeading>
            <div className="text-xs sm:text-sm  italic pb-1 text-accent font-light tracking-wide flex items-center gap-0.5">
              <CheckBadgeIcon className="w-4 sm:w-5" /> Available for Hire
            </div>
          </div>
          <div className="w-full border border-accent" />
          <div className="tracking-tight text-sm sm:text-base md:text-lg">
            <div className="pb-5 pt-4">
              I'm Eduardo, a web developer with a degree in Management
              Information Systems from the University of Houston. I focus on
              building modern, responsive web applications using React,
              Typescript, Node.js, and PostgeSQL that follow today's best
              practices. I am searching for a junior front-end or full stack
              development role where I can contribute to real world products and
              allows for professional and technical growth.
            </div>
            <div className="">
              When I'm not coding, you'll usually find me at the gym or
              experimenting with new recipes. I love cooking, staying active,
              and finding small ways to keep improving — whether it's in the
              kitchen or in my projects.
            </div>
          </div>
        </Card>
      </FadeInSection>
      <FadeInSection className=" flex flex-col justify-center">
        <Card className="flex justify-center">
          <TechStack className="gap-10" />
        </Card>
      </FadeInSection>
    </section>
  );
};
