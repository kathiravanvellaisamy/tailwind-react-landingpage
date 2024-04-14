import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl lg:text-7xl font-semibold text-center tracking-wide leading-10">
        Rapidly build modern websites without ever
        <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-900 text-transparent bg-clip-text">
          leaving your HTML.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-5xl">
        A utility-first CSS framework packed with classes like{" "}
        <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-900 text-transparent bg-clip-text">
          flex, pt-4, text-center
        </span>{" "}
        and{" "}
        <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-900 text-transparent bg-clip-text">
          rotate-90
        </span>{" "}
        that can be composed to build any design, directly in your markup.
      </p>
      <div className="flex flex-row items-center justify-center gap-5 my-10">
        <button className="py-2 px-3 rounded-md border">Get started</button>
        <button className="bg-gradient-to-r from-purple-500 to-violet-900 px-3 py-2 rounded-md">
          View Docs
        </button>
      </div>
      <div className="flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-[40%] my-4 mx-2  shadow shadow-violet-700 "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not supported video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-[40%] my-4 mx-2  shadow shadow-violet-700 "
        >
          <source src={video2} type="video/mp4" />
          Your browser does not supported video tag
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
