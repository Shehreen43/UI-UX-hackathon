"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { HiOutlineX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import Form from "next/form";
import {
  useUser,
  ClerkLoaded,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import useBasketStore from "../../../store/store";
import { GoPasskeyFill } from "react-icons/go";
import { PackageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface MobileMenuProps {
  links: { name: string; href: string }[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 p-6">
    <div className="flex flex-col gap-6 text-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-800 text-lg font-medium hover:text-blue-500"
          onClick={onClose}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);



const Navbar = () => {
  const router = useRouter(); // Initialize useRouter hook
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const createClerkPasskey = async () => {
    if (!user) return;

    try {
      const passkeyResponse = await user.createPasskey();
      console.log("Passkey created successfully:", passkeyResponse);
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        err.message.includes("passkey_registration_cancelled")
      ) {
        console.warn("User canceled passkey registration.");
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "About", href: "/AboutUs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/Contact" },
    { name: "Pricing", href: "/Pricing" },
  ];
  if (typeof window !== "undefined") {
    // Now it's safe to use `useRouter`
    const router = useRouter();
  }
  
  
  // Programmatically navigate to a specific page (e.g., on button click or event)
  const handleGoToCart = () => {
    router.push("/basket");  // Navigate to the basket page
  };
  return (
    <div className="w-full bg-white sticky top-0 z-50 shadow-md">
      {/* Topline */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-16 py-2 bg-gray-800 text-white text-sm">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <LuPhone /> (225) 555-0118
          </button>
          <button className="flex items-center gap-2">
            <TfiEmail /> michelle.rivera@example.com
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow Us:</span>
          <Link href="/"><FaInstagram className="hover:text-blue-500" /></Link>
          <Link href="/"><FaYoutube className="hover:text-blue-500" /></Link>
          <Link href="/"><MdFacebook className="hover:text-blue-500" /></Link>
          <Link href="/"><BiLogoTwitter className="hover:text-blue-500" /></Link>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-3">
       <div className="w-1/4 ">
       <Link href="/" className="text-2xl font-bold text-gray-800">
          Bandage
        </Link>
       </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />}
      {/* </div> */}
     {/*  */}
     <div className="md:block lg:flex w-1/2  hidden md:w-full md:justify-center md:items-center gap-4 text-prim_blue">
          <div className="w-full">
            {/* Search Bar */}
            <Form
              action="/search"
              className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
            >
              <input
                type="text"
                name="query"
                aria-label="Search products"
                placeholder="Search for products"
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-blue-500/50 border w-full max-w-4xl"
              />
            </Form>
          </div>

          <div className="w-full flex justify-end">
            <ClerkLoaded>
              <SignedIn>
                <Link
                  href="/orders"
                  aria-label="View my orders"
                  className="flex items-center space-x-2 text-blue-400 font-bold py-2 px-4 rounded"
                >
                  <PackageIcon className="w-7 h-7" />
                </Link>
                <div>
                <div className="flex items-center gap-x-4">
                    <button
                      onClick={handleGoToCart} // Use the router to navigate
                      aria-label={`View basket with ${itemCount} items`}
                      className="text-lg flex items-center py-2 px-4"
                    >
                      <IoCartOutline className="w-7 h-7" />
                      <span className="bg-prim_blue -mt-px text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {itemCount}
                      </span>
                    </button>
                  </div>
              {/* <div className="flex items-center gap-x-4">
            <Link
              href="/basket"
              aria-label={`View basket with ${itemCount} items`}
              className="text-lg flex items-center py-2 px-4"
            >
              <IoCartOutline className="w-7 h-7" />
              <span className=" bg-prim_blue -mt-px text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            </Link>
             </div>  */}
              </div>
              </SignedIn>
              {user ? (
                <div className="flex items-center">
                  <UserButton />
                </div>
              ) : (
                <div className="w-full justify-around hover:bg-prim_blue">
                <SignInButton mode="modal" />
               </div>
              )}
              {user?.passkeys.length === 0 && (
               
                 <button
                  onClick={createClerkPasskey}
                  aria-label="Create a passkey"
                  className="bg-white hover:bg-blue-400 hover:text-white font-bold py-2 px-3 rounded border"
                >
                 <GoPasskeyFill />
                </button>
              
              )}
              
            </ClerkLoaded>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Montserrat } from "next/font/google";
// import { HiOutlineX, HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoCartOutline } from "react-icons/io5";
// import { MdFacebook } from "react-icons/md";
// import { FaInstagram, FaYoutube } from "react-icons/fa";
// import { BiLogoTwitter } from "react-icons/bi";
// import { LuPhone } from "react-icons/lu";
// import { TfiEmail } from "react-icons/tfi";
// import Form from "next/form";
// import {
//   useUser,
//   ClerkLoaded,
//   SignedIn,
//   UserButton,
//   SignInButton,
// } from "@clerk/nextjs";
// import { PackageIcon } from "@sanity/icons";
// import useBasketStore from "../../../store/store";
// import { GoPasskeyFill } from "react-icons/go";

// const montserrat = Montserrat({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// interface MobileMenuProps {
//   links: { name: string; href: string }[];
//   onClose: () => void; // onClose is a function that takes no arguments and returns void
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({ links, onClose }) => (
//   <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-150 p-4">
//     <div className="flex flex-col gap-4 text-center">
//       {links.map((link) => (
//         <Link
//           key={link.name}
//           href={link.href}
//           className="text-gray-800 hover:text-prim_blue"
//           onClick={onClose} // Calls the onClose function
//         >
//           {link.name}
//         </Link>
//       ))}
//     </div>
//   </div>
// );

// const Navbar = () => {
//   const { user } = useUser();
  
//   // Move the hook call directly to the top level of the component
//    const itemCount = useBasketStore((state) =>
//     state.items.reduce((total, item) => total + item.quantity, 0)
//   );

  // const createClerkPasskey = async () => {
  //   if (!user) return;

  //   try {
  //     const passkeyResponse = await user.createPasskey();
  //     console.log("Passkey created successfully:", passkeyResponse);
  //   } catch (err: unknown) {
  //     if (
  //       err instanceof Error &&
  //       err.message.includes("passkey_registration_cancelled")
  //     ) {
  //       console.warn("User canceled passkey registration.");
  //     } else {
  //       console.error("Unexpected error:", err);
  //     }
  //   }
  // };
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Shop", href: "/Shop" },
//     { name: "AboutUs", href: "/AboutUs" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/Contact" },
//     { name: "Pricing", href: "/Pricing" },
//   ];

//   return (
//     <div className="w-full bg-white sticky top-0 z-50 shadow-md max-w-screen-2xl mx-auto overflow-hidden">
//       {/* Topline */}
//       <div
//         className={`hidden md:flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 bg-text2 text-white ${montserrat.className}`}
//       >
//         <div className="flex items-center gap-6">
//           <button className="flex items-center gap-2 text-sm">
//             <LuPhone /> (225) 555-0118
//           </button>
//           <button className="flex items-center gap-2 text-sm">
//             <TfiEmail /> michelle.rivera@example.com
//           </button>
//         </div>
//         <p className="text-sm hidden xl:flex">
//           Follow us and get a chance to win 80% off
//         </p>
//         {/* Right */}
//         <div className="flex items-center gap-4">
//           <p className="text-white">Follow Us :</p>
//           <Link href="/">
//             <FaInstagram className="text-white hover:text-prim_blue w-5 h-5" />
//           </Link>
//           <Link href="/">
//             <FaYoutube className="text-white hover:text-prim_blue w-5 h-5" />
//           </Link>
//           <Link href="/">
//             <MdFacebook className="text-white hover:text-prim_blue w-5 h-5" />
//           </Link>
//           <Link href="/">
//             <BiLogoTwitter className="text-white hover:text-prim_blue w-5 h-5" />
//           </Link>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="w-full flex gap-5 justify-between items-center px-4 md:px-8 lg:px-16 py-3">
//         {/* page */}
//         <div
//           className={`flex text-text2 bg-white justify-between items-center gap-5 px-4 md:px-8 lg:px-16 py-4 ${montserrat.className}`}
//         >
//           <Link href="/" aria-label="Home">
//             <h3 className="text-2xl font-bold hover:opacity-50 cursor-pointer">
//               Bandage
//             </h3>
//           </Link>
//           <div className="hidden md:flex items-center gap-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm font-bold"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <button
//             className="text-2xl md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
//           </button>
//            {/* Mobile Menu */}
//          {menuOpen && (
//           <div className="justify-end w-full absolute top-0 left-0 bg-white shadow-lg z-150 p-4">
//              <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />
//           </div>
//          )} 
//         </div>
//         {/* left */}
        // <div className="md:block lg:flex  hidden md:w-full md:justify-center md:items-center gap-4 text-prim_blue">
        //   <div className="w-full">
        //     {/* Search Bar */}
        //     <Form
        //       action="/search"
        //       className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        //     >
        //       <input
        //         type="text"
        //         name="query"
        //         aria-label="Search products"
        //         placeholder="Search for products"
        //         className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-blue-500/50 border w-full max-w-4xl"
        //       />
        //     </Form>
        //   </div>

        //   <div className="w-full flex justify-end">
        //     <ClerkLoaded>
        //       <SignedIn>
        //         <Link
        //           href="/orders"
        //           aria-label="View my orders"
        //           className="flex items-center space-x-2 text-blue-400 font-bold py-2 px-4 rounded"
        //         >
        //           <PackageIcon className="w-7 h-7" />
        //         </Link>
        //         <div>
        //       <div className="flex items-center gap-x-4">
        //     <Link
        //       href="/basket"
        //       aria-label={`View basket with ${itemCount} items`}
        //       className="text-lg flex items-center py-2 px-4"
        //     >
        //       <IoCartOutline className="w-7 h-7" />
        //       <span className=" bg-prim_blue -mt-px text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        //         {itemCount}
        //       </span>
        //     </Link>
        //      </div> 
        //       </div>
        //       </SignedIn>
        //       {user ? (
        //         <div className="flex items-center">
        //           <UserButton />
        //         </div>
        //       ) : (
        //         <div className="w-full justify-around hover:bg-prim_blue">
        //         <SignInButton mode="modal" />
        //        </div>
        //       )}
        //       {user?.passkeys.length === 0 && (
               
        //          <button
        //           onClick={createClerkPasskey}
        //           aria-label="Create a passkey"
        //           className="bg-white hover:bg-blue-400 hover:text-white font-bold py-2 px-3 rounded border"
        //         >
        //          <GoPasskeyFill />
        //         </button>
              
        //       )}
              
        //     </ClerkLoaded>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
