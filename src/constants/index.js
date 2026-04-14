import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";

export const HERO_CONTENT = `I'm a result driven Frontend Developer with a strong foundation in building modern, responsive and dynamic web applications. With a keen enthusiasm for problem-solving, I'm dedicated to creating efficient, scalable and visually engaging digital experiences. As I expand my expertise into Blockchain and Web3 development, my goal is to build the decentralized applications (dApps) of the future, combining cutting-edge technology with seamless user experiences.`;

export const SERVICES = [
  {
    title: "Responsive Design",
    description:
      "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
  },
  {
    title: "Web Accessibility",
    description:
      "Ensuring that websites and applications are accessible to users with disabilities by implementing features like proper HTML structure and ARIA roles.",
  },
  {
    title: "Version Control",
    description:
      "Using version control systems like Git to collaborate with other developers and manage code changes effectively.",
  },

  {
    title: "Integration with APIs",
    description:
      "Integrating frontend interfaces with backend services and APIs to fetch and display data in real time.",
  },

  {
    title: "Performance Optimization",
    description:
      "Optimizing website performance by improving load times, minimizing resource usage, and implementing best practices for frontend development.",
  },
  {
    title: "Continuous Learning",
    description:
      "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
  },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Freelance/Personal Projects",
    description: `Worked on various frontend projects utilizing React.js, JavaScript, TaiwindCSS, Styled Components and Material UI. Developed custom, scalable components with a focus on UI/UX and responsive design. Built a YouTube application clone—Streamnest—and various task management systems, gaining hands-on experience with state management, props, hooks and API integration.`,
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Material UI",
      "Styled Components",
    ],
  },
  {
    year: "2024",
    role: "Frontend Developer",
    company: "Web3Bridge",
    description: `Contributed to the development of a fully functional e-commerce platform as part of a capstone project. Implemented product listings, cart features and checkout functionality. Worked on complex applications, using a desktop-first design approach. This experience reinforced my knowledge of React components and Frontend development best practices.`,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Git & GitHub",
    ],
  },
];

export const PROJECTS = [
  {
    title: "iM-Store",
    image: project1,
    description:
      "A fully-featured e-commerce platform allowing users to browse products, add items to the cart and complete purchases. The project demonstrates proficiency in React.js, responsive design and complex state management.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
    ],
    github: "https://github.com/Oluwa-Laughter/iM-store",
    live: "https://imstore.vercel.app/",
  },
  {
    title: "Streamnest",
    image: project2,
    description:
      "A YouTube clone built using React.js, Material UI and Rapid API. This project demonstrates how to fetch videos and display them dynamically using external APIs, with features like video search and a sleek user interface.",
    technologies: ["React.js", "Material UI", "JavaScript", "Rapid API"],
    github: "https://github.com/Oluwa-Laughter/streamnest",
    live: "https://isaac-streamnest.vercel.app/",
  },

  {
    title: "Shortly",
    image: project6,
    description:
      "A URL shortening application where users can generate short URLs from long ones. The backend is powered by Supabase for storing and retrieving URL , while Vercel handles redirection. Features include URL validation, error handling, and dynamic updates to the user interface. The app ensures a smooth and intuitive user experience.",
    technologies: [
      "React.js",
      "Supabase",
      "Vercel",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/Oluwa-Laughter/shortly",
    live: "https://im-short.vercel.app/",
  },

  {
    title: "PayAPI",
    image: project4,
    description:
      "A multi-page payment API landing site built with React.js and React Router. Features smooth client-side navigation across multiple pages including pricing plans and developer-focused content, with a fully responsive layout optimized for all screen sizes.",
    technologies: [
      "React.js",
      "React Router",
      "JavaScript",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/Oluwa-Laughter/payapi",
    live: "https://isaac-payapi.vercel.app",
  },
  {
    title: "Rock, Paper, Scissors",
    image: project5,
    description:
      "A Rock, Paper, Scissors game built as a Frontend Mentor challenge using React.js, React Router and Tailwind CSS. Features include playing against the computer, a bonus Rock, Paper, Scissors, Lizard, Spock mode, persistent score tracking across page refreshes, and a responsive layout for all screen sizes.",
    technologies: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Netlify",
    ],
    github: "https://github.com/Oluwa-Laughter/rock-paper-scissors",
    live: "https://isaac-rps-game.netlify.app/",
  },

  {
    title: "React Interactive Quiz App",
    image: project3,
    description:
      "An interactive quiz application built with React.js, featuring dynamic questions, real-time score updates and user feedback. The app includes a timer and the questions is based on basic knowledge of React.js, state management and event handling.",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Oluwa-Laughter/react-interactive-quiz-app",
    live: "https://isaac-react-quiz.vercel.app/",
  },
];
