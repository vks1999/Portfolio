// import React from 'react';
// import SectionTitle from '../../components/SectionTitle';
// import { educations } from '../../resources/educations';

// function Educations() {
//     return (
//         <div>
//             <SectionTitle title="Educations" />


//             <div className='flex'>
//                 <div>
//                     {educations.map((educations) => (
//                         <div>
//                             <h1></h1>
//                             <div />
//                 ))}
//                         </div>

//                 </div>
//             </div>
//             );
// };

//             export default Educations




import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { educations } from '../../resources/educations';

function Educations() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Educations" />

            <div className='flex'>
                <div className='flex flex-col gap-5'>
                    {educations.map((education, index) => (
                        <div className='p-5'>
                            <h1 className={`text-xl `}>{education.period}</h1>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    );
}

export default Educations;
