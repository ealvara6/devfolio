import headShot from '@/assets/headshot-no-background.png';

export const About = () => {
  return (
    <section
      className="relative min-h-screen scroll-mt-20 flex justify-center pt-24 w-full max-w-3xl mx-auto"
      id="about"
    >
      <div className="absolute tracking-widest text-6xl top-64 left-4 font-name font-bold">
        Eduardo
      </div>
      <div className="absolute tracking-widest text-6xl top-64 right-0 font-name font-bold">
        {' '}
        Alvarado
      </div>
      <img
        src={headShot}
        alt="head shot of Eduardo Alvarado"
        className="h-full mask-b-from-90% mask-b-to-100%"
      />
    </section>
  );
};
