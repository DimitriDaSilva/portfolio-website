const projects = [
  {
    id: 1,
    title: 'A feature-packed to-do list',
    icon: '/assets/images/projects/to-do-list/logo.png',
    color: '#FFC176',
    stack: [
      'HTML', 'CSS', 'JavaScript', 'Webpack', 'Netlify'
    ],
    description: 'A simple but cool project using vanilla JavaScript. I tried to add most of the features that I would expect in a to-do list app.\n\nIt supports drag-and-drop both with mouse and touch and it\'s fully customizable:\n- Background image using Unslapsh\'s API\n- Dark mode\n- Editable names and colors of the categories)',
    skills: [
      'DOM manipulation', 'Events', 'API calls', 'Serverless functions'
    ],
    images: [
      '../images/projects/to-do-list/image1.png',
      '../images/projects/to-do-list/image2.png'
    ],
  },
  {
    id: 2,
    title: 'My portfolio website',
    icon: '/assets/images/projects/portfolio-website/logo.png',
    color: '#25EF94',
    stack: [
      'React', 'TypeScript', 'styled-components', 'HTML', 'CSS'
    ],
    description: 'My very own portfolio website. Like every developer, I will be continuously tweaking it and adding more project with time. To save myself some time, I used Figma to desgin it.',
    skills: [
      'Component-Driven Development', 'Custom domain', 'Web hosting'
    ],
    images: [
      '../images/projects/portfolio-website/image1.png',
      '../images/projects/portfolio-website/image2.png'
    ],
  },
  {
    id: 1,
    title: 'A team-built shell',
    icon: '/assets/images/projects/minishell/logo.png',
    color: '#25C3EF',
    stack: [
      'C'
    ],
    description: 'A custom shell built with a partner',
    skills: [
      'Pair programming', 'Git flow', 'Shell scripting', 'Terminal manipulation with the Termcap library', 'Double linked-lists'
    ],
    images: [
      '../images/projects/minishell/image1.png',
      '../images/projects/minishell/image2.png'
    ],
  },
];

export default projects;
