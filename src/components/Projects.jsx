import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl underline">Projects</h2>
      <article>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-8 ">
            <div className="w-full lg:w-1/5">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded-xl"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/5">
              <h5 className="mb-2 text-2xl font-bold">{project.title}</h5>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2
                    mt-2
                    rounded
                    text-purple-800
                    bg-neutral-900
                    px-2
                    py-1
                    text-center
                    text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 border-4 border-neutral-700 rounded-md px-2 py-1"
                >
                  Github <MdArrowOutward />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 border-4 border-neutral-700 rounded-md px-2 py-1"
                >
                  Live <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Projects;
