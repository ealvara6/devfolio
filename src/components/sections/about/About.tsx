import headShot from '@/assets/headShot.png';

export const About = () => {
  return (
    <section
      className="h-screen flex flex-col items-center pt-14 mx-7"
      id="about"
    >
      <div className="w-full h-fit bg-surface rounded-xl">
        <img
          src={headShot}
          alt="head shot of Eduardo Alvarado"
          className="p-6 rounded-4xl"
        />
      </div>
    </section>
  );
};
