import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
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
    title: "React.js",
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
    title: "SASS",
    icon: <FaSass />,
    color: "#CC6699",
  },

  {
    title: "Supabase",
    icon: <RiSupabaseFill />,
    color: "#3ECF8E",
  },

  {
    title: "Firebase",
    icon: <RiFirebaseFill />,
    color: "#FFCA28",
  },

  {
    title: "Vercel",
    icon: <IoLogoVercel />,
    color: "#fff",
  },

  {
    title: "Netlify",
    icon: <SiNetlify />,
    color: "#00C7B7",
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
    title: "Framer",
    icon: <SiFramer />,
    color: "#8000ff",
  },

  {
    title: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        variants={titleVariants}
        className="my-20 text-center text-4xl font-semibold uppercase"
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className=" max-w-2xl mx-auto flex flex-wrap justify-center gap-4 items-center"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.title}
            variants={{
              ...iconVariants(1),
              ...skillVariants,
            }}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-col items-center justify-center p-4 gap-2 border-4 border-neutral-800 rounded-2xl backdrop-blur-sm"
          >
            <motion.div
              className="text-4xl font-bold"
              style={{ color: skill.color }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
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
