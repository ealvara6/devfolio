import headShot from '@/assets/headShot.png';

export const About = () => {
  return (
    <section
      className="h-screen flex flex-col items-center pt-14 mx-7"
      id="about"
    >
      <div className="w-full h-fit bg-surface rounded-xl">
        <div className="p-8 flex flex-col items-center gap-2">
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
      </div>
    </section>
  );
};
