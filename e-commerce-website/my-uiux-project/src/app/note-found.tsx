'use client';

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1a1a2e] text-white overflow-hidden relative">
      <div className="text-center">
        <h1 className="text-[15vw] text-[#e94560] text-shadow animate-pulse">404</h1>
        <p className="text-[1.5vw] text-[#eeeeee] mt-2 animate-fade-in hover:scale-110">Oops! The page you're looking for can't be found.</p>
        <Link href="/">
          <a className="inline-block mt-8 px-6 py-3 bg-[#e94560] text-white text-[1.2vw] rounded transition-transform duration-300 ease-in-out transform hover:bg-[#ff3e50] hover:scale-110">
            Go Back Home
          </a>
        </Link>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            text-shadow: 0 0 20px rgba(233, 69, 96, 0.8), 0 0 30px rgba(233, 69, 96, 0.6);
          }
          50% {
            transform: scale(1.1);
            text-shadow: 0 0 30px rgba(233, 69, 96, 1), 0 0 40px rgba(233, 69, 96, 0.9);
          }
        }

        @keyframes fade-in {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(233, 69, 96, 0.2) 10%, transparent 10%) center / 50px 50px;
          z-index: -1;
          animation: moveBackground 10s linear infinite;
        }

        @keyframes moveBackground {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }
      `}</style>
    </div>
  );
}
