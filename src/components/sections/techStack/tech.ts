import reactSvg from '@/assets/react.svg';
import tsSvg from '@/assets/ts.svg';
import tailwindcssSvg from '@/assets/tailwind-css.svg';
import reactQuerySvg from '@/assets/react-query.svg';
import zodSvg from '@/assets/zod.svg';
import html5Svg from '@/assets/html5.svg';
import css3Svg from '@/assets/css3.svg';
import viteSvg from '@/assets/vite.svg';

export type TechKey =
  | 'react'
  | 'typescript'
  | 'tailwindcss'
  | 'reactQuery'
  | 'zod'
  | 'html5'
  | 'css3'
  | 'vite';

const blue = '#155dfc';
const red = '#e7000b';
const purple = '#9810fa';

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
  reactQuery: {
    key: 'reactQuery',
    name: 'React Query',
    icon: reactQuerySvg,
    baseColor: red,
  },
  zod: {
    key: 'zod',
    name: 'Zod',
    icon: zodSvg,
    baseColor: blue,
  },
  html5: {
    key: 'html5',
    name: 'Html5',
    icon: html5Svg,
    baseColor: red,
  },
  css3: {
    key: 'css3',
    name: 'Css3',
    icon: css3Svg,
    baseColor: blue,
  },
  vite: {
    key: 'vite',
    name: 'Vite',
    icon: viteSvg,
    baseColor: purple,
  },
};
