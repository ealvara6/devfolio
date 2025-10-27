import headShot from '@/assets/headShot.png';
import type React from 'react';

export const About = () => {
  const Card = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full h-fit bg-surface rounded-xl p-8">{children}</div>
    );
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center pt-14 mx-7"
      id="about"
    >
      <Card>
        <div className="gap-2 items-center flex flex-col">
          <img
            src={headShot}
            alt="head shot of Eduardo Alvarado"
            className="rounded-xl"
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
      <Card>
        <div className="text-2xl font-semibold tracking-wider">About Me</div>
        <div className="text-sm text-accent pb-3 font-light tracking-wide">
          Available for Hire
        </div>
        <div className="pb-5 text-base tracking-tight">
          I'm Eduardo, a web developer with a degree in Management Information
          Systems from the University of Houston. I focus on building modern,
          responsive web applications that follow today's best practices.
        </div>
        <div className=" text-base tracking-tight">
          When I'm not coding, you'll usually find me at the gym or
          experimenting with new recipes. I love cooking, staying active, and
          finding small ways to keep improving — whether it's in the kitchen or
          in my projects.
        </div>
      </Card>
    </section>
  );
};
