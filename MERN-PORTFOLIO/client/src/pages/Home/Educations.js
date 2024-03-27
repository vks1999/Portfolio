import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { educations } from "../../resources/educations";

function Educations() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    return (
        <div>
            <SectionTitle title="Educations" />

            <div className="flex flex-col md:flex-row py-10 gap-5 md:gap-20 -red">
                <div className="md:w-1/3">
                    <div className="flex sm:flex-row xl:flex-col gap-10 border-l-2 border-[#135e4c82]">
                        {educations.map((education, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setSelectedItemIndex(index);
                                }}
                                className={`cursor-pointer ${selectedItemIndex === index ? "bg-[#1a7f5a31] border-tertiary border-l-4 -ml-[3px]" : ""}`}
                            >
                                <h1 className={`text-xl px-5 py-3 ${selectedItemIndex === index ? "text-tertiary" : "text-white"}`}>
                                    {education.period}
                                </h1>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="md:w-2/3">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-xl">{educations[selectedItemIndex].title}</h1>
                        <h1 className="text-tertiary text-xl">{educations[selectedItemIndex].company}</h1>
                        <h1 className="text-tertiary text-xl">{educations[selectedItemIndex].period}</h1>
                        <h1 className="text-tertiary text-xl">{educations[selectedItemIndex].description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Educations;



