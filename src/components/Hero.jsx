import { HERO_CONTENT } from "../constants";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const CodeLine = ({ children }) => (
  <div className="leading-7">{children}</div>
);

const Kw = ({ children }) => (
  <span className="text-violet-400">{children}</span>
);
const Fn = ({ children }) => (
  <span className="text-cyan-400">{children}</span>
);
const Str = ({ children }) => (
  <span className="text-amber-300">"{children}"</span>
);
const Prop = ({ children }) => (
  <span className="text-blue-300">{children}</span>
);
const Bool = ({ children }) => (
  <span className="text-green-400">{children}</span>
);
const Dim = ({ children }) => (
  <span className="text-neutral-500">{children}</span>
);
const Plain = ({ children }) => (
  <span className="text-neutral-200">{children}</span>
);

const CodePanel = () => (
  <div className="relative w-full max-w-[440px]">
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl blur-3xl scale-110 pointer-events-none" />

    {/* Floating badge — top right */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-[#0d0d1a] border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg"
    >
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-neutral-200">Available for work</span>
    </motion.div>

    {/* Floating badge — bottom left */}
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 bg-[#0d0d1a] border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg"
    >
      <span className="text-violet-400">🚀</span>
      <span className="text-neutral-200">6+ Projects shipped</span>
    </motion.div>

    {/* Editor window */}
    <div className="relative rounded-2xl border border-white/10 bg-[#0d0d1a] overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-neutral-500 font-mono tracking-wide">
          isaac.jsx
        </span>
      </div>

      {/* Line numbers + code */}
      <div className="flex font-mono text-sm">
        {/* Line numbers */}
        <div className="select-none py-5 px-3 text-right text-neutral-700 text-xs leading-7 border-r border-white/[0.06] min-w-[2.5rem]">
          {Array.from({ length: 13 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code content */}
        <div className="py-5 px-5 flex-1 overflow-x-auto">
          <CodeLine>
            <Dim>{"// Frontend Developer"}</Dim>
          </CodeLine>
          <CodeLine>
            <Kw>const </Kw>
            <Fn>Developer</Fn>
            <Plain> = () </Plain>
            <Kw>={">"}</Kw>
            <Plain> {"{"}</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"  "}</Plain>
            <Kw>return </Kw>
            <Plain>{"{"}</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"    "}</Plain>
            <Prop>name</Prop>
            <Plain>: </Plain>
            <Str>Isaac Makinde</Str>
            <Plain>,</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"    "}</Plain>
            <Prop>role</Prop>
            <Plain>: </Plain>
            <Str>Frontend Developer</Str>
            <Plain>,</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"    "}</Plain>
            <Prop>focus</Prop>
            <Plain>: [</Plain>
            <Str>React</Str>
            <Plain>, </Plain>
            <Str>Web3</Str>
            <Plain>],</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"    "}</Plain>
            <Prop>loves</Prop>
            <Plain>: </Plain>
            <Str>Clean UIs</Str>
            <Plain>,</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"    "}</Plain>
            <Prop>available</Prop>
            <Plain>: </Plain>
            <Bool>true</Bool>
            <Plain>,</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"  "}{"}"}</Plain>
          </CodeLine>
          <CodeLine>
            <Plain>{"}"}</Plain>
            <Dim>;</Dim>
          </CodeLine>
          <CodeLine>&nbsp;</CodeLine>
          <CodeLine>
            <Kw>export default </Kw>
            <Fn>Developer</Fn>
            <Dim>;</Dim>
          </CodeLine>
          <CodeLine>
            <span className="inline-block w-2 h-[1.1em] bg-cyan-400 opacity-80 animate-pulse align-middle" />
          </CodeLine>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center border-b border-white/10 pb-16 pt-8">
      <div className="flex items-center flex-wrap w-full gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-5">
            <motion.h1
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold tracking-tight lg:text-7xl leading-tight"
            >
              Isaac{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Makinde
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="text-xl font-medium text-neutral-400 lg:text-2xl"
            >
              Creative Frontend Developer
            </motion.p>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-neutral-400 text-base leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="https://docs.google.com/document/d/10PhdoUC8RYMamfLZ0p9vRagneBsDYzSv5t7KjBxbhz4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200 text-sm shadow-lg shadow-cyan-500/20"
              >
                View Resume <MdOutlineArrowOutward />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 text-sm"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>
        </div>

        {/* Code Panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex justify-center lg:justify-end"
        >
          <CodePanel />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
