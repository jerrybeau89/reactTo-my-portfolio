import dailyPlanner from'../assets/images/daily-planner.png'
import careerfindr from'../assets/images/careerfindr.png'
import FGT from'../assets/images/FGT.png'
import bookSearch from '../assets/images/bookSearch.png'


export const projects = [
  {
    id: 0,
    title: 'Fried Green Tomatoes',
    description: 'Movie search site',
    image: `${FGT}`,
    imagealt: 'Fried Green Tomatoes',
    github: 'https://github.com/jerrybeau89/fried-green-tomatoes',
    deployed: 'https://jerrybeau89.github.io/fried-green-tomatoes/',
  },
  {
    id: 1,
    title: 'CareerFindr',
    description: 'Job finder site',
    image: `${careerfindr}`,
    imagealt: 'CareerFindr',
    github: 'https://github.com/jerrybeau89/Proxima-Nebula',
    deployed: 'https://careerfindr.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Daily Planner',
    description: 'Daily Planner',
    image: `${dailyPlanner}`,
    imagealt: 'Daily Planner',
    github: 'https://github.com/jerrybeau89/daily-planner',
    deployed: 'https://jerrybeau89.github.io/daily-planner/',
  },
  {
    id: 3,
    title: 'Book Search',
    description: 'Book Search Engine',
    image: `${bookSearch}`,
    imagealt: 'Book Search',
    github: 'https://github.com/jerrybeau89/book-search',
    deployed: 'https://buchsuche.herokuapp.com/',
  }
];