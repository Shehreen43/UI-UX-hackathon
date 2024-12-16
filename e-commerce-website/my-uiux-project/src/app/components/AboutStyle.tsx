import Image from 'next/image';
import React from 'react';

const AboutStyle = () => {
  return (
    <div className="relative w-[90%] max-w-[632px] h-auto mx-auto">
      {/* Decorative Circles */}
      <div className="absolute w-[2.5%] aspect-square top-[85%] left-[5%] rounded-full bg-[#977DF4]"></div>
      <div className="absolute w-[2.5%] aspect-square top-[25%] right-[5%] rounded-full bg-[#977DF4]"></div>
      <div className="absolute w-[5%] aspect-square top-[45%] right-[2%] rounded-full bg-[#FFE9EA]"></div>
      <div className="absolute w-[12%] aspect-square top-[2%] left-[5%] rounded-full bg-[#FFE9EA]"></div>
      <div className="absolute w-[80%] aspect-square top-[10%] left-[10%] rounded-full bg-[#FFE9EA]"></div>

      {/* Hero Image */}
      <Image
        src="/about/aboutUs1.png"
        alt="A creative design showcasing the company"
        width={571}
        height={668}
        className="w-full object-cover relative"
      />
    </div>
  );
};

export default AboutStyle;






// import Image from 'next/image';
// import React from 'react'

// const AboutStyle = () => {
//   return (
//     <>
//     {/* <div className='relative w-full max-w-[632px] max-h-[612px] min-w-[375.73px] min-h-[439px]'> */}
//     <div
//   className="relative 
//              w-[90%] max-w-[387px] 
//              h-[80%] max-h-[440px] 
//              sm:w-[85%] sm:h-[75%] 
//              md:w-[70%] md:h-[60%] 
//              lg:w-[50%] lg:h-[50%] ">
    
//     <div className="w-[14.78px] h-[14.78px] absolute top-[408.78px] left-[23.92px] rounded-full bg-[#977DF4]"></div>
//     <div className="w-[14.78px] h-[14.78px] absolute top-[121.72px] left-[576.94px] rounded-full bg-[#977DF4]"></div>
//     <div className="w-[30.25px] h-[30.25px] absolute top-[247.66px] left-[554.42px] rounded-full bg-[#FFE9EA]"></div>

//     <div className="w-[77.39px] h-[77.39px] absolute top-[11.96px] rounded-full bg-[#FFE9EA]"></div>
//     <div className="w-[484.06px] h-[484.06px] absolute top-[10%] left-[10%]  rounded-full bg-[#FFE9EA]"></div>

//     <Image  src={'/about/aboutUs1.png'} alt='' width={571} height={668} className='w-full object-cover relative'/>
//     </div>
//     </>
//   )
// };

// export default AboutStyle;


//     //  {/* Hero Image
//     //  <div className="relative flex justify-center items-center w-full md:pt-40 lg:pt-0">
//     //       <div className="absolute top-[30%] left-[5%] transform animate-rotate md:max-w-40">
//     //         <Image src="/Vector.svg" alt="Rotating Icon" width={50} height={50} />
//     //       </div>
//     //       <div className="absolute top-[6%] right-[5%] animate-rotate ">
//     //         <Image src="/Vector.svg" alt="Rotating Icon" width={90} height={90} />
//     //       </div>
//     //       <Image src="/Fasion2.png" alt="Fashion" width={500} height={400} className="rounded-lg w-full h-auto" />
//     //     </div>
 