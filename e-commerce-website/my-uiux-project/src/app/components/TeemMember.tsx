import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";

interface TeamMemberCardProps {
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Team Member Image */}
      <Image
        src={imageSrc}
        alt="Team member"
        height={231}
        width={316}
        className="w-full object-cover"
      />

      {/* Name and Profession */}
      <h2 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] pt-3 text-center text-text2">
        Username
      </h2>
      <p className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center py-2 text-text">
        Profession
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-3 items-center py-2 ">
          <Link href="/"><FaYoutube className="text-prim_blue w-5 h-5" /></Link>
          <Link href="/"><FaInstagram className="text-[#E51F5A] md:text-prim_blue w-5 h-5" /></Link>
          <Link href="/"><MdFacebook className="text-prim_blue w-5 h-5" /></Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;






