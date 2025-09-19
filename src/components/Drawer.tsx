import { XMarkIcon } from '@heroicons/react/24/outline';
import { links } from '../data/navLinks';
import { Transition, TransitionChild } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle';
import { useEffect } from 'react';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer = ({ open, onClose }: DrawerProps) => {
  const delays = ['delay-[300ms]', 'delay-[600ms]', 'delay-[900ms]'];

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`absolute top-0  bg-surface min-h-screen min-w-screen -translate-y-full sm:hidden z-50 ${
        open ? 'translate-y-0' : '-translate-y-full'
      } transition-all duration-700 p-3 gap-10 flex flex-col sticky`}
    >
      <div className=" flex justify-between">
        <button onClick={onClose}>
          <XMarkIcon className="w-8" />
        </button>
        <ThemeToggle />
      </div>
      <Transition show={open}>
        <div className="flex flex-col self-center tracking-widest gap-6 text-xl text-center font-subHeading">
          {links.map((link, index) => (
            <TransitionChild key={link.name}>
              <div
                className={`transition-opacity duration-300 ease-in data-closed:opacity-0 ${
                  open ? delays[index] : ''
                }`}
              >
                {link.name}
              </div>
            </TransitionChild>
          ))}
        </div>
      </Transition>
    </div>
  );
};
