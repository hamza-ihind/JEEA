import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="page-config">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className=" text-center mx-auto">
          <h1 className="hero-title dark:hero-title-dark">
            FOR EVERY PROBLEM <br />
            WE ENGINEER A SOLUTION
          </h1>
          <p className="mt-4 text-center text-xl leading-7 text-blue-700 dark:text-blue-300">
            Teaming up with Junior Enterprise ENSA Agadir is your way to get
            hold of a wide range of skills provided by future engineers in
            different fields.
          </p>
        </div>

        <div className="mt-10 relative max-w-6xl mx-auto">
          <div
            className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')",
            }}
          ></div>

          <div className="absolute inset-0 size-full">
            <div className="flex flex-col justify-center items-center size-full">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Play the overview
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg bg-background">
            <div className="bg-background size-48 rounded-lg "></div>
          </div>

          <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-background size-48 rounded-full bg-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
