import type { TechKey } from './tech';

export type Section = {
  key: string;
  name: string;
  tech: TechKey[];
};

export const SECTIONS: Section[] = [
  {
    key: 'frontend',
    name: 'Frontend',
    tech: [
      'react',
      'typescript',
      'tailwindcss',
      'reactQuery',
      'zod',
      'html5',
      'css3',
      'vite',
    ],
  },
  {
    key: 'backend',
    name: 'Backend',
    tech: ['nodejs', 'prisma', 'jwt'],
  },
  {
    key: 'tools',
    name: 'Tools',
    tech: ['github', 'eslint', 'vercel', 'prettier', 'railway', 'npm'],
  },
];
