import headShot from '@/assets/headShot.png';

export const About = () => {
  return (
    <section
      className="h-screen flex flex-col items-center pt-14 mx-7"
      id="about"
    >
      <div className="w-full h-fit bg-surface rounded-xl">
        <div className="p-6 flex flex-col items-center gap-2">
          <img
            src={headShot}
            alt="head shot of Eduardo Alvarado"
            className="rounded-4xl"
          />
          <div className="text-center">
            <div className="text-xl tracking-wide font-semibold">
              Eduardo Alvarado
            </div>
            <div className="text-base text-text-muted font-medium">
              Jr. Full Stack Web Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
