import { Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export const MobileNavbar = ({ className }: { className?: string }) => {
  return (
    <button
      className={clsx(
        'flex min-w-36 items-center justify-between py-3 px-3 rounded-full min-h-10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/40',
        className
      )}
    >
      <div className="text-md tracking-wider font-heading font-medium">
        Alvarado
      </div>
      <Bars3Icon className="w-6" />
    </button>
  );
};
