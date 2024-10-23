import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl underline">Projects</h2>
      <article>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center justify-center gap-8 p-4 border-4 border-neutral-800 rounded-2xl"
          >
            <h3 className="text-2xl lg:text-3xl text-center font-semibold ">
              {project.title}
            </h3>
            <p className="text-sm  font-light lg:text-lg text-center">
              {project.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Projects;
