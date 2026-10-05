import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import profile from '../assets/profile.png';

const Hero = () => {
  const roles = ['Web Developer', 'Full Stack Dev', 'Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="relative min-h-[50vh] bg-[#0c0c0e]/20 text-gray-100 flex items-center overflow-hidden py-10 sm:px-6 lg:px-8 font-mono">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container - 3 Columns Grid on Large Screens */}
      <div className="max-w-7xl mx-auto w-full relative grid grid-cols-1 lg:grid-cols-3 items-center">
        
        {/* LEFT COLUMN: Takes 1 Span */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-1 z-10 space-y-6 text-center lg:text-left bg-transparent p-6 lg:p-0 rounded-2xl"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// const developer = new Saifur();</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            I'm Saifur, a <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="animate-pulse text-orange-500">_</span>
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
            Passionate designer and developer with 4+ years of experience, collaborating with companies and startups to build modern digital products.
          </p>

          <div className="pt-2 flex items-center justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/30 transition-all pointer-events-auto"
            >
              <FiChevronDown size={24} className="animate-bounce" />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT WRAPPER DIV: Takes 2 Spans (Image on Top, Followed by About Me & More) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-2 z-10 lg:flex  items-center justify-center space-y-8 text-center lg:text-end bg-[#0c0c0e]/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-3xl border border-neutral-800/50 lg:border-none p-2"
        >
          {/* Portrait Image Container */}
          <div className="flex items-center justify-center lg:justify-center w-full">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03 }}
              className="w-[320px] sm:w-[420px] lg:w-[460px] h-[380px] sm:h-[440px] lg:h-[480px] relative flex items-end justify-center pointer-events-auto cursor-pointer group"
            >
              {/* Glowing backdrop on hover */}
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img 
                src={profile}
                alt="Saifur Rahman" 
                className="w-full h-full object-contain object-bottom filter grayscale-75 contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </div>

         <div className='flex flex-col items-center'>
           {/* About Me Brief */}
          <div className="space-y-1.5 w-full">
            <h3 className="text-xs font-semibold tracking-wider text-orange-500">/* ABOUT ME */</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              I love solving problems with creative solutions and modern technologies, blending high-end design with clean code.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-end space-x-2 text-xs font-bold text-white hover:text-orange-400 transition-colors pt-1 group pointer-events-auto"
            >
              <span>LEARN MORE</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* My Work Brief */}
          <div className="space-y-1.5 w-full">
            <h3 className="text-xs font-semibold tracking-wider text-orange-500">/* MY WORK */</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              Explore my latest digital products, responsive web apps, and creative design systems.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center justify-end space-x-2 text-xs font-bold text-white hover:text-orange-400 transition-colors pt-1 group pointer-events-auto"
            >
              <span>BROWSE PORTFOLIO</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-2 w-full">
            <h3 className="text-xs font-semibold tracking-wider text-orange-500">/* FOLLOW ME */</h3>
            <div className="flex items-center justify-center lg:justify-end space-x-2.5 text-gray-400 pointer-events-auto">
              {[
                { icon: <FaFacebookF size={13} />, href: '#' },
                { icon: <FaTwitter size={13} />, href: '#' },
                { icon: <FaInstagram size={13} />, href: '#' },
                { icon: <FaLinkedinIn size={13} />, href: '#' },
                { icon: <FaYoutube size={13} />, href: '#' },
                { icon: <FaGithub size={13} />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15, color: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
         </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;