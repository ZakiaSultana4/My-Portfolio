// Skills Section Logo's
import htmlLogo from '../app/assets/tech_logo/html.png';
import cssLogo from '../app/assets/tech_logo/css.png';
import sassLogo from '../app/assets/tech_logo/sass.png';
import javascriptLogo from '../app/assets/tech_logo/javascript.png';
import reactjsLogo from '../app/assets/tech_logo/reactjs.png';
import reduxLogo from '../app/assets/tech_logo/redux.png';
import nextjsLogo from '../app/assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../app/assets/tech_logo/tailwindcss.png';
import gsapLogo from '../app/assets/tech_logo/gsap.png';
import materialuiLogo from '../app/assets/tech_logo/materialui.png';
import nodejsLogo from '../app/assets/tech_logo/nodejs.png';
import expressjsLogo from '../app/assets/tech_logo/express.png';
import mongodbLogo from '../app/assets/tech_logo/mongodb.png';
import firebaseLogo from '../app/assets/tech_logo/firebase.png';

import gitLogo from '../app/assets/tech_logo/git.png';
import githubLogo from '../app/assets/tech_logo/github.png';
import vscodeLogo from '../app/assets/tech_logo/vscode.png';
import postmanLogo from '../app/assets/tech_logo/postman.png';
import mcLogo from '../app/assets/tech_logo/mc.png';
import figmaLogo from '../app/assets/tech_logo/figma.png';
import netlifyLogo from '../app/assets/tech_logo/netlify.png';
import vercelLogo from '../app/assets/tech_logo/vercel.png';
import postgreLogo from '../app/assets/tech_logo/postgre.png';


// Experience Section Logo's
import webverseLogo from '../app/assets/company_logo/webverse_logo.png';
import agcLogo from '../app/assets/company_logo/agc_logo.png';
import newtonschoolLogo from '../app/assets/company_logo/newtonschool_logo.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const learningPhase = [
  {
    id: 0,
    date: " 2024 – The Beginning",
    desc: "In 2024, I officially started my journey in web development. I enrolled in the Level 1 Batch 9 course at Programming Hero, where I learned the basics of website development.During this time, I focused on building a strong foundation in HTML, CSS, and JavaScript. I created my first projects, including a portfolio website and a simple blog, which helped me understand the core concepts of web development.",
    skills: [
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Next JS",
      "Git",
      "Material UI",
      "Framer Motion",
      "GSAP",

    ],
  },
  {
    id: 1,
    date: "2025 – Going Full Stack",
    desc: "In 2025, I became more confident in my skills and took my learning to the next level. I began exploring the backend side of development, learning about Node.js, Express.js, and MongoDB. I built several full-stack applications, including a task management app and an e-commerce site. This year was crucial for me as I learned how to connect the frontend with the backend, manage databases, and deploy applications.",
    skills: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      'Mongoose',
      "RESTful APIs",
      "JWT",
      "PostgreSQL",
      "Docker",
      "GraphQL",
    ],
  },

];
