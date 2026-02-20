import { Switch } from '@headlessui/react';
import { useTheme } from '../context/theme/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

type Variant = 'bg1' | 'bg2';

const v = {
  bg1: 'bg-bg',
  bg2: 'bg-surface',
};

export const ThemeToggle = ({
  className,
  variant = 'bg1',
}: {
  className?: string;
  variant?: Variant;
}) => {
  const { toggle, isDark } = useTheme();

  return (
    <Switch
      checked={!isDark}
      onChange={toggle}
      className={clsx(
        'group h-10 w-19 items-center rounded-full  transition shadow-md',
        className,
        v[variant],
      )}
    >
      <div className="flex justify-between pr-2 relative">
        <SunIcon className="size-6 text-amber-500 absolute left-2 scale-0 group-data-checked:scale-100 transition duration-500" />
        <span className=" size-6 translate-x-2 transition z-20 group-data-checked:translate-x-11 border-border flex items-center border rounded-full bg-white duration-500"></span>
        <MoonIcon className="size-6 text-indigo-200 absolute right-2 group-data-checked:scale-0 transition scale-100 duration-500" />
      </div>
    </Switch>
  );
};
