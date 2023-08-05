import { getCount } from './utils';

export type ProjectType = {
  name: string;
  createdWith: string[];
  category: string;
  image: string;
  src: string;
};

export type projectCategoryType = {
  name: string;
  num: number;
};

export const projects = [
  {
    name: 'FurnacePartsDIY',
    createdWith: ['React, Django, Docker, AWS'],
    category: 'Fullstack',
    image: 'parts.png',
    src: 'https://furnacepartsdiy.com/',
  },
  {
    name: "Tom's porfolio/blog",
    createdWith: ['Next 13, MDX, tailwindCSS, dynamodb, Vercel'],
    category: 'Fullstack',
    image: 'myblog.png',
    src: 'https://github.com/tomhyhan/portfolio_n',
  },
  {
    name: 'Inventory Management System',
    createdWith: ['Angular, nodejs'],
    category: 'Fullstack',
    image: 'inventory.png',
    src: 'https://github.com/tomhyhan/anp-awesome',
  },
  {
    name: 'Business Card Maker',
    createdWith: ['React, Firebase, Cloudinary, Post-CSS'],
    category: 'Front-End',
    image: 'card-maker.PNG',
    src: 'https://github.com/tomhyhan/business_card',
  },
  {
    name: 'Cloning YouTube',
    createdWith: ['React, YouTube API, Post CSS'],
    category: 'Front-End',
    image: 'YouTube.png',
    src: 'https://github.com/tomhyhan/React-YouTube',
  },
  {
    name: 'My portfolio',
    createdWith: ['HTML, CSS, JS, Animation, Responsive'],
    category: 'Web-Basic',
    image: 'port.png',
    src: 'https://github.com/tomhyhan/myPortfolio',
  },
  {
    name: 'Maze game',
    createdWith: ['Flask, Pygame, pytest, OOP & MVC'],
    category: 'Back-End',
    image: 'maze.png',
    src: 'https://github.com/AKA-ZSZ/Maze_text_game',
  },
  {
    name: 'Reminder-App-Project',
    createdWith: ['express.js, Ejs'],
    category: 'Back-End',
    image: 'reminder.png',
    src: 'https://github.com/AKA-ZSZ/Reminder-App-Project',
  },
];

export const projectCategories = [
  { name: 'All', num: getCount(null) },
  { name: 'Fullstack', num: getCount('Fullstack') },
  { name: 'Web-Basic', num: getCount('Web-Basic') },
  { name: 'Front-End', num: getCount('Front-End') },
  { name: 'Back-End', num: getCount('Back-End') },
];
