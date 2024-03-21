// import React from "react";
// import Header from "../../components/Header";
// import Intro from "./Intro";
// import About from "./About";
// function Home() {
//   return (
//     <div>
//       <Header />
//       <div className="bg-primary sm:px-5 px-40">
//         <Intro />
//         <About />
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Educations from "./Educations";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-48">
        <Intro />
        <About />
        <Educations />
      </div>
    </div>
  );
}

export default Home;
