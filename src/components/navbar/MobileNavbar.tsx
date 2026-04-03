import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { links } from '@/data/navLinks';
import { ChevronDown } from 'lucide-react';

export const MobileNavbar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex gap-4 min-w-36 text-lg tracking-wide group rounded-full min-h-12 bg-white/5 backdrop-blur-md shadow-lg shadow-black/40">
            Alvarado
            <ChevronDown className="scale-150 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
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
