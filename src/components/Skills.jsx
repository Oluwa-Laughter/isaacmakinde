import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const SKILLS = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572B6",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },
  {
    title: "ReactJS",
    icon: <RiReactjsLine />,
    color: "#61DAFB",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38B2AC",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    color: "#fff",
  },
  {
    title: "NPM",
    icon: <FaNpm />,
    color: "#CB3837",
  },
  {
    title: "VS Code",
    icon: <VscVscode />,
    color: "#007ACC",
  },
  {
    title: "Figma",
    icon: <FaFigma />,
    color: "#F24E1E",
  },
  {
    title: "SASS",
    icon: <FaSass />,
    color: "#CC6699",
  },
  {
    title: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952B3",
  },
  {
    title: "Material UI",
    icon: <SiMui />,
    color: "#007FFF",
  },
];

const Skills = () => {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl underline">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center justify-center gap-4 p-4 border-4 border-neutral-800 rounded-2xl"
          >
            <div className="text-4xl font-bold" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="text-neutral-400 tracking-tight text-sm font-semibold">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
