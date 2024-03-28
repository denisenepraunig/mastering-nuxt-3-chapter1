// const course = [
//   { title: 'Chapter 1 - Building our MVP',
//     lessons: [
//       { title: 'Introduction to our MVP' },
//       { title: 'Setting up our project' },
//       { title: 'Building our first component' }
//     ]
//   },
//   { title: 'Chapter 2 - Building our API',
//     lessons: [
//       { title: 'Introduction to our API' },
//       { title: 'Setting up our API' },
//       { title: 'Building our first route' }
//     ]
//   },
//   { title: 'Chapter 3 - Building our Database',
//     lessons: [
//       { title: 'Introduction to our Database' },
//       { title: 'Setting up our Database' },
//       { title: 'Building our first table' }
//     ]
//   }
// ]
const course = [
  { 
    title: 'Chapter 1 - Building our MVP',
    description: 'In this chapter, we will focus on building a Minimum Viable Product (MVP) for our application. We will introduce the concept of an MVP, set up our project, and build our first component.',
    lessons: [
      { title: 'Introduction to our MVP', description: 'Learn what an MVP is and why it is important in the software development process.' },
      { title: 'Setting up our project', description: 'Get your development environment ready and set up the project.' },
      { title: 'Building our first component', description: 'We will start coding and build our first component for the MVP.' }
    ]
  },
  { 
    title: 'Chapter 2 - Building our API',
    description: 'This chapter will guide you through the process of building the API for our application. We will introduce the concept of an API, set it up, and build our first route.',
    lessons: [
      { title: 'Introduction to our API', description: 'Understand what an API is and how it interacts with other parts of an application.' },
      { title: 'Setting up our API', description: 'We will set up the API for our application.' },
      { title: 'Building our first route', description: 'Learn how to build routes for your API.' }
    ]
  },
  { 
    title: 'Chapter 3 - Building our Database',
    description: 'In the final chapter, we will build the database for our application. We will introduce the concept of a database, set it up, and build our first table.',
    lessons: [
      { title: 'Introduction to our Database', description: 'Learn what a database is and why it is important in an application.' },
      { title: 'Setting up our Database', description: 'We will set up the database for our application.' },
      { title: 'Building our first table', description: 'Understand how to create tables in a database and create the first one.' }
    ]
  }
]
export default () => {
  return {
    course: course,
  };
};
