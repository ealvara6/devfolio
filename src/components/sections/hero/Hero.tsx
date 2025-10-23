import Memoji from '@/assets/Memoji.png';

export const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[url('../assets/Hexagon.svg')] relative z-10">
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="mx-7 pt-24 flex flex-col gap-4 justify-center items-center text-text">
        <div className="border w-72 h-72 bg-border border-border rounded-full flex justify-center items-center">
          <img src={Memoji} alt="Image of Memoji" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col text-center gap-1">
          <div className="font-heading text-3xl font-bold tracking-wider">
            Hi, I'm Eduardo
          </div>
          <div className="font-subheading text-lg font-medium text-text-muted tracking-wide">
            Full-Stack Developer & Tech Enthusiast
          </div>
        </div>
        <div className="w-full text-xl flex flex-col gap-4 tracking-wide">
          <button className="rounded-md w-full py-4 bg-accent">
            View My Work
          </button>
          <button className="rounded-md w-full py-4 border border-accent ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
