import clsx from 'clsx';
import type React from 'react';

type ButtonVariant = 'primary' | 'outline';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  'border rounded-md border-accent hover:-translate-y-0.5 hover:translate-x-0.5 transition-all shadow-md cursor-pointer active:translate-0';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent',
  outline: 'bg-transparent',
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
