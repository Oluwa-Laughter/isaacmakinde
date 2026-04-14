import { SERVICES } from "../constants";
import { motion } from "framer-motion";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { MdAccessibility, MdApi, MdSpeed, MdAutorenew } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";

const SERVICE_ICONS = [
  <BsLayoutTextWindowReverse key="responsive" />,
  <MdAccessibility key="accessibility" />,
  <FaCodeBranch key="version" />,
  <MdApi key="api" />,
  <MdSpeed key="performance" />,
  <MdAutorenew key="learning" />,
];

const Services = () => {
  return (
    <section id="services" className="border-b border-white/10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="mt-3 text-4xl font-bold text-white">Services</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -5 }}
            className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 text-2xl border border-cyan-500/20">
              {SERVICE_ICONS[index]}
            </div>
            <h3 className="text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
