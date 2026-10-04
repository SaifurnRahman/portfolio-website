import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/banner.png';
import CountUp from 'react-countup';

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center">
      {/* Left: Image with Violet Background Shape */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full mb-10 md:mb-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative w-64 h-80 md:w-80 md:h-[420px] flex items-end justify-center">
          {/* Violet arch background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-80 md:w-80 md:h-[420px] bg-violet-500 rounded-b-[2.5rem] rounded-t-full z-0"></div>
          {/* Profile image */}
          <img
            src={profile}
            alt="About Me"
            className="relative z-10 w-80 h-80 md:w-100 md:h-100 object-cover rounded-xl mx-auto"
            style={{ objectPosition: 'top' }}
          />
        </div>
      </motion.div>

      {/* Right: About Me Content */}
      <motion.div
        className="flex-1 max-w-xl w-full text-center md:text-left"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-violet-500 font-semibold text-lg mb-2">About Me</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Who is <span className="text-violet-500">Saifur Rahman?</span>
        </h2>
        <p className="text-gray-300 mb-6">
          I am a passionate designer and developer with 4+ years of experience, collaborating with various companies and startups to create impactful digital products. I love solving problems with creative solutions and modern technologies.
        </p>
        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
          <div>
            <span className="text-2xl font-bold text-white">
              <CountUp end={1400} duration={2} />+
            </span>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">
              <CountUp end={25} duration={2} />+
            </span>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">
              <CountUp end={4} duration={2} />+
            </span>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <a
            href="tel:0000000000"
            className="flex items-center justify-center bg-violet-500 text-black font-semibold px-4 py-2 rounded-full transition hover:bg-violet-600"
          >
            01822-690061
          </a>
          <a
            href="mailto:saifurrahman24to7@gmail.com"
            className="flex items-center justify-center bg-white text-black font-semibold px-4 py-2 rounded-full transition hover:bg-violet-100"
          >
            saifurrahman24to7@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;