import postiflyImg from '@/assets/postifly.webp';
import pokeMemImg from '@/assets/pokemem.webp';
import battleShipImg from '@/assets/battleship.webp';

export type Project = {
  name: string;
  img: string;
};

export const projectData: Project[] = [
  {
    name: 'Postfily',
    img: postiflyImg,
  },
  {
    name: 'PokeMem',
    img: pokeMemImg,
  },
  {
    name: 'Battleship',
    img: battleShipImg,
  },
];
