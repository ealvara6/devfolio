import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { links } from '@/data/navLinks';

export const MobileNavbar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex gap-4 min-w-36 text-lg tracking-wide group rounded-full min-h-12 bg-white/5 backdrop-blur-md shadow-lg shadow-black/40">
            Alvarado
            <Bars3Icon className="scale-150 transition-transform duration-300 group-data-[state=open]:rotate-90" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/5 backdrop-blur-md shadow-lg shadow-black/40 border-none text-white">
          <DropdownMenuGroup>
            {links.map((link) => (
              <DropdownMenuItem className="justify-center text-md">
                <a href={`#${link.name}`}>{link.name}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
