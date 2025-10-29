import reactSvg from '@/assets/react.svg';

export type TechInfo = {
  key: string;
  name: string;
  icon: string;
  baseColor: string;
};

export const TECH_REGISTRY: Record<string, TechInfo> = {
  react: { key: 'react', name: 'React', icon: reactSvg, baseColor: '#2b7fff' },
};
