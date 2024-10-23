import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl underline">Experience</h2>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 w-full max-w-4xl flex flex-wrap lg:justify-between"
          >
            <div className="w-full lg:w-1/4 mb-2 lg:mb-0">
              <p className="text-neutral-400 text-sm">{experience.year}</p>
            </div>

            <div className="w-full lg:w-3/4">
              <h5 className="mb-2 tracking-tight  text-2xl font-bold">
                {experience.role} -{" "}
                <span className="text-purple-300">{experience.company}</span>
              </h5>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
