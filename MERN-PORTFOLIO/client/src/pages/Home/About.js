// import React from "react";
// import SectionTitle from "../../components/SectionTitle";

// function About() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "Bootstrap",
//     "JavaScript",
//     "ReactJS",
//   ]
//   return (
//     <div>
//       <SectionTitle title="About" />

//       <div className="flex w-full items-center sm:flex-col">
//         <div className="h-[70vh] w-1/2">
//           <dotlottie-player src="https://lottie.host/067c9ddc-cfc5-4115-ae7b-9b14e75623da/jCw2ivMVZv.json" background="transparent"
//             speed="1"
//             autoplay></dotlottie-player>
//         </div>
//         <div className="flex flex-col gap-5 w-1/2">
//           <p className="text-white">
//             Luo8gqekagdfuiwkshdfciulkwajgsbrldfiuckwhalesuidfkjbv erluasidgfvcwrjgsdf8cui jkwrs dziuxjbwg   eqdfiashcuwiegbadfuci gb wuieskd w9eidfhc 8woiuejsadhfxoci  ewidoshfco8 wileshdanzxoi edihfcwoeilsdhafc8ouwedhx ewdafuhcwoeiladuf9coi welkdanx opweduajf9coiwlekhadnc9oi lkwe.adn
//           </p>
//           <p className="text-white">
//             Luo8gqekagdfuiwkshdfciulkwajgsbrldfiuckwhalesuidfkjbv erluasidgfvcwrjgsdf8cui jkwrs dziuxjbwg   eqdfiashcuwiegbadfuci gb wuieskd w9eidfhc 8woiuejsadhfxoci  ewidoshfco8 wileshdanzxoi edihfcwoeilsdhafc8ouwedhx ewdafuhcwoeiladuf9coi welkdanx opweduajf9coiwlekhadnc9oi lkwe.adn
//           </p>
//         </div>
//       </div>
//       <div className="py-5">
//         <h1 className="text-tertiary text-xl">
//           Here are a few technologies I've been working with recently:
//         </h1>
//         <div className="flex flex-wrap gap-10 mt-5">
//           {skills.map((skill, index) => (
//             <div className="border border-tertiary py-3 px-10">
//               <h1 className="text-tertiary">{skill}</h1>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "ReactJS",
    "Node JS",
    "Tailwind CSS",
    "Material UI",
    "Mongo DB",
    "DSA",
    "Internet Of Things (IOT)",
    "MS-Office",
    "Windows",
  ];


  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <dotlottie-player src="https://lottie.host/067c9ddc-cfc5-4115-ae7b-9b14e75623da/jCw2ivMVZv.json" background="transparent" speed="1" autoplay></dotlottie-player>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col gap-5">
            <p className="text-white">
              Luo8gqekagdfuiwkshdfciulkwajgsbrldfiuckwhaldjfvnsjngvnsesuidfkjbv dbjnsjnderluasidgfvcwrjgsdf8cui jkwrs dziuxjbwg   eqdfiashcuwiegbadfuci gb wuieskd w9eidfhc 8woiuejsadhfxoci  ewidoshfco8 wileshdanzxoi edihfcwoeilsdhafc8ouwedhx ewdafuhcwoeiladuf9coi welkdanx opweduajf9coiwlekhadnc9oi lkwe.adn
            </p>
            <p className="text-white">
              Luo8gqekagdfuiwkshdfciulkwajgsbrldfiuckwhalesuidfkjbv erluasidgfvcwrjgsdf8cui jkwrs dziuxjbwg   eqdfiashcuwiegbadfuci gb wuieskd w9eidfhc 8woiuejsadhfxoci  ewidoshfco8 wileshdanzxoi edihfcwoeilsdhafc8ouwedhx ewdafuhcwoeiladuf9coi welkdanx opweduajf9coiwlekhadnc9oi lkwe.adn
            </p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-6 md:px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
