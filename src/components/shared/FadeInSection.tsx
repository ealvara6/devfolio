import clsx from 'clsx';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const FadeInSection = ({ children, className }: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-in',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      )}
    >
      {children}
    </section>
  );
};
