import clsx from 'clsx';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: string;
};

export const FadeInSection = ({
  children,
  className,
  id,
  delay,
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isMobile = window.matchMedia('(max-width: 768)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: isMobile ? '0px 0px -60px 0px' : '0px 0px -120px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(
        'transition-all duration-700 ease-in',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
        delay,
      )}
    >
      {children}
    </section>
  );
};
