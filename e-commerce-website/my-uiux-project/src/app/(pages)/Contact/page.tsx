import React from "react";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import AboutStyle from "../../components/AboutStyle";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";
import RequestCard from "../../components/RequestCard";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { PiArrowBendRightDown } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";

const ContactUs = () => {
  return (
    <>
      <section className="w-full bg-white overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-20">
        {/* Navigation */}
        <div></div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-h-screen">
          {/* Text Section */}
          <div className="w-full text-text2 pt-5 text-center md:text-left md:pt-10 lg:pt-16 xl:mt-20">
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] py-2">
              CONTACT US
            </h5>
            <h1 className="font-montserrat text-[40px] py-2 lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] lg:tracking-[0.2em]">
              Get in touch today!
            </h1>
            <h4 className="font-montserrat w-full text-text md:max-w-[376px] text-[20px] font-normal leading-[30px] tracking-[0.2px] py-2">
              We know how large objects will act, but things on a small scale
            </h4>

            <div className="flex flex-col gap-y-5 py-5 mt-5 ">
              <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-text2">
                Phone : +451 215 215{" "}
              </h3>
              <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-text2">
                Fax : +451 215 215
              </h3>
            </div>

            <div className="flex items-center gap-4 my-3 ml-28 md:ml-0">
              <Link href="/">
                <FaLinkedin className="text-black hover:text-prim_blue w-7 h-7" />
              </Link>
              <Link href="/">
                <FaInstagram className="text-black hover:text-prim_blue w-7 h-7" />
              </Link>
              <Link href="/">
                <MdFacebook className="text-black hover:text-prim_blue w-7 h-7" />
              </Link>
              <Link href="/">
                <BiLogoTwitter className="text-black hover:text-prim_blue w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Right img Section */}
          <div className="w-full pt-10">
            <AboutStyle imgSrc="/contact1.png" imgAlt="Contact Us Image 1" />
          </div>
        </div>

        {/*  */}
        <div className="py-20 bg-light_Gray md:bg-white">
          <h6 className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-text">
            VISIT OUR OFFICE
          </h6>
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-text2 py-5">
            We help small businesses with big ideas
          </h2>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-10">
            {/* Card 1: Default BG Color with Phone Icon */}
            <RequestCard
              primaryEmail="georgia.young@example.com"
              secondaryEmail="georgia.young@ple.com"
              title="Get Support"
              buttonText="Submit Request"
              buttonLink="/support"
              icon={<BiPhone className="w-[72px] h-[72px] text-prim_blue" />}
            />
            {/* Card 2: Default BG Color with Phone Icon */}
            <RequestCard
              primaryEmail="georgia.young@example.com"
              secondaryEmail="georgia.young@ple.com"
              title="Get Support"
              buttonText="Submit Request"
              buttonLink="/support"
              bgColor="bg-text2"
              text="text-white"
              icon={
                <FaLocationDot className="w-[72px] h-[72px] text-prim_blue mt-5" />
              }
            />
            <div className="hidden md:flex">
              {/* Card 3: Default BG Color with Phone Icon */}
              <RequestCard
                primaryEmail="georgia.young@example.com"
                secondaryEmail="georgia.young@ple.com"
                title="Get Support"
                buttonText="Submit Request"
                buttonLink="/support"
                icon={
                  <BsFillEnvelopeFill className="w-[72px] h-[72px] text-prim_blue" />
                }
              />
            </div>
            <div className="md:hidden">
              {/* Card 4: Default BG Color with Phone Icon */}
              <RequestCard
                primaryEmail="georgia.young@example.com"
                secondaryEmail="georgia.young@ple.com"
                title="Get Support"
                buttonText="Submit Request"
                buttonLink="/support"
                icon={
                  <TbLocation className="w-[72px] h-[72px] text-prim_blue" />
                }
              />
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col justify-center items-center my-20">
            <PiArrowBendRightDown className="text-prim_blue  w-[72.56px] h-[72.84px] rotate-[-45.56]  " />
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text2 py-2">
              WE Can't WAIT TO MEET YOU
            </h5>
            <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-text2 py-5">
              Let’s Talk
            </h1>
            <button className="mt-4 font-montserrat text-sm font-bold w-[186px] h-[52px] rounded-m bg-prim_blue text-white my-8 rounded-md">
              <Link href={"/"}> Try for Free</Link>{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
