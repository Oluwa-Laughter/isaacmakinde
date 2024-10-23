import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold uppercase"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 w-full max-w-4xl flex flex-wrap lg:justify-between"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-1/4 mb-2 lg:mb-0"
            >
              <p className="text-neutral-400 text-sm">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-3/4"
            >
              <h5 className="mb-2 tracking-tight  text-2xl font-bold">
                {experience.role} -{" "}
                <span className="text-purple-300">{experience.company}</span>
              </h5>
              <p className="mb-4 text-neutral-400 lg:text-lg text-md">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies.map((skill, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded text-purple-800 bg-neutral-900 px-2 py-1 text-center text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
