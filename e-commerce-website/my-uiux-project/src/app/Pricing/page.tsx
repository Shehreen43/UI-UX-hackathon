import React from "react";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { RiCheckboxCircleFill } from "react-icons/ri";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <>
      <div className="overflow-hidden  max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-light_Gray">
        {/*  */}
        <div className="w-full md:w-[90%] bg-white py-[50px]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text">
            PRICING
          </h5>
          <h1 className="font-montserrat text-[40px] lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] text-center text-text2">
            Simple Pricing
          </h1>
          {/* Links */}
          <div className="py-6 flex-col flex items-center justify-center">
            <ul className=" flex gap-1">
              <li>
                <Link href="/" className="font-bold sm:items-start">
                  Home
                </Link>
              </li>
              <li>
                <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted_text_col font-bold sm:items-end"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* simple pricing */}
        <div className=" w-[50%] lg:w-[30%] flex flex-col justify-items-center py-10">
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-text2">
            Pricing
          </h2>
          <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center py-2 text-text">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        {/* choice box */}
        <div className="flex gap-4">
          <div className="flex gap-2">
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-text2">
              Monthly
            </h5>
            <div className="bg-white w-[45px] h-[25px] rounded-full border-[1px] border-prim_blue py-1 pl-1">
              <div className="w-[19px] h-[19px] bg-light_Gray rounded-full"></div>
            </div>
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-text2">
              Yearly
            </h5>
          </div>
          <button className="w-[109px] h-[44px] bg-[#B2E3FF] -mt-3 rounded-full">
            <Link href={"/"}>
              <h6 className="text-[14px] font-bold leading-[24px] text-prim_blue">
                Save 25%
              </h6>
            </Link>
          </button>
        </div>

        {/* pricing card */}
        <div className="flex gap-5">
      <PricingCard
        plan="free"
        title="FREE"
        price="0"
        features={[
          'Unlimited product updates',
          'Unlimited product updates',
          'Unlimited product updates',
          '1GB Cloud storage',
          'Email and community support',
        ]}
        isFree={true}
        bgColor="bg-white"
        textColor="text-text2"
      />
      <PricingCard
        plan="pro"
        title="STANDARD"
        price="9.99"
        features={[
          'Unlimited product updates',
          'Advanced analytics',
          'Priority support',
          '10GB Cloud storage',
          'Custom integrations',
        ]}
        bgColor="bg-text2"
        textColor="text-white"
      />
   
        </div>
      </div>
    </>
  );
};

export default Pricing;
