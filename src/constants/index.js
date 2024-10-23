import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

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
    description: `Worked on various frontend projects utilizing ReactJS, JavaScript, TaiwindCSS, Styled Components and Material UI. Developed custom, scalable components with a focus on UI/UX and responsive design. Built a YouTube application clone—Streamnest—and various task management systems, gaining hands-on experience with state management, props, hooks and API integration.`,
    technologies: [
      "ReactJS",
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
      "ReactJS",
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
      "A fully-featured e-commerce platform allowing users to browse products, add items to the cart and complete purchases. The project demonstrates proficiency in ReactJS, responsive design and complex state management.",
    technologies: ["ReactJS", "JavaScript", "TailwindCss", "Redux", "Node.Js"],
    github: "",
    live: "",
  },
  {
    title: "Streamnest",
    image: project2,
    description:
      "A YouTube clone built using ReactJS, Material UI and Rapid API. This project demonstrates how to fetch videos and display them dynamically using external APIs, with features like video search and a sleek user interface.",
    technologies: ["ReactJS", "Material UI", "JavaScript", "Rapid API"],
    github: "",
    live: "",
  },
  {
    title: "React Interactive Quiz App",
    image: project3,
    description:
      "An interactive quiz application built with ReactJS, featuring dynamic questions, real-time score updates and user feedback. The app includes a timer and the questions is based on basic knowledge of ReactJS, state management and event handling.",
    technologies: ["ReactJS", "JavaScript", "CSS"],
    github: "",
    live: "",
  },
  {
    title: "Interactive Card Details",
    image: project4,
    description:
      "A form validation app that allows users to input ATM card details, including cardholder name, card number, expiry date, and CVC. The form updates in real time, with error handling for empty fields and incorrect input formats. The design is responsive, offering optimal layouts for various screen sizes.",
    technologies: ["ReactJS", "Form Validation", "JavaScript", "CSS"],
    github: "https://github.com/Oluwa-Laughter/interactive-card-details",
    live: "https://isaac-interactive-card.vercel.app/",
  },
  {
    title: "Product Card Details",
    image: project5,
    description:
      "A product card details application built with React, utilizing useState and useEffect hooks for state management and styled-components for styling. Features include adding/removing items from the cart, updating quantity, order confirmation, and resetting the cart. The design is responsive, with hover and focus states for interactivity.",
    technologies: ["ReactJS", "Styled-components", "JavaScript", "CSS"],
    github: "",
    live: "",
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+234 805 374 4603",
  email: "ismakinde@gmail.com",
};
