import { Bars3Icon } from '@heroicons/react/24/outline';

export const MobileNavbar = () => {
  return (
    <button className="flex min-w-34 sm:hidden items-center justify-between py-2 px-3 rounded-full min-h-10 border bg-white/5 backdrop-blur-md shadow-lg shadow-black/40">
      <div className="text-md tracking-wider font-medium">Alvarado</div>
      <Bars3Icon className="w-6" />
    </button>
  );
};
