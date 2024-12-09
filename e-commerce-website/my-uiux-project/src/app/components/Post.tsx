import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      img: "/post01.png",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      img: "/post1.png",
      date: "22 April 2021",
      comments: 12,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work.",
      img: "/post2.png",
      date: "22 April 2021",
      comments: 15,
      tag: "Hot",
    },
  ];

  return (
    <section className="overflow-hidden bg-transparent max-w-screen-2xl mx-auto">
    <div className="bg-white py-10 mt-28">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
        <p className="text-gray-500 mt-2">
          Resolving conflicts in Newtonian mechanics and modern physics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-5xl mx-auto">
        {posts.map((post) => (
          <article key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative">
              <div className="w-full h-40 relative">
                <Image src={post.img} alt={post.title} width={500} height={160} className="object-cover" />
                <span className={`absolute top-2 left-2 text-white font-bold px-2 py-1 rounded ${post.tag === "NEW" ? "bg-green-500" : post.tag === "Trending" ? "bg-yellow-500" : "bg-red-500"}`}>
                  {post.tag}
                </span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-md">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{post.description}</p>

              <div className="mt-4 flex justify-between text-gray-500 text-xs">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>

              <Link href="#" className="inline-block mt-4 text-blue-500 hover:underline">
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FeaturedPosts;
