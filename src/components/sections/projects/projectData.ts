import pokeMemImg from '@/assets/pokemem.webp';
import battleShipImg from '@/assets/battleship.webp';

type MetaProps = {
  role: string;
  year: string;
  highlight: string;
  db?: string;
};

type ImageProps = {
  small: string;
  medium: string;
  large: string;
};

export type Project = {
  name: string;
  tagline: string;
  url: string;
  github: string;
  desc: string;
  keyFeatures: string[];
  tech: string[];
  meta: MetaProps;
  img: ImageProps;
};

export const projectData: Project[] = [
  {
    name: 'Postfily',
    tagline: 'Full-stack blogging platform',
    url: 'https://www.postifly.blog',
    github: 'https://github.com/ealvara6/blog-post',
    meta: {
      role: 'full-stack',
      year: '2025',
      highlight: 'Auth + REST API',
      db: 'PostgreSQL',
    },
    desc: 'Developed a full-stack blogging platform using React, Node.js, Express, PostgreSQL, and Prisma ORM. Built RESTful APIs and a modular backend to support dynamic content, user authentication, and scalable data management, alongside a responsive frontend with real-time state updates.',
    keyFeatures: [
      'JWT-based authentication with password hashing and protected routes',
      'Full CRUD functionality for posts and comments',
      'Relational database design with Prisma ORM',
      'Like system with structured data relationships',
      'Backend middleware for authentication and request handling',
      'Form validation and dynamic UI updates',
    ],
    tech: ['React', 'Node', 'Postgres'],
    img: {
      small: '/images/postifly-400.webp',
      medium: '/images/postifly-800.webp',
      large: '/images/postifly-1600.webp',
    },
  },
  {
    name: 'PokeMem',
    tagline: 'Memory game',
    url: 'https://poke-mem-xi.vercel.app/',
    github: 'https://github.com/ealvara6/Poke-Mem',
    meta: {
      role: 'front-end',
      year: '2023',
      highlight: 'UI + API consumption',
    },
    desc: 'Built a Pokémon memory game using the PokéAPI, featuring dynamic data fetching, randomized gameplay, and interactive UI state management in React.',
    keyFeatures: [
      'Dynamic data fetching from PokéAPI',
      'Persistent score tracking with localStorage',
      'Game logic to track selections and prevent duplicates',
      'Difficulty increase after each round',
      'Randomized card shuffling for replayability',
      'Complex state management for game flow and UI updates',
    ],
    tech: ['React', 'API', 'SASS'],
    img: {
      small: '/images/pokemem-400.webp',
      medium: '/images/pokemem-800.webp',
      large: '/images/pokemem-1600.webp',
    },
  },
  {
    name: 'Battleship',
    tagline: 'Online battleship',
    url: 'https://battleship-eight.vercel.app/',
    github: 'https://github.com/ealvara6/battleship',
    meta: {
      role: 'front-end',
      year: '2021',
      highlight: 'javascript logic + jest testing',
    },
    desc: 'Built a turn-based Battleship game using object-oriented JavaScript, featuring modular game logic, AI-driven opponent behavior, and fully tested core functionality.',
    keyFeatures: [
      'Object-oriented design for board, ship, and game state management',
      'Turn-based game flow with win condition handling',
      'AI opponent logic to simulate player decisions',
      'Input validation to ensure valid gameplay interactions',
      'Full test coverage using Jest',
    ],
    tech: ['JavaScript', 'Jest', 'SASS'],
    img: {
      small: '/images/battleship-400.webp',
      medium: '/images/battleship-800.webp',
      large: '/images/battleship-1600.webp',
    },
  },
];
