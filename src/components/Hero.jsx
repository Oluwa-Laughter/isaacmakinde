import { HERO_CONTENT } from "../constants";
import { isaacHero } from "../assets";

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col">
            <h1 className="pb-10 text-5xl font-thin tracking-tight lg:text-7xl">
              Isaac Makinde
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Creative Frontend Developer
            </span>

            <p className="my-2 max-w-xl py-6 text-lg font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
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
