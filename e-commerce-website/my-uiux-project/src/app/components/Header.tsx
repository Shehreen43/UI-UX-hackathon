"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { HiOutlineX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle, MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface MobileMenuProps {
  links: { name: string; href: string }[];
  onClose: () => void; // onClose is a function that takes no arguments and returns void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, onClose }) => (
  <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-50 p-4">
    <div className="flex flex-col gap-4 text-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-800 hover:text-prim_blue"
          onClick={onClose} // Calls the onClose function
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "AboutUs", href: "/AboutUs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/Contact" },
    { name: "Pricing", href: "/Pricing" },
  ];

  return (
    <div className="w-full bg-white sticky top-0 z-50 shadow-md max-w-screen-2xl mx-auto">
      {/* Topline */}
      <div
        className={`hidden md:flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 bg-text2 text-white ${montserrat.className}`}
      >
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm">
            <LuPhone /> (225) 555-0118
          </button>
          <button className="flex items-center gap-2 text-sm">
            <TfiEmail /> michelle.rivera@example.com
          </button>
        </div>
        <p className="text-sm hidden xl:flex">
          Follow us and get a chance to win 80% off
        </p>
         {/* Right */}
         <div className="flex items-center gap-4">
          <p className="text-white">Follow Us :</p>
          <Link href="/"><FaInstagram className="text-white hover:text-prim_blue w-5 h-5" /></Link>
          <Link href="/"><FaYoutube className="text-white hover:text-prim_blue w-5 h-5" /></Link>
          <Link href="/"><MdFacebook className="text-white hover:text-prim_blue w-5 h-5" /></Link>
          <Link href="/"><BiLogoTwitter className="text-white hover:text-prim_blue w-5 h-5" /></Link>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`flex text-text2 bg-white justify-between items-center px-4 md:px-8 lg:px-16 py-4 ${montserrat.className}`}
      >
        <h3 className="text-2xl font-bold">Bandage</h3>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 text-prim_blue">
          <button className="hidden md:flex items-center gap-2 text-sm font-bold">
            <MdOutlineAccountCircle /> Login / Register
          </button>
          <button className="text-lg"><CiSearch /></button>
          <button className="text-lg flex items-center">
            <IoCartOutline /> 1
          </button>
          <button className="hidden md:flex text-lg pt-1">
            <CiHeart /> 1
          </button>
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Navbar;
