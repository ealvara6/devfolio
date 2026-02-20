import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from '../ThemeToggle';
import { useEffect, useState } from 'react';
import { links } from '../../data/navLinks';
import clsx from 'clsx';
import { useActiveSection } from '@/context/useActiveSection';

export const Navbar = ({ className }: { className?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        `min-h-14 items-center p-2 grid-cols-[1fr_2fr_1fr] justify-items-center font-sans fixed top-0 left-0 min-w-full z-10 transition-shadow  ${
          scrolled ? 'backdrop-blur shadow-md' : 'backdrop-blur-none'
        }`,
        className,
      )}
    >
      <div className="justify-self-start font-heading text-4xl font-bold :col-start-1">
        Alvarado
      </div>
      <ul className="justify-self-center justify-center md:gap-10  flex w-full">
        {links.map((link) => (
          <li
            key={link.name}
            className={clsx(
              'text-lg tracking-widest font-subHeading  rounded-xl p-2',
            )}
          >
            <a
              href={`#${link.name}`}
              className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-accent after:transition-all after:duration-300 after:origin-center after:scale-x-0 hover:after:scale-x-100 px-5 py-2 ${
                activeSection === link.name && 'after:scale-x-100'
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
        <ThemeToggle className="block" variant="bg2" />
      </div>
    </div>
  );
};
