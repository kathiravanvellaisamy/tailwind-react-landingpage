import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
        Accelerate your {""}{" "}
        <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-900 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          <img src={codeImg} alt="code image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item) => (
            <div className="flex mb-12">
              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-neutral-500 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
