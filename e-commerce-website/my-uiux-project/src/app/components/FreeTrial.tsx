import React from 'react';
import Link from 'next/link';
import { MdFacebook } from "react-icons/md";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";

const FreeTrial = () => {
  return (<>
    {/* free trial */}
    <div className="w-full flex flex-col justify-center items-center my-20">
    <h2 className="font-montserrat text-[40px] font-bold leading-[50px] w-[90%] tracking-[0.2px] text-center text-text2 py-5">
      Start your 14 days free trial
    </h2>
    <p className="font-montserrat text-[14px] font-normal leading-[20px] w-[90%] tracking-[0.2px] text-center text-text py-2">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met
      sent. RELIT official consequent.
    </p>
    <button className="mt-4 font-montserrat text-sm font-bold w-[186px] h-[52px] rounded-m bg-prim_blue text-white my-8 rounded-md">
      <Link href={"/"}> Try for Free</Link>{" "}
    </button>
    <div className="flex items-center gap-4 my-2 -ml-20">
      <p className="text-white">Follow Us :</p>
      <Link href="/">
        <FaLinkedin className="text-blue-500 hover:text-prim_blue w-7 h-7" />
      </Link>
      <Link href="/">
        <FaInstagram className="text-[#E51F5A] hover:text-prim_blue w-7 h-7" />
      </Link>
      <Link href="/">
        <MdFacebook className="text-prim_blue hover:text-black w-7 h-7" />
      </Link>
      <Link href="/">
        <BiLogoTwitter className="text-prim_blue hover:text-black w-7 h-7" />
      </Link>
    </div>
  </div>
  </>
  )
}
export default  FreeTrial;