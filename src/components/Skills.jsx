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
  { title: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { title: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { title: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { title: "React.js", icon: <RiReactjsLine />, color: "#61DAFB" },
  { title: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { title: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
  { title: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { title: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { title: "GitHub", icon: <FaGithub />, color: "#e2e8f0" },
  { title: "NPM", icon: <FaNpm />, color: "#CB3837" },
  { title: "SASS", icon: <FaSass />, color: "#CC6699" },
  { title: "Supabase", icon: <RiSupabaseFill />, color: "#3ECF8E" },
  { title: "Firebase", icon: <RiFirebaseFill />, color: "#FFCA28" },
  { title: "Vercel", icon: <IoLogoVercel />, color: "#e2e8f0" },
  { title: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
  { title: "VS Code", icon: <VscVscode />, color: "#007ACC" },
  { title: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { title: "Framer", icon: <SiFramer />, color: "#8000ff" },
  { title: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { title: "Material UI", icon: <SiMui />, color: "#007FFF" },
];

const row1 = SKILLS.slice(0, 10);
const row2 = SKILLS.slice(10);

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center gap-2 px-5 py-4 mx-2 rounded-xl bg-white/[0.04] border border-white/10 min-w-[96px] flex-shrink-0">
    <div className="text-3xl" style={{ color: skill.color }}>
      {skill.icon}
    </div>
    <span className="text-xs font-medium text-neutral-400 whitespace-nowrap">
      {skill.title}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-white/10 py-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mt-3 text-4xl font-bold text-white">Skills</h2>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="flex mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee2">
          {[...row2, ...row2].map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
