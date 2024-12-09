import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuAlarmClockCheck } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { FcNext } from "react-icons/fc";

const posts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'Integral)",
    description: "We focus on ergonomics and meeting you where you work.",
    imgUrl: "/post01.png",
    date: "22 April 2021",
    comments: 15,
    tag: "New",
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'Integral)",
    description: "We focus on ergonomics and meeting you where you work.",
    imgUrl: "/post1.png",
    date: "22 April 2021",
    comments: 15,
    tag: "New",
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L'Integral)",
    description: "We focus on ergonomics and meeting you where you work.",
    imgUrl: "/post2.png",
    date: "22 April 2021",
    comments: 15,
    tag: "New",
  },
  
];

const FeaturedPosts = () => {
  return (
    <section className="overflow-hidden bg-transparent max-w-screen-2xl mx-auto">
      <div className="flex flex-col my-10">
          
          <div className="flex flex-col my-10">
          <h6 className="font-montserrat text-[14px] font-bold text-prim_blue leading-[24px] tracking-[0.2px] text-center">Practice Advice</h6>
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] text-text2 tracking-[0.2px] text-center">Featured Posts</h2>
          <p className="font-montserrat text-[14px] font-normal leading-[20px] text-text tracking-[0.2px] text-center">Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics </p>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
        {posts.map((post) => (
          <div key={post.id} className="border shadow-sm w-full max-w-[348px] mx-auto mb-6">
            {/* Image Section */}
            <div className="relative">
            <span
      className={`absolute top-2 left-2 bg-red text-white bg-red-500 text-sm font-bold px-2 py-1 rounded ${post.tag}`}
            >
       {post.tag}
       </span>
              <Image src={post.imgUrl} alt={post.title} width={348} height={300} className="object-cover" />
            </div>

            {/* Card Details */}
            <div className="flex flex-col border p-4">
            <div className="flex gap-2 py-2">
                <Link href={'/'} className="text-prim_blue font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px]">Google</Link>
                <Link href={'/'} className="text-text font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px]">Trending</Link>
                <Link href={'/'} className="text-text font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px]">New</Link>
              </div>
              <h4 className="font-montserrat p-y2 text-[20px] text-text2 font-bold leading-[30px] tracking-[0.2px] text-left">
                {post.title}
              </h4>
              <p className="font-montserrat py-2 text-[14px] font-normal text-text leading-[20px] tracking-[0.2px] text-left">
                {post.description}
              </p>
              <div className="flex justify-between mt-4 text-sm text-gray-600 p-2">
               <div className="flex gap-2"> <span><LuAlarmClockCheck className="text-prim_blue" /></span> <span>{post.date}</span> </div>
                <div className="flex gap-2"> <span><BsGraphUpArrow className="text-prim_green" /></span> <span>{post.comments} comments</span> </div>
              </div>
              <Link href={`/posts/${post.id}`} className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-blue-500 mt-4 flex gap-2">
                  Learn More <span><FcNext className="mt-1 text-prim_blue" /></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
