const projects = [
  {
    title: "A feature-packed to-do list",
    icon: "/assets/projects/to-do-list/logo.svg",
    color: "#FFC176",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple but cool project using vanilla JavaScript. I tried to add most of the features that I would expect in a to-do list app.\nIt supports drag-and-drop both with mouse and touch and it's fully customizable:\n- Background image using Unslapsh's API\n- Dark mode\n- Editable names and colors of the categories)",
    skills: ["DOM manipulation", "Events", "API calls", "Serverless functions"],
    images: [
      "/assets/projects/to-do-list/image1.png",
      "/assets/projects/to-do-list/image2.png",
      "/assets/projects/to-do-list/image3.png",
    ],
    websiteLink: "https://yet-another-to-do-list.netlify.app/",
    githubLink: "https://github.com/DimitriDaSilva/yet-another-to-do-list",
  },
  {
    title: "My portfolio website",
    icon: "/assets/projects/portfolio-website/logo.svg",
    color: "#25EF94",
    stack: ["React", "TypeScript"],
    description:
      "My very own portfolio website. Like every developer, I will be continuously tweaking it and adding more project with time. To save myself some time, I used Figma to design it.",
    skills: [
      "Component-Driven Development (CDD)",
      "Custom domain",
      "Web hosting & deployment",
    ],
    images: [],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/portfolio-website",
  },
  {
    title: "Byzans, a community for readers",
    icon: "/assets/projects/byzans/logo.svg",
    color: "#625ED8",
    stack: ["React", "TypeScript", "Go", "MongoDB", "PostgreSQL"],
    description:
      "Byzans is my mentor's start-up, an app that provides readers a platform to exchange about the books they are currently reading. I helped Byzans working on a website version of the platform, more specifically:\n- I coded 2 web pages using React, TypeScript and styled-components\n- I took part in the refactoring of the back-end of the platform in Go with PostgreSQL and MongoDB as databases",
    skills: [
      "Scrum/agile development",
      "Domain-Driven Design (DDD)",
      "Git flow",
      "Component-Driven Development (CDD)",
      "Team work",
    ],
    images: [
      "/assets/projects/byzans/image1.png",
      "/assets/projects/byzans/image2.png",
      "/assets/projects/byzans/image3.png",
    ],
    websiteLink: "https://byzans.com/",
    githubLink: "",
  },
  {
    title: "A team-built shell",
    icon: "/assets/projects/minishell/logo.svg",
    color: "#25C3EF",
    stack: ["C"],
    description:
      "A custom shell built with a partner. Some of the features that have been implemented:\n- Command history through up and down arrows\n- Absolute and relative path for executables\n- Built-in functions like exit, env or export\n- Environment variables\n- AND, OR and ';'",
    skills: [
      "Pair programming",
      "Git flow",
      "Shell scripting",
      "Terminal manipulation with the Termcap library",
      "Double linked-lists",
      "Team work",
    ],
    images: ["/assets/projects/minishell/image1.png"],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/42_minishell",
  },
  {
    title: "A open-source Discord bot",
    icon: "/assets/projects/discord-bot/logo.svg",
    color: "#FFB4A2",
    stack: ["Python"],
    description:
      "A web-hosted bot for the 42 Lisboa community-managed Discord server. With a team of 4, we have opened the Discord server and created a bot from scratch using Python. At the time of writing, there are close to 300 people on the Discord server.",
    skills: [
      "Git flow",
      "Team work",
      "Community management",
      "Rolling out updates",
    ],
    images: [],
    websiteLink: "",
    githubLink: "https://github.com/protsaq/42discord_bot",
  },
  {
    title: "A raycasting engine",
    icon: "/assets/projects/cub3d/logo.svg",
    color: "#606C38",
    stack: ["C"],
    description:
      "Raycasting is a lightweight 3D rendering technique used by games like Doom or Wolfenstein 3D in the 90's. We had a very minimalistic library to help us implement the raycasting engine. We had to render a 2D map passed as command-line argument with sprites and textures.",
    skills: [
      "Graphical and keyboard interface",
      "Game development",
      "Algorithmic",
    ],
    images: [
      "/assets/projects/cub3d/image1.png",
      "/assets/projects/cub3d/image2.png",
      "/assets/projects/cub3d/image3.png",
    ],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/42_cub3d",
  },
  {
    title: "An optimised sorting algorithm using stacks",
    icon: "/assets/projects/push_swap/logo.svg",
    color: "#F2CC8F",
    stack: ["C"],
    description:
      "This project consists in sorting data on a stack, with a limited set of instructions, using the lowest possible number of actions.",
    skills: ["Algorithmic", "Space and Time Complexity"],
    images: [],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/42_push_swap",
  },
  {
    title: "Reimplementation of C++ STL containers",
    icon: "/assets/projects/stl-containers/logo.svg",
    color: "#A8DADC",
    stack: ["C++"],
    description:
      "Reimplementation of 4 STL containers in C++ and their iterators:\n- Vector & Stack using an underlying array\n- Map & Set using a binary search tree (more specifically a red-black tree)",
    skills: [
      "Test-Driven development",
      "Data structures",
      "Self-balancing binary search trees",
    ],
    images: [],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/42_ft_containers",
  },
  {
    title: "An assembly library",
    icon: "/assets/projects/libasm/logo.svg",
    color: "#2A9D8F",
    stack: ["Assembly"],
    description:
      'Using assembly (more specifically, 64 bits ASM Intel syntax), we had to implement 11 functions. It was a project to learn how to program "close to the metal", we had to code system calls (write and read), string and linked-list manipulation. Sorting a linked-list using the merge sort algorithm in Assembly was about as fun as it sounds!',
    skills: ["Machine code", "Call stack manipulation", "CPU and registers"],
    images: [],
    websiteLink: "",
    githubLink: "https://github.com/DimitriDaSilva/42_libasm",
  },
];

export default projects;
