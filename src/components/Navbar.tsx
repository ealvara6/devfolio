import { Bars3Icon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';
import { useEffect, useState } from 'react';
import { links, type ActiveProps } from '../data/navLinks';

type NavbarProps = { openMenu: () => void };

export const Navbar = ({ openMenu }: NavbarProps) => {
  const [isActive, setIsActive] = useState<ActiveProps>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Menu = () => {
    return (
      <button className="col-start-1 sm:hidden justify-self-start">
        <Bars3Icon
          aria-label="Open Menu"
          className="w-10 text-accent bg-bg dark:shadow-none shadow-md p-1 rounded-full"
          onClick={openMenu}
        />
      </button>
    );
  };

  return (
    <nav
      className={`min-h-14 items-center grid p-2 grid-cols-[1fr_2fr_1fr] justify-items-center font-sans fixed top-0 left-0 min-w-full z-10 transition-shadow  ${
        scrolled ? 'backdrop-blur shadow-md' : 'backdrop-blur-none'
      }`}
    >
      <Menu />
      <div className=" justify-self-center sm:justify-self-start font-heading text-3xl sm:text-4xl font-bold col-start-2 sm:col-start-1">
        Alvarado
      </div>
      <ul className="justify-self-center hidden sm:justify-center md:gap-10  sm:flex w-full">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-lg tracking-widest font-subHeading"
          >
            <a
              href="#"
              onClick={() => setIsActive(link.name)}
              className={`rounded-full border-2 border-transparent [transition-property:border-color] hover:border-l-accent-hover hover:border-r-accent-hover transition-colors hover:text-accent-hover px-5 py-2 ${
                isActive === link.name
                  ? 'border-l-accent-hover border-r-accent-hover text-accent-hover'
                  : ''
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="justify-self-end flex gap-6 items-center col-start-3">
        <button className="border cursor-pointer shadow-md hover:-translate-y-0.5 text-sm hover:translate-x-0.5 transition border-border  p-3 rounded-full bg-accent hover:bg-accent-hover active:translate-0">
          <EnvelopeIcon className="w-6 h-6 text-white" aria-label="Contact" />
        </button>
        <ThemeToggle className="hidden sm:block" variant="bg2" />
      </div>
    </nav>
  );
};
