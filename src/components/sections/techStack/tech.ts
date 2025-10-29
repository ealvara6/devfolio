import reactSvg from '@/assets/react.svg';
import tsSvg from '@/assets/ts.svg';
import tailwindcssSvg from '@/assets/tailwind-css.svg';

export type TechKey = 'react' | 'typescript' | 'tailwindcss';

const blue = '#2b7fff';

export type TechInfo = {
  key: string;
  name: string;
  icon: string;
  baseColor: string;
};

export const TECH_REGISTRY: Record<TechKey, TechInfo> = {
  react: { key: 'react', name: 'React', icon: reactSvg, baseColor: blue },
  typescript: {
    key: 'typescript',
    name: 'Typescript',
    icon: tsSvg,
    baseColor: blue,
  },
  tailwindcss: {
    key: 'tailwindcss',
    name: 'Tailwindcss',
    icon: tailwindcssSvg,
    baseColor: blue,
  },
};
