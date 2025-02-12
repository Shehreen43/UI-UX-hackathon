import React from "react";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-white max-w-screen-2xl mx-auto">
    <div> 
      {/* footer header */}
      <div className="flex flex-col md:flex-row justify-between items-center  px-20 bg-light_Gray py-10">
        
        <h3 className="font-montserrat text-text2 text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
        Bandage</h3>
       
        <div className="flex gap-5">
          <Link href={'/'}><MdFacebook className="text-prim_blue w-6 h-6 hover:text-blue-500" /></Link>
          <Link href={'/'}><FaInstagram  className="text-prim_blue w-6 h-6 hover:text-blue-500"/></Link>
          <Link href={'/'}><BiLogoTwitter className="text-prim_blue w-6 h-6 hover:text-blue-500" /></Link>
        </div>
      </div>
      
      {/* footer body */}
      <div>
        {/* Links Section */}
        <div className="flex flex-wrap justify-between w-full sm:w-auto  px-20">
            {/* Columns */}
            {[
              {
                title: "Company Info",
                links: ["About Us", "Carrier", "We are hiring", "Blog"],
              },
              {
                title: "Legal",
                links: ["Terms & Conditions", "Privacy Policy", "Cookies", "License"],
              },
              {
                title: "Features",
                links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"],
              },
              {
                title: "Resources",
                links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
              },
            ].map((column, index) => (
              <div key={index} className="w-full sm:w-auto py-[50px]">
                <h3 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text2">{column.title}</h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="/" className="hover:text-blue-500 font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-text">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Newsletter Section */}
          <div className="w-full sm:w-auto py-[50px]">
            <h3 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-text2">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex py-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-4 pl-4 flex-1 border bg-light_Gray border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-prim_blue text-white px-4 py-4 rounded-r-md hover:bg-blue-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">Lore imp sum dolor Amit.</p>
            </form>
          </div>
          </div>
          
      </div>

      {/* footer footer */}

      <div className="py-[25px] bg-light_Gray pl-20">
      <h6 className="font-montserrat text-[14px] text-text font-bold leading-[24px] tracking-[0.2px] text-left">Made With Love By Finland All Right Reserved </h6>
      </div>
    </div>







    </footer>



    // <footer className="bg-gray-50 text-gray-700">
    //   <div className="max-w-7xl mx-auto px-6 py-10">
    //     {/* Top Section */}
    //     <div className="flex flex-wrap justify-between items-start gap-8">
    //       {/* Logo and Social Icons */}
    //       <div className="w-full sm:w-auto">
    //         <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
    //         <div className="flex space-x-4 mt-4">
    //           <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-blue-600">
    //             <i className="fab fa-facebook"></i>
    //           </a>
              
    //         </div>
    //       </div>

          // {/* Links Section */}
          // <div className="flex flex-wrap justify-between w-full sm:w-auto gap-8">
          //   {/* Columns */}
          //   {[
          //     {
          //       title: "Company Info",
          //       links: ["About Us", "Carrier", "We are hiring", "Blog"],
          //     },
          //     {
          //       title: "Legal",
          //       links: ["Terms & Conditions", "Privacy Policy", "Cookies", "License"],
          //     },
          //     {
          //       title: "Features",
          //       links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"],
          //     },
          //     {
          //       title: "Resources",
          //       links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
          //     },
          //   ].map((column, index) => (
          //     <div key={index} className="w-full sm:w-auto">
          //       <h3 className="font-semibold text-gray-800">{column.title}</h3>
          //       <ul className="mt-4 space-y-2">
          //         {column.links.map((link, idx) => (
          //           <li key={idx}>
          //             <Link href="" className="hover:text-blue-500">
          //               {link}
          //             </Link>
          //           </li>
          //         ))}
          //       </ul>
          //     </div>
          //   ))}
          // </div>

          // {/* Newsletter Section */}
          // <div className="w-full sm:w-auto">
          //   <h3 className="font-semibold text-gray-800">Get In Touch</h3>
          //   <form className="mt-4">
          //     <div className="flex">
          //       <input
          //         type="email"
          //         placeholder="Your Email"
          //         className="p-2 flex-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
          //         aria-label="Email address"
          //       />
          //       <button
          //         type="submit"
          //         className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          //       >
          //         Subscribe
          //       </button>
          //     </div>
          //     <p className="mt-2 text-sm text-gray-500">Lore imp sum dolor Amit.</p>
          //   </form>
          // </div>
    //     </div>

    //     {/* Bottom Section */}
    //     <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
    //       Made With Love By Finland &bull; All Rights Reserved
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;


// import { useState } from "react";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Email submitted:", email);
//     // Add your form submission logic here
//   };

//   return (
//     <footer className="bg-white py-8 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {/* Company Info Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Company Info</h3>
//             <ul className="space-y-2">
//               {["About Us", "Carrier", "We are hiring", "Blog"].map((item, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="hover:underline">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Legal</h3>
//             <ul className="space-y-2">
//               {["Privacy Policy", "Terms of Service", "Cookie Policy", "License"].map((item, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="hover:underline">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Support</h3>
//             <ul className="space-y-2">
//               {["Help Center", "Contact Us", "FAQ", "Terms of Service"].map((item, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="hover:underline">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Subscription Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Subscribe</h3>
//             <form onSubmit={handleSubmit} className="flex space-x-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-col items-center mt-8 space-y-4">
//           <h3 className="text-lg font-bold">Follow Us</h3>
//           <div className="flex space-x-4">
//             {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, idx) => (
//               <a
//                 key={idx}
//                 href="#"
//                 className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
//                 aria-label={icon}
//               >
//                 <i className={`fab fa-${icon}`}></i>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center mt-8">
//           <p className="text-sm text-gray-500">
//             &copy; {new Date().getFullYear()} Ecommerce Store. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
