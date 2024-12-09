"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  LuPhone,
  TfiEmail,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  RiArrowDropDownLine,
  MdOutlineAccountCircle,
  CiSearch,
  IoCartOutline,
  CiHeart,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/all";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white">
      {/* Topline */}
      <div
        className={`hidden md:flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 bg-[#252B42] text-white ${montserrat.className}`}
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm">
            <LuPhone /> (225) 555-0118
          </button>
          <button className="flex items-center gap-2 text-sm">
            <TfiEmail /> michelle.rivera@example.com
          </button>
        </div>

        {/* Center */}
        <p className="text-sm">Follow us and get a chance to win 80% off</p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 ${montserrat.className}`}
      >
        {/* Brand */}
        <h3 className="text-2xl font-bold">Bandage</h3>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-bold">
            Home
          </Link>
          <Link href="/" className="text-sm font-bold flex items-center">
            Shop <RiArrowDropDownLine />
          </Link>
          <Link href="/" className="text-sm font-bold">
            About
          </Link>
          <Link href="/" className="text-sm font-bold">
            Blog
          </Link>
          <Link href="/" className="text-sm font-bold">
            Contact
          </Link>
          <Link href="/" className="text-sm font-bold">
            Pages
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-sm font-bold">
            <MdOutlineAccountCircle /> Login / Register
          </button>
          <button className="text-lg">
            <CiSearch />
          </button>
          <button className="text-lg flex items-center">
            <IoCartOutline /> 1
          </button>
          <button className="hidden md:flex text-lg">
            <CiHeart /> 1
          </button>
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-50 p-4">
          <div className="flex flex-col gap-4 text-center">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Shop
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Blog
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Pages
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
