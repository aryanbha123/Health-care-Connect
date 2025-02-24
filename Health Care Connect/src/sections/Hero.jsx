import React from "react";

const HeroSection = () => {
  return (
    <div className="relative -z-10 overflow-hidden">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-v-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            {/* <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-[#01adf0] to-[#01adf0] text-transparent">
              Preline: A vision for 2023
            </p> */}

            {/* Title */}
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                The Intuitive Web Solutions
              </h1>
            </div>

            {/* Description */}
            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Preline UI is an open-source set of prebuilt UI components,
                ready-to-use examples and Figma design system based on the
                utility-first Tailwind CSS framework.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#177709] text-white hover:ring-[1px] transition-all duration-200 hover:ring-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get started
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
         
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
