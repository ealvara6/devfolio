import clsx from 'clsx';
import type { ReactNode } from 'react';

type SubHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const SubHeading = ({ children, className }: SubHeadingProps) => {
  return (
    <h2 className={clsx(`text-5xl font-bold tracking-widest`, className)}>
      {children}
    </h2>
  );
};
