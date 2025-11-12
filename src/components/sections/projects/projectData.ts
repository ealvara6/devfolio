import postiflyImg from '@/assets/postifly.webp';
import pokeMemImg from '@/assets/pokemem.webp';
import battleShipImg from '@/assets/battleship.webp';

export type Project = {
  name: string;
  tagline: string;
  tech: string[];
  img: string;
};

export const projectData: Project[] = [
  {
    name: 'Postfily',
    tagline:
      'A full-stack blogging platform with authentication, REST APIs, and a PostgreSQL database.',
    tech: ['React', 'Node', 'Postgres'],
    img: postiflyImg,
  },
  {
    name: 'PokeMem',
    tagline:
      'A Pokémon memory game with API-powered levels and persistent score tracking.',
    tech: ['React', 'API', 'SASS'],
    img: pokeMemImg,
  },
  {
    name: 'Battleship',
    tagline:
      'A turn-based Battleship game built with object-oriented JavaScript, AI logic, and full Jest test coverage.',
    tech: ['JavaScript', 'Jest', 'SASS'],
    img: battleShipImg,
  },
];
