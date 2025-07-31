import React from 'react';
import image from '../assets/profile.png';

const Header = () => {
  return (
    <section className=" min-h-[600px] bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-8 pt-24 md:py-12 max-w-6xl mx-auto">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl w-full md:pr-8">
        {/* Hello There */}
        <div className="flex items-center mb-3 md:mb-4">
          <span className="text-white text-base md:text-lg font-medium relative">
            <span className="px-3 py-1 bg-transparent border border-violet-500 rounded-md">
              Hello There!
            </span>
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2">
          <span className="text-violet-500">I’m Saifur Rahman,</span><br />
          Designer and<br />Developer.
        </h1>
        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
          I’m an experienced Designer with 4+ years in the field, collaborating with various companies and startups.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-violet-500 hover:bg-violet-700 text-black font-semibold px-6 py-2 rounded-full transition">
            View My Work
          </button>
          <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Right: Image & Badges */}
      <div className="flex-1 flex items-center justify-center w-full hidden md:block">
        {/* Main Image */}
        <img
          src={image}
          alt="Saifur Rahman"
          className="w-100 h-100 md:w-150 md:h-150 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Header;