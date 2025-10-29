import type { TechKey } from './tech';

export type Section = {
  key: string;
  name: string;
  tech: TechKey[];
};

export const SECTIONS: Section[] = [
  { key: 'frontend', name: 'Frontend', tech: ['react'] },
];
