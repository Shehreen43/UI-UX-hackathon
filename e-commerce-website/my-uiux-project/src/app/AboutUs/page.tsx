import React from 'react'
import AboutStyle from '../components/AboutStyle';

const AboutUs = () => {
  return (
    <>
    <section className='w-full bg-white overflow-hidden max-w-screen-2xl   mx-auto'>
      {/* navigation */}
      <div></div>

      {/* main dev */}
      <div className='"max-w-screen-2xl mx-20 h-auto relative md:flex  w-full  md:text-left'>

       {/* Text Section */}
       <div className="  text-text2 md:max-w-[90%]">
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] py-2">
            ABOUT COMPANY
            </h5>
            <h1 className="font-montserrat text-[40px] py-2 lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] lg:tracking-[0.2em]">
            ABOUT US
            </h1>
            <h4 className="font-montserrat w-full text-text md:max-w-[376px] text-[20px] font-normal leading-[30px] tracking-[0.2px] py-2">
            We know how large objects will act, but things on a small scale
            </h4>

            <div>
              <button className="p-[15px_40px] gap-[10px] text-white rounded-[5px] bg-prim_blue mt-10">
                <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">
                Get Quote Now
                </h3>
              </button>
            </div>
          </div>
       {/* right side */}
       <div className='w-full'>
        <AboutStyle />
       </div>
      </div>
    </section>
    </>
  )
};

export default AboutUs;
