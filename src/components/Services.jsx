import { SERVICES } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="my-20 text-center text-4xl font-semibold uppercase">
        Services
      </h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            className="flex flex-col items-center justify-center gap-8 p-4 border-4 border-neutral-800 rounded-2xl"
            whileHover={{ scale: 1.04 }}
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl text-center font-bold tracking-tight ">
              {service.title}
            </h3>
            <p className="text-neutral-400 font-light lg:text-lg text-md text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
