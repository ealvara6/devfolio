import reactSvg from '@/assets/react.svg';
import tsSvg from '@/assets/ts.svg';
import tailwindcssSvg from '@/assets/tailwind-css.svg';

export type TechKey = 'react' | 'typescript' | 'tailwindcss';

export type TechInfo = {
  key: string;
  name: string;
  icon: string;
  baseColor: string;
};

export const TECH_REGISTRY: Record<TechKey, TechInfo> = {
  react: { key: 'react', name: 'React', icon: reactSvg, baseColor: '#2b7fff' },
  typescript: {
    key: 'typescript',
    name: 'Typescript',
    icon: tsSvg,
    baseColor: '#2b7fff',
  },
  tailwindcss: {
    key: 'tailwindcss',
    name: 'Tailwindcss',
    icon: tailwindcssSvg,
    baseColor: '#2b7fff',
  },
};
