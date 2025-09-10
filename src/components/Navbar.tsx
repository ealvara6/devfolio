import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';

const links = [{ name: 'About' }, { name: 'Projects' }, { name: 'Contact' }];

export const Navbar = () => {
  return (
    <nav className="min-h-14 items-center  shadow-md grid  p-2 grid-cols-3 justify-items-center font-sans">
      <div className=" justify-self-start font-heading text-4xl font-bold">
        Alvarado
      </div>
      <ul className="flex gap-14 justify-self-center">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-lg tracking-widest font-subHeading"
          >
            <a
              href="#"
              className=" rounded-full border-2 border-bg  hover:border-l-accent-hover hover:border-r-accent-hover transition-colors hover:text-accent-hover px-5 py-2 [transition-property:border-color]"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="justify-self-end flex gap-6 items-center">
        <button className="border cursor-pointer shadow-md hover:-translate-y-0.5 text-sm hover:translate-x-0.5 transition border-border  p-3 rounded-full bg-accent hover:bg-accent-hover active:translate-0">
          <EnvelopeIcon className="w-6 h-6 text-white" />
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
