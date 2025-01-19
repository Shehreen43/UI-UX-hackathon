import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import TeamMemberCard from "../../components/TeemMember";
import FreeTrial from "../../components/FreeTrial";

const TeamMembers = () => {
  return (
    <>
      <div className="overflow-hidden max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-white">
        {/*  */}
        <div className="w-full md:w-[90%] bg-white py-[50px]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text">
            WHAT WE DO
          </h5>
          <h1 className="font-montserrat text-[40px] lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] text-center text-text2">
            Innovation tailored for you
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
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* team section */}
        <div className="my-10 w-full flex justify-center items-center">
          <div className="w-[80%] md:w-full h-full grid gap-[20px]  grid-cols-2 xl:grid-cols-4 grid-rows-4">
            <Image
              src={"/team/team-1.png"}
              alt="image"
              height={530}
              width={700}
              className="w-full  xl:h-full  col-span-2 row-span-4 object-cover"
            />

            <Image
              src={"/team/temM1.png"}
              alt="image"
              height={260}
              width={361}
              className="w-full xl:h-full col-span-1 row-span-2 object-cover"
            />

            <Image
              src={"/team/teamM2.png"}
              alt="image"
              height={260}
              width={361}
              className="w-full xl:h-full col-span-1 row-span-2 object-cover"
            />

            <Image
              src={"/team/teamM3.png"}
              alt="image"
              height={260}
              width={361}
              className="w-full xl:h-full col-span-1 row-span-2 object-cover"
            />

            <Image
              src={"/team/teamM4.png"}
              alt="image"
              height={260}
              width={361}
              className=" w-full xl:h-full col-span-1 row-span-2 object-cover"
            />
          </div>
        </div>

        {/* other team member */}
        
        <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-text2 my-10">Meet Our Team</h2>
       
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
          <TeamMemberCard imageSrc="/about/team-1.jpg" />
          <TeamMemberCard imageSrc="/about/team-2.jpg" />
          <TeamMemberCard imageSrc="/about/team-3.jpg" />
          <TeamMemberCard  imageSrc="/team/team-1-user-2.jpg"/>
          <TeamMemberCard  imageSrc="/team/team-1-user-1.jpg"/>
          <TeamMemberCard  imageSrc="/team/team-1-user3.png"/>
          <TeamMemberCard  imageSrc="/team/team-1-user-4.jpg"/>
          <TeamMemberCard  imageSrc="/team/team-1-user-5.jpg"/>
          <TeamMemberCard  imageSrc="/team/team-1-user-6.jpg"/>
        </div>

        {/* Free Trail */}
        <FreeTrial />

      </div>
    </>
  );
};

export default TeamMembers;



