import clsx from 'clsx';
import type { ReactNode } from 'react';

type SubHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const SubHeading = ({ children, className }: SubHeadingProps) => {
  return (
    <h2
      className={clsx(
        `text-xl sm:text-2xl  font-semibold tracking-widest`,
        className,
      )}
    >
      {children}
    </h2>
  );
};
