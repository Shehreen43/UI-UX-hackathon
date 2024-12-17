import React from "react";
import Image from "next/image";

const Universe = () => {
  return (
    <section className="overflow-hidden bg-white max-w-screen-2xl mx-auto mt-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center">
        {/* Image Section */}
        <div className="hidden lg:flex  w-full lg:w-1/2">
          <Image
            src="/Univers.png"
            alt="Universe"
            width={725}
            height={774}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 max-w-[573px] lg:pl-10 mt-6 lg:mt-[10%] xl:mt-[20%]">
          <h5 className="font-montserrat text-[#BDBDBD] text-[16px] font-bold leading-[24px] tracking-[0.1px] py-6">
            SUMMER 2020
          </h5>
          <h2 className="font-montserrat text-text2 text-[40px] lg:text-[58px] font-bold leading-[50px] tracking-[0.2px] py-6">
            Part of the Neural Universe
          </h2>
          <p className="font-montserrat w-full text-text text-[14px] font-normal leading-[20px] tracking-[0.2px] py-2">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-10 justify-center lg:items-start lg:justify-start mt-4 md:gap-20">
                        <button className="p-[15px_40px] gap-[10px] rounded-[5px] bg-prim_blue lg:bg-[#2DC071] text-white ">
               <h3 className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.1px] text-center">
               BUY NOW
               </h3>
             </button>
             <button className="p-[15px_40px] gap-[10px] rounded-[5px] bg-transparent border-prim_blue text-prim_blue border-2 lg:border-[#2DC071] lg:text-[#2DC071]">
               <h3 className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.1px] text-center">READ MORE</h3>
             </button>
          </div>
        </div>

         {/* Image Section */}
         <div className="lg:hidden  w-full lg:w-1/2">
          <Image
            src="/Univers.png"
            alt="Universe"
            width={725}
            height={774}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Universe;
