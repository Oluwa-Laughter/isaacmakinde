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
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <motion.section
      className="border-b border-neutral-900 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        className="my-20 text-center text-4xl font-semibold uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 items-center"
        variants={containerVariants}
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.title}
            className="flex flex-col items-center justify-center gap-4 p-4 border-4 border-neutral-800 rounded-2xl"
            variants={{
              ...iconVariants(1),
              ...skillVariants,
            }}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="text-4xl font-bold" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="text-neutral-400 tracking-tight text-sm font-semibold">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
