import Memoji from '@/assets/Memoji.png';

export const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[url('../assets/Hexagon.svg')] relative z-10 pt-8">
      <div className="absolute inset-0 bg-black/10 -z-10 bg-gradient-to-b from-transparent to-bg pointer-events-none"></div>
      <div className="mx-7 pt-24 flex flex-col gap-2 justify-center items-center text-text">
        <div className="border w-64 h-64 bg-surface border-border rounded-full flex justify-center items-center">
          <img src={Memoji} alt="Image of Memoji" className="w-36 h-auto" />
        </div>
        <div className="flex flex-col text-center">
          <div className="font-heading text-3xl font-medium tracking-wider relative">
            Hi, I'm Eduardo
            <span className="absolute text-2xl translate-y-0.5">&#x1F44B;</span>
          </div>
          <div className="font-subheading text-lg font-light text-text-muted tracking-normal pb-4">
            Full-Stack Developer & Tech Enthusiast
          </div>
        </div>
        <div className="w-full text-lg flex flex-col gap-6 tracking-wide">
          <button className="rounded-md w-full py-3 bg-accent border-2 border-accent">
            View My Work
          </button>
          <button className="rounded-md w-full py-3 border-[var(--color-accent-light)] border-2">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
