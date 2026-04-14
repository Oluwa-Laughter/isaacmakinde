import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-white/10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
          Career
        </span>
        <h2 className="mt-3 text-4xl font-bold text-white">Experience</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/40 to-transparent hidden lg:block"></div>

          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="relative mb-10 lg:pl-14">
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-4 top-5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#050510] -translate-x-1/2 items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#050510]"></div>
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-colors duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-cyan-400 font-medium mt-0.5">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-neutral-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex-shrink-0">
                    {experience.year}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
