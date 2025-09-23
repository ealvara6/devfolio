import headShot from '@/assets/headshot-no-background.png';

export const About = () => {
  return (
    <section
      className="min-h-screen scroll-mt-20 flex justify-center pt-24"
      id="about"
    >
      <img
        src={headShot}
        alt="head shot of Eduardo Alvarado"
        className="h-full mask-b-from-90% mask-b-to-100%"
      />
    </section>
  );
};
