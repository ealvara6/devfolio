import reactSvg from '@/assets/tech-icons/react.svg';
import tsSvg from '@/assets/tech-icons/ts.svg';
import tailwindcssSvg from '@/assets/tech-icons/tailwind-css.svg';
import reactQuerySvg from '@/assets/tech-icons/react-query.svg';
import zodSvg from '@/assets/tech-icons/zod.svg';
import html5Svg from '@/assets/tech-icons/html5.svg';
import css3Svg from '@/assets/tech-icons/css3.svg';
import viteSvg from '@/assets/tech-icons/vite.svg';
import nodeJSSvg from '@/assets/tech-icons/nodejs.svg';
import prismaSvg from '@/assets/tech-icons/prisma.svg';
import jwtSvg from '@/assets/tech-icons/jwt.svg';
import githubSvg from '@/assets/tech-icons/github.svg';
import vercelSvg from '@/assets/tech-icons/vercel.svg';
import railwaySvg from '@/assets/tech-icons/railway.svg';
import npmSvg from '@/assets/tech-icons/npm.svg';
import eslintSvg from '@/assets/tech-icons/eslint.svg';
import prettierSvg from '@/assets/tech-icons/prettier.svg';

const blue = '#155dfc';
const red = '#e7000b';
const purple = '#9810fa';
const green = '#00a63e';
const grey = '#9f9fa9';

export type TechKey =
  | 'react'
  | 'typescript'
  | 'tailwindcss'
  | 'reactQuery'
  | 'zod'
  | 'html5'
  | 'css3'
  | 'vite'
  | 'nodejs'
  | 'prisma'
  | 'jwt'
  | 'github'
  | 'vercel'
  | 'railway'
  | 'npm'
  | 'eslint'
  | 'prettier';

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
  nodejs: {
    key: 'nodejs',
    name: 'NodeJS',
    icon: nodeJSSvg,
    baseColor: green,
  },
  prisma: {
    key: 'prisma',
    name: 'Prisma',
    icon: prismaSvg,
    baseColor: blue,
  },
  jwt: {
    key: 'jwt',
    name: 'Json Web Token',
    icon: jwtSvg,
    baseColor: purple,
  },
  github: {
    key: 'github',
    name: 'Github',
    icon: githubSvg,
    baseColor: grey,
  },
  vercel: {
    key: 'vercel',
    name: 'Vercel',
    icon: vercelSvg,
    baseColor: grey,
  },
  railway: {
    key: 'railway',
    name: 'Railway',
    icon: railwaySvg,
    baseColor: grey,
  },
  npm: {
    key: 'npm',
    name: 'npm',
    icon: npmSvg,
    baseColor: red,
  },
  eslint: {
    key: 'eslint',
    name: 'ESlint',
    icon: eslintSvg,
    baseColor: purple,
  },
  prettier: {
    key: 'prettier',
    name: 'Prettier',
    icon: prettierSvg,
    baseColor: red,
  },
};
