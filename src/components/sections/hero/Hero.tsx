import Memoji from '@/assets/Memoji.png';
import { Button } from '@/components/shared/Button';
import { FadeInSection } from '@/components/shared/FadeInSection';

export const Hero = () => {
  return (
    <section
      className="min-h-[90vh] w-full bg-[url('../assets/Hexagon.svg')] relative z-10 flex justify-center"
      id="Hero"
    >
      <div className="absolute inset-0 bg-black/10 -z-10 bg-gradient-to-b from-transparent to-bg pointer-events-none"></div>
      <FadeInSection className="flex justify-center w-full">
        <div className="mx-7 w-full  md:max-w-7xl flex flex-col gap-2 justify-center items-center text-text">
          <div className="border w-48 h-48 md:w-64 md:h-64 bg-surface border-border rounded-full flex justify-center items-center">
            <img
              src={Memoji}
              alt="Image of Memoji"
              className="w-24 md:w-36 h-auto"
            />
          </div>
          <div className="flex flex-col text-center">
            <div className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-medium tracking-wide relative">
              Hi, I'm Eduardo
              <span className="absolute text-lg sm:text-xl md:text-3xl lg:text-4xl translate-y-0.5 lg:translate-y-1.5 sm:translate-y-1">
                &#x1F44B;
              </span>
            </div>
            <div className="font-subheading text-md sm:text-lg md:text-xl font-light text-text-muted tracking-normal pb-4">
              Full-Stack Developer & Tech Enthusiast
            </div>
          </div>
          <div className="w-full text-base md:text-lg flex flex-col gap-6 tracking-wide items-center">
            <Button href="#Project" className="w-full max-w-2xl">
              View My Work
            </Button>
            <Button
              className="w-full max-w-2xl"
              href="#Contact"
              variant="outline"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
