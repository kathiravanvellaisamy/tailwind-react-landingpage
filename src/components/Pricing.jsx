import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section className="relative mt-20">
      <h2 className="text-3xl  sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center my-8">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((price) => (
          <div key={price.title} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <h6 className="text-4xl mb-8">
                {price.title}
                {price.title === "Pro" && (
                  <span className="text-xl mb-4 ml-2 text-blue-600">
                    (Most Popular)
                  </span>
                )}
              </h6>
              <p className="mb-8">
                <span className="text-5xl mb-6 ml-2">{price.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {price.features.map((feature) => (
                  <li className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center justify-center text-center h-12 p-5 mt-12 w-full tracking-tight   border-2 border-blue-500 rounded-md   bg-blue-500  hover:bg-transparent transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
