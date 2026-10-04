import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  {
    icon: <FaLaptopCode size={24} className="text-orange-500" />,
    title: "Full-Stack Web Dev",
    description: "Building scalable, high-performance web applications using modern frameworks like React, Next.js, and Node.js.",
    code: "01 // Frontend & Backend",
  },
  {
    icon: <FaPaintBrush size={24} className="text-orange-500" />,
    title: "UI/UX & Graphic Design",
    description: "Crafting intuitive user interfaces, stunning branding materials, and custom t-shirt and logo designs with precision.",
    code: "02 // Creative & Branding",
  },
  {
    icon: <FaMobileAlt size={24} className="text-orange-500" />,
    title: "Responsive Layouts",
    description: "Ensuring flawless user experiences across mobile, tablet, and desktop screens with Tailwind CSS and advanced styling.",
    code: "03 // Mobile First",
  },
  {
    icon: <FaServer size={24} className="text-orange-500" />,
    title: "API & System Integration",
    description: "Connecting robust database systems, third-party payment gateways, and custom backend APIs smoothly.",
    code: "04 // Architecture",
  },
];

const WhatIDo = () => {
  return (
    <section id="services" className="relative bg-[#0c0c0e] text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// EXPERTISE & SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
            Combining aesthetic design precision with robust engineering to deliver comprehensive digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(249, 115, 22, 0.4)' }}
              className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 backdrop-blur-sm transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-neutral-800/60 rounded-xl border border-neutral-700/50 group-hover:bg-orange-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-xs text-neutral-500 font-semibold">{service.code}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 tracking-wider">explore_service()</span>
                <HiArrowRight className="text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" size={16} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;