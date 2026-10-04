import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPalette, FaStore, FaGraduationCap, FaRocket, FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const highlights = [
    {
      icon: <FaPalette className="text-orange-500" size={22} />,
      title: "Graphic & T-Shirt Design",
      description: "Completed thousands of specialized t-shirt designs, custom logos, and branding projects with years of expertise in typography and vector illustration."
    },
    {
      icon: <FaStore className="text-amber-500" size={22} />,
      title: "Online Business Owner",
      description: "Founder and operator of the e-commerce venture 'shosta shodai', managing digital operations, sales strategies, and customer scaling."
    },
    {
      icon: <FaLaptopCode className="text-cyan-400" size={22} />,
      title: "Full-Stack & Frontend Dev",
      description: "Building responsive, animated web interfaces using React, Tailwind CSS, and modern JavaScript, backed by robust backend and database capabilities."
    }
  ];

  return (
    <section id="about" className="relative bg-transparent text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest"
          >
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// SYSTEM_PROFILE</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            About <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 bg-neutral-950/80 border border-neutral-800/90 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Top Scanline Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-3">
              <span className="text-orange-500">&gt;</span> 
              <span>Bridging Creativity & Code</span>
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Hello! I'm <strong className="text-orange-400">Saifur Rahman</strong>, a multi-disciplinary creator combining professional graphic design artistry with full-stack software development and digital entrepreneurship. 
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              With a strong background in freelance logo and t-shirt design spanning thousands of successful projects, I transitioned my eye for layout and user experience into writing high-performance web applications. I also run the online business <strong className="text-white">shosta shodai</strong>, giving me hands-on perspective into digital marketing, customer support, and strategic business operations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-500">// SPECIALIZATION</span>
                <p className="text-xs text-white font-bold">Frontend & Branding</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-500">// VENTURE</span>
                <p className="text-xs text-white font-bold">Shosta Shodai</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Highlights Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-neutral-950/70 border border-neutral-800 hover:border-orange-500/50 p-5 rounded-2xl backdrop-blur-md transition-all flex items-start space-x-4 shadow-xl"
              >
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;