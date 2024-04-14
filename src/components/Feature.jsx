import { features } from "../constants";

const Feature = () => {
  return (
    <section className="relative mt-20 border-b border-neutral-100 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-md font-medium px-2 py-1">
          “Best practices” don’t actually work.
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Build{" "}
          <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-900 text-transparent bg-clip-text">
            your App
          </span>
          .
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature) => (
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center rounded-full mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-600">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
