'use client';
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdown = (category) => {
    setDropdown(dropdown === category ? null : category);
  };

  return (
    <nav className="bg-teal-800 text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo Section */}
        <Link href="/">
          <img src="/logoo.png" alt="Islamic Web Logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
          <Link href="/prayertime" className="hover:text-gray-300 cursor-pointer">Prayer Times</Link>

          {/* About Islam Section */}
          <div className="relative group">
            <button
              onClick={() => handleDropdown("about")}
              className="hover:text-gray-300 cursor-pointer"
            >
              About Islam
            </button>
            {dropdown === "about" && (
              <div className="absolute bg-teal-700 p-4 rounded-lg shadow-lg top-10 left-0 space-y-4 w-48 z-50">
                <Link href="/about/introduction">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Introduction</span>
                </Link>
                <Link href="/about/fivepillars">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Five Pillars</span>
                </Link>
                <Link href="/about/corebelief">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Core Beliefs</span>
                </Link>
              </div>
            )}
          </div>

          {/* Quran Section */}
          <div className="relative group">
            <button
              onClick={() => handleDropdown("quran")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Quran
            </button>
            {dropdown === "quran" && (
              <div className="absolute bg-teal-700 p-4 rounded-lg shadow-lg top-10 left-0 space-y-4 w-48 z-50">
                <Link href="/quran/surahs">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Surahs</span>
                </Link>
                <Link href="/quran/detail">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">About Quran</span>
                </Link>
                <Link href="/quran/huqooq">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Rights In Islam</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-300 cursor-pointer">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-teal-700 p-4 space-y-4">
          <Link href="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
          <Link href="/prayertime" className="hover:text-gray-300 cursor-pointer">Prayer Times</Link>

          {/* About Islam Section */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              className="hover:text-gray-300 cursor-pointer"
            >
              About Islam
            </button>
            {dropdown === "about" && (
              <div className="absolute bg-teal-600 p-4 rounded-lg shadow-lg top-10 left-0 space-y-4 w-48 z-50">
                <Link href="/about/introduction">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Introduction</span>
                </Link>
                <Link href="/about/fivepillars">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Five Pillars</span>
                </Link>
                <Link href="/about/corebelief">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Core Beliefs</span>
                </Link>
              </div>
            )}
          </div>

          {/* Quran Section */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("quran")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Quran
            </button>
            {dropdown === "quran" && (
              <div className="absolute bg-teal-600 p-4 rounded-lg shadow-lg top-10 left-0 space-y-4 w-48 z-50">
                <Link href="/quran/surahs">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Surahs</span>
                </Link>
                <Link href="/quran/detail">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">About Quran</span>
                </Link>
                <Link href="/quran/huqooq">
                  <span className="block hover:text-gray-300 cursor-pointer py-2 px-4 rounded hover:bg-teal-600">Rights In Islam</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-300 cursor-pointer">Contact</Link>
        </div>
      )}
    </nav>
  );
}
