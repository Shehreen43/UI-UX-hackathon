import React from "react";
import Image from "next/image";

export const ClassicProduct = () => {
  return (
    <section className="overflow-hidden bg-prim_green max-w-screen-2xl mx-auto min-h-[711px] mt-20">
      <div className="relative flex flex-col lg:flex-row justify-center items-center  w-full text-white text-center md:text-left">
        {/* Text Section */}
        <div className="w-[90%]  md:max-w-[50%]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] py-6">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat text-[40px] py-6 lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] lg:tracking-[0.2em]">
            Vita Classic Product
          </h1>
          <p className="font-montserrat w-full md:max-w-[509px] text-[14px] font-normal leading-[20px] tracking-[0.2px] py-2">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>

          <div className="flex items-center justify-center lg:items-start lg:justify-start mt-4 gap-20">
            <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] pt-3 ">
              $16.48
            </h3>
            <button className="p-[15px_40px] gap-[10px] rounded-[5px] bg-secondary2">
              <h3 className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.1px] text-center">
                ADD TO CART
              </h3>
            </button>

          </div>
        </div>
        <div className="min-w-[443px] min-h-[595px] lg:mt-[10%]">
          {/* Images */}
          <Image
            src="/shop-hero2.png"
            alt="Fashion"
            width={443}
            height={685}
            className=" w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
