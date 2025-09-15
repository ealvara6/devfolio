import { XMarkIcon } from '@heroicons/react/24/outline';
import { links } from '../data/navLinks';
import { Transition, TransitionChild } from '@headlessui/react';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer = ({ open, onClose }: DrawerProps) => {
  return (
    <div
      className={`absolute top-0  bg-surface min-h-screen min-w-screen -translate-y-full ${
        open ? 'translate-y-0' : '-translate-y-full'
      } transition-all duration-500 p-3 flex flex-col gap-10`}
    >
      <button onClick={onClose} className="self-end">
        <XMarkIcon className="w-8" />
      </button>
      <div className="flex fixed top- flex-col self-center tracking-widest gap-10 text-xl text-center font-subHeading">
        <Transition show={open}>
          {links.map((link, index) => (
            <TransitionChild>
              <div className="" style={{ transitionDelay: `${index * 300}ms` }}>
                {link.name}
              </div>
            </TransitionChild>
          ))}
        </Transition>
      </div>
    </div>
  );
};
