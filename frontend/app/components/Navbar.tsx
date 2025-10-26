'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/20 backdrop-blur-md rounded-full shadow-md flex items-center justify-between px-8 py-3 z-50 max-w-7xl scale-110">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
  src="/logo.png"
  alt="Niti Academy Logo"
  width={800}
  height={400}
  className="w-36 h-auto object-contain  "
 />

        </Link>
      </div>

      {/* Hamburger Menu Button (Visible on Mobile) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-1/2 transform md:transform-none -translate-x-1/2 md:-translate-x-0 w-[90%] md:w-auto bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none p-6 md:p-0 md:items-center gap-6 md:gap-20 z-50 transition-all duration-300 max-w-7xl`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-[#0056B3] font-medium border-b-2 border-transparent hover:border-[#0056B3]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Course"
              className="hover:text-[#0056B3] font-medium border-b-2 border-transparent hover:border-[#0056B3]"
              onClick={() => setIsOpen(false)}
            >
              Course
            </Link>
          </li>
          <li>
            <Link
              href="/gallary"
              className="hover:text-[#0056B3] font-medium border-b-2 border-transparent hover:border-[#0056B3]"
              onClick={() => setIsOpen(false)}
            >
              Gallary 
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="hover:text-[#0056B3] font-medium border-b-2 border-transparent hover:border-[#0056B3]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="hover:text-[#0056B3] font-medium border-b-2 border-transparent hover:border-[#0056B3]"
              onClick={() => setIsOpen(false)}
            >
              About Us 
            </Link>
          </li>
        </ul>

        {/* Register Button */}
        <Link
          href="/Contact"
          className="bg-[#0056B3] text-white px-6 py-2 rounded-full font-medium hover:bg-[#003d80] transition-all text-center"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}