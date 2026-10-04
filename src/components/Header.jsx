import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import image from '../assets/profile.png';

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const subVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }
};

const Header = () => {
  return (
    <section className="min-h-[600px] bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-8 pt-24 md:py-12 max-w-6xl mx-auto">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl w-full md:pr-8">
        {/* Hello There */}
        <motion.div
          className="flex items-center mb-3 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-white text-base md:text-lg font-medium relative">
            <span className="px-3 py-1 bg-transparent border border-violet-500 rounded-md">
              Hello There!
            </span>
          </span>
        </motion.div>
        {/* Main Heading with Typewriter */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2 min-h-[120px]"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-violet-500">I’m Saifur Rahman,</span>
          <br />
          <span>
            <Typewriter
              words={[
                "Experienced Designer.",
                "Web Developer.",
                "Creative Thinker."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>
        {/* Subtext */}
        <motion.p
          className="text-gray-300 text-base md:text-lg mb-6 md:mb-8"
          variants={subVariants}
          initial="hidden"
          animate="visible"
        >
          I’m an experienced Designer with 4+ years in the field, collaborating with various companies and startups.
        </motion.p>
        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <button className="bg-violet-500 hover:bg-violet-700 text-black font-semibold px-6 py-2 rounded-full transition">
            View My Work
          </button>
          <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Right: Image & Badges */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full hidden md:flex"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={image}
          alt="Saifur Rahman"
          className="w-[540px] h-[540px] object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Header;