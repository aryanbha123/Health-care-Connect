import React from "react";

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Image Section */}
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl  object-cover"
                src="/assets/B076A3E2-DDDF-4D8C-852E-3D4E9E093FD3_1_201_a.jpeg"
                alt="About Us"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="assets/B076A3E2-DDDF-4D8C-852E-3D4E9E093FD3_1_201_a.jpeg"
              alt="About Us"
            />
          </div>

          {/* Content Section */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every project we've undertaken has been a collaborative effort, where every person
                  involved has left their mark. Together, we've not only constructed buildings but also
                  built enduring connections that define our success story.
                </p>
              </div>

              {/* Stats Section */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">33+</h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <button className="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-300 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
