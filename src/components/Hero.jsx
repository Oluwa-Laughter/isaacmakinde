import { HERO_CONTENT } from "../constants";
import { isaacHero } from "../assets";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col mb-6">
            <h1 className="pb-10 text-5xl font-thin tracking-tight lg:text-7xl">
              Isaac Makinde
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Creative Frontend Developer
            </span>

            <p className="my-2 max-w-xl text-neutral-300 py-6 text-md font-light">
              {HERO_CONTENT}
            </p>

            <a
              href=""
              target="_blank"
              className="flex items-center gap-2 border-4 max-w-fit text-center border-neutral-700 rounded-md p-2"
            >
              RESUME <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
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
