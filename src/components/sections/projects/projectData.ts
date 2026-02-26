import postiflyImg from '@/assets/postifly.webp';
import pokeMemImg from '@/assets/pokemem.webp';
import battleShipImg from '@/assets/battleship.webp';

type MetaProps = {
  role: string;
  year: string;
  highlight: string;
  db?: string;
};

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  tech: string[];
  meta: MetaProps;
  img: string;
};

export const projectData: Project[] = [
  {
    name: 'Postfily',
    tagline: 'Full-stack blogging platform',
    meta: {
      role: 'full-stack',
      year: '2025',
      highlight: 'Auth + REST API',
      db: 'PostgreSQL',
    },
    desc: 'A full-stack blogging platform with authentication, REST APIs, and a PostgreSQL database.',
    tech: ['React', 'Node', 'Postgres'],
    img: postiflyImg,
  },
  {
    name: 'PokeMem',
    tagline: 'Memory game',
    meta: {
      role: 'front-end',
      year: '2023',
      highlight: 'UI + API consumption',
    },
    desc: 'A Pokémon memory game with API-powered levels and persistent score tracking.',
    tech: ['React', 'API', 'SASS'],
    img: pokeMemImg,
  },
  {
    name: 'Battleship',
    tagline: 'Online battleship',
    meta: {
      role: 'front-end',
      year: '2021',
      highlight: 'javascript logic + jest testing',
    },
    desc: 'A turn-based Battleship game built with object-oriented JavaScript, AI logic, and full Jest test coverage.',
    tech: ['JavaScript', 'Jest', 'SASS'],
    img: battleShipImg,
  },
];
