import garage from './assets/garage.jpg';
import culture from './assets/culture.png';
import todo from './assets/todo.png';
import linters from './assets/linters.png';
import sneakers from './assets/sneakers.jpg';

const projects = [
  {
    id: 0,
    title: 'Sneakers Hub',
    url: sneakers,
    description: 'An e-commerce platform for sneakers with a shopping cart functionality and email notifications(In the background) for signing up and creating orders.',
    stacks: ['Ruby on Rails', 'Redis', 'SideKiq', 'Turbo-rails', 'Bootstrap'],
    live: 'https://sneakers-hub.herokuapp.com/',
    source: 'https://github.com/wandji20/sneakers-hub/',
  },
  {
    id: 1,
    title: 'A plus Garage',
    url: garage,
    description: 'A mobile car tracker to monitor and update car parts while using a Rails API manage UI data.',
    stacks: ['React and Redux', 'Ruby on Rails', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
    live: 'https://a-plus-garage.netlify.app/',
    source: 'https://github.com/wandji20/a-plus-garage',
  },
  {
    id: 2,
    title: 'Culture Educate',
    url: culture,
    description: ' A Rails app that allows users to create an account and view articles organized by category. Also, users can create, upvote, and downvote articles.',
    stacks: ['Ruby on Rails', 'HTML', 'Bootstrap', 'CSS'],
    source: 'https://github.com/wandji20/Culture-Educate',
    live: 'https://culture-educate-wandji.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Todo App',
    url: todo,
    description: 'A basic to-do list app made with JavaScript and webpack. Users can create projects, remove projects, assign, remove, and edit to-dos.',
    stacks: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/wandji20/To-Do-List',
    live: 'https://elastic-goldstine-735b20.netlify.app/',
  },
  {
    id: 4,
    title: 'Text Grammar Linter',
    url: linters,
    description: ' A linter, designed to scan a text file and output errors in its structure and typography.',
    stacks: ['Ruby'],
    live: '',
    source: 'https://github.com/wandji20/Grammar-checker',
  },
];

export default projects;
