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
        `text-xl sm:text2xl  font-semibold tracking-wider`,
        className,
      )}
    >
      {children}
    </h2>
  );
};
