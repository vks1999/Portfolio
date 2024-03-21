// import React from "react";

// function Intro() {
//   return (
//     <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
//       <h1 className="text-white">Hi , I am</h1>
//       <h1 className="lg:text-7xl sm:text-3xl text-secondary font-semibold">
//         Vikash Kumar Singh
//       </h1>
//       <h1 className="lg:text-7xl sm:text-3xl text-white font-semibold">
//         I build things for the web.
//       </h1>
//       <p className="text-tertiary w-2/3">
//         An enthusiastic Frontend Web Developer. lorem
//         cvcgnsjdx,gvbszhfudkvsbzkufhvusk jzbdkuvba
//         sekzdgauiwkehzfdivlhbsrfkxucgh,vnaieslrfxhb
//       </p>
//       <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
//         Get Started
//       </button>
//     </div>
//   );
// }

// export default Intro;



import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-48">
      {/* <h1 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
        Hi, I am Vikash Kumar Singh
      </h1> */}
      <h1 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
        Hi, I am Vikash Kumar Singh
      </h1>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
        I build things for the web.
      </h1>
      <p className="text-tertiary w-full lg:w-2/3">
        An enthusiastic Frontend Web Developer. lorem
        cvcgnsjdx,gvbszhfudkvsbzkufhvusk jzbdkuvba
        sekzdgauiwkehzfdivlhbsrfkxucgh,vnaieslrfxhb
      </p>
      <button className="border-2 border-tertiary text-tertiary px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
