import postiflyImg from '@/assets/postifly.webp';

export type Project = {
  name: string;
  img: string;
};

export const projectData: Project[] = [
  {
    name: 'Postfily',
    img: postiflyImg,
  },
];
