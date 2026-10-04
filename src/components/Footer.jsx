import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090b] text-gray-400 font-mono border-t border-neutral-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
              <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
              <span>// PORTFOLIO_TERMINAL</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Saifur Rahman
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Full-stack developer and designer building scalable web solutions, custom interfaces, and clean digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-orange-500 uppercase">/* NAVIGATION */</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">./home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">./services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">./projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">./about</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">./contact</a>
              </li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-orange-500 uppercase">/* CONNECT */</h4>
            <div className="flex items-center space-x-2">
              {[
                { icon: <FaGithub size={13} />, href: '#' },
                { icon: <FaLinkedinIn size={13} />, href: '#' },
                { icon: <FaTwitter size={13} />, href: '#' },
                { icon: <FaInstagram size={13} />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15, color: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors text-gray-400"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider & Bottom Credits */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} Saifur Rahman. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-3 py-2 bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-lg text-gray-300 hover:text-orange-400 transition-all"
          >
            <span>Back to top</span>
            <HiArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;