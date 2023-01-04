import garage from './assets/garage.jpg';
import culture from './assets/culture.png';
// import todo from './assets/todo.png';
import linters from './assets/linters.png';
import sneakers from './assets/sneakers.jpg';
import quizCenter from './assets/quiz-center.png';

const projects = [
  {
    id: 0,
    title: 'Quiz Center',
    url: quizCenter,
    description: 'A React front-end platform using Apollo and GraphQL to connect with a Rails API. Signed-up users can take different quizzes (only once). Also, users can resume a particular quiz at any time with each question answerable just once.',
    stacks: ['Ruby on Rails', 'React', 'JavaScript', 'Apollo Client', 'GraphQL', 'Bootstrap', 'HTML', 'CSS'],
    source: 'https://github.com/wandji20/quiz-center-front',
    live: 'https://quiz-center-front.netlify.app/',
  },
  {
    id: 1,
    title: 'Sneakers Hub',
    url: sneakers,
    description: 'A reactive-rails e-commerce application using Stripe web UI for payments. Users can browse, filter, and search for sneakers all done with turbo-frames. Build with just Rails and used Hotwire to make it reactive and email handling is deferred to a Sidekiq background job.',
    stacks: ['Ruby on Rails', 'Redis', 'SideKiq', 'Hotwire', 'Stimulus JS', 'Bootstrap'],
    live: 'https://sneakers-hub.fly.dev/',
    source: 'https://github.com/wandji20/sneakers-hub/',
  },
  {
    id: 2,
    title: 'A plus Garage',
    url: garage,
    description: 'A mobile car tracker to monitor and update car parts while using a Rails API manage UI data.',
    stacks: ['React and Redux', 'Ruby on Rails', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
    live: 'https://a-plus-garage.netlify.app/',
    source: 'https://github.com/wandji20/a-plus-garage',
  },
  {
    id: 3,
    title: 'Culture Educate',
    url: culture,
    description: ' A Rails app that allows users to create an account and view articles organized by category. Also, users can create, upvote, and downvote articles.',
    stacks: ['Ruby on Rails', 'HTML', 'Bootstrap', 'CSS'],
    source: 'https://github.com/wandji20/Culture-Educate',
    live: 'https://culture-educate-wandji.herokuapp.com/',
  },
  // {
  //   title: 'Todo App',
  //   url: todo,
  //   description: 'A basic to-do list app made with JavaScript and webpack.
  // Users can create projects, remove projects, assign, remove, and edit to-dos.',
  //   stacks: ['JavaScript', 'HTML', 'CSS'],
  //   source: 'https://github.com/wandji20/To-Do-List',
  //   live: 'https://elastic-goldstine-735b20.netlify.app/',
  // },
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
