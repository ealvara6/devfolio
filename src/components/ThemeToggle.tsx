import { Switch } from '@headlessui/react';
import { useTheme } from '../useTheme';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const ThemeToggle = () => {
  const { toggle } = useTheme();
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={toggle}
      className="group h-10 w-19 items-center rounded-full bg-surface  transition shadow-md"
    >
      <div className="flex justify-between pr-2 relative">
        <SunIcon className="size-6 text-amber-500 absolute left-2 scale-0 group-data-checked:scale-100 transition duration-500" />
        <span className=" size-6 translate-x-2 transition z-20 group-data-checked:translate-x-11 border-border flex items-center border rounded-full bg-white duration-500"></span>
        <MoonIcon className="size-6 text-amber-400 absolute right-2 group-data-checked:scale-0 transition scale-100 duration-500" />
      </div>
    </Switch>
  );
};
