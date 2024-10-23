import { HERO_CONTENT } from "../constants";
import { isaacHero } from "../assets";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const container = (delay) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: delay, duration: 0.5 },
    },
  };
};

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col mb-6">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              className="pb-10 text-5xl font-thin tracking-tight lg:text-6xl"
            >
              Isaac Makinde
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Creative Frontend Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl text-neutral-300 py-6 text-md font-light"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(1.5)}
              whileHover={{ scale: 1.04 }}
              initial="hidden"
              whileInView="visible"
              href=""
              target="_blank"
              className="flex items-center gap-2 border-4 max-w-fit text-center border-neutral-700 rounded-md p-2"
            >
              RESUME <MdOutlineArrowOutward />
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              src={isaacHero}
              alt="Isaac Makinde"
              className="max-w-full rounded-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
