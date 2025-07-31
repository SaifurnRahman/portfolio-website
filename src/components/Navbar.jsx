import React, { useState } from 'react';
import { FaRegSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-90 px-4 md:px-8 py-3 flex items-center justify-between shadow relative z-50 max-w-6xl mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <span className="text-white text-xl font-black">
          SAIF
        </span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#home" className="text-white font-medium hover:text-violet-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="text-white font-medium hover:text-violet-500 transition">
  Services
</a>
        </li>
        <li>
          <a href="#projects" className="text-white font-medium hover:text-violet-500 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#blogs" className="text-white font-medium hover:text-violet-500 transition">
            Blogs
          </a>
        </li>
        <li>
          <a href="#aboutme" className="text-white font-medium hover:text-violet-500 transition">
            About Me
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-white font-medium hover:text-violet-500 transition">
            Testimonials
          </a>
        </li>
      </ul>

      {/* Right Side: Theme Toggle & Button (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#222] transition">
          <FaRegSun size={20} />
        </button>
        <button className="bg-violet-500 hover:bg-violet-400 text-black font-semibold px-6 py-2 rounded-full transition">
          <a href="#letstalk">Let's Talk</a>
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-4 md:hidden transition-all duration-300 z-40">
          <a href="#home" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#services" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#projects" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#blogs" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            Blogs
          </a>
          <a href="#aboutme" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
          <a href="#testimonials" className="text-white font-medium hover:text-violet-500 transition" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <div className="flex items-center space-x-4 pt-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#222] transition">
              <FaRegSun size={20} />
            </button>
            <button className="bg-violet-500 hover:bg-violet-400 text-black font-semibold px-6 py-2 rounded-full transition">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;