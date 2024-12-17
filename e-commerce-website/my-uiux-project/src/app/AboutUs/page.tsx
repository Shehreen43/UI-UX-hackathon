import React from "react";
import Link from "next/link";
import AboutStyle from "../components/AboutStyle";
import Image from "next/image";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import TeamMemberCard from "../components/TeemMember";
import BrandsLogo from "../components/Brands";

const AboutUs = () => {
  return (
    <section className="w-full bg-white overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-20">
      {/* Navigation */}
      <div></div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-h-screen">
        {/* Text Section */}
        <div className="w-full text-text2 pt-5 text-center md:text-left md:pt-10 lg:pt-16 xl:mt-20">
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
                <Link href="/"> Get Quote Now</Link>
              </h3>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full pt-10">
        <AboutStyle
        imgSrc="/about/aboutUs1.png"
        imgAlt="About Us Image 1"
      />
        </div>
      </div>

      {/* problem section */}
      <div className="w-full my-20 text-center md:text-left md:flex ">
        <div className="flex flex-col">
          <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#E74040] py-5">
            Problems trying
          </p>
          <h3 className="font-montserrat text-[24px] font-bold leading-[32px] max-w-[80%] tracking-[0.1px] text-text2 py-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        <p className="font-montserrat text-[14px] font-normal leading-[20px] max-w-[80%] text-text tracking-[0.2px] py-2 md:flex md:justify-center md:items-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      {/* Achievements section*/}
      <div className="w-full my-20 flex flex-col justify-center gap-x-10 gap-y-5 items-center md:flex-row">
        <div>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-text2">
            15K
          </h1>
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text text-center">
            Happy Customers
          </h5>
        </div>

        <div>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-text2">
            150K
          </h1>
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text text-center">
            Monthly Visitors
          </h5>
        </div>

        <div>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-text2">
            15
          </h1>
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text text-center">
            Countries Worldwide
          </h5>
        </div>

        <div>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-text2">
            100+
          </h1>
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text text-center">
            Top Partners
          </h5>
        </div>
      </div>

      {/* video */}

      <div className="w-full relative flex justify-center items-center my-20">
        <div className="relative w-full max-w-[989px]   max-h-[540px] ">
          <Image
            src={"/about/about2.png"}
            alt="Video"
            height={600}
            width={600}
            className=" w-full h-full object-cover lg:rounded-2xl"
          />

          <div className="absolute top-1/2 aspect-square w-[7%] left-[45%] rounded-full bg-[#23A6F0] flex justify-center items-center">
            <MdOutlineSlowMotionVideo className="size-[20px] text-white" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center my-20">
        <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-text2">
          Meet Our Team
        </h2>
        <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] md:w-[50%] text-text text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
          <TeamMemberCard imageSrc="/about/team-1.jpg" />
          <TeamMemberCard imageSrc="/about/team-2.jpg" />
          <TeamMemberCard imageSrc="/about/team-3.jpg" />
        </div>
      </div>

      {/*companies section  */}
      <div className="bg-light_Gray w-full flex  flex-col justify-center items-center py-20 ">
        <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-left pb-5">
          Big Companies Are Here
        </h2>
        <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] w-[50%] py-5 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <BrandsLogo />
      </div>

      {/* work with us */}
      <div className="w-full flex justify-center flex-col md:flex-row items-center h-[636px]">
        <div className=" w-full lg:w-[60%] h-full text-white  justify-center flex py-5 flex-col items-center md:items-start max-h-screen md:pl-[5%] lg:pl-[10%] xl:pl-[15%] bg-[#2a7cc7]">
          <h4 className="font-montserrat mb-4 text-base font-bold">
            WORK WITH US
          </h4>
          <h1 className="text-[40px] font-montserrat mb-4 font-bold w-[80%] leading-[50px] tracking-[0.2px]">
            Now Let’s grow Yours
          </h1>
          <p className="font-montserrat text-sm w-[80%] mb-3 ">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>

          <button className="w-[132px] h-[52px] border-[1px] border-white rounded-md mt-5 text-center">
            Button
          </button>
        </div>
        <Image
          src={"/about/about3.png"}
          alt="About us"
          height={640}
          width={590}
          className="hidden md:flex w-[40%] h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
