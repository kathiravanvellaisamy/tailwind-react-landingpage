import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="realtive mt-20 tracking-wide">
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What developers are saying?
      </h2>

      <div className="flex justify-center flex-wrap">
        {testimonials.map((testimonial) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md font-thin border border-neutral-800">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt="{testimonial.user}"
                  className="h-12 w-12 rounded-full mr-6 border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal text-neutral-600  ">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
