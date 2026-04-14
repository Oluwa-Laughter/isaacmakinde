import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-white/10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
          Portfolio
        </span>
        <h2 className="mt-3 text-4xl font-bold text-white">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>

              <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-cyan-400 transition-colors border border-white/10 hover:border-cyan-400/30 rounded-lg px-3 py-1.5"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-3 py-1.5 hover:bg-cyan-500/20 transition-all"
                >
                  Live Demo <MdArrowOutward />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
