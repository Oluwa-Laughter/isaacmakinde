import { SERVICES } from "../constants";

const Services = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl underline">Services</h2>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center justify-center gap-8 p-4 border-4 border-neutral-800 rounded-2xl"
          >
            <h3 className="text-2xl lg:text-3xl text-center font-semibold ">
              {service.title}
            </h3>
            <p className="text-sm  font-light lg:text-lg text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
