import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const journeyData = {
  experience: [
    {
      role: "Founder & Owner",
      company: "SaifurHub",
      period: "2025 - Present",
      description: "Managing e-commerce operations, digital growth, customer support, and strategic sales negotiation.",
      type: "Experience"
    },
    {
      role: "Freelance Designer & Developer",
      company: "Upwork & Fiverr",
      period: "2022 - Present",
      description: "Delivering thousands of high-end logo designs, custom t-shirt graphics, and responsive web development projects.",
      type: "Experience"
    }
  ],
  education: [
    {
      degree: "Computer Science & Engineering ",
      institution: "Southeast University",
      period: "Ongoing",
      description: "Focused on modern software development, C++ programming, database management, and web architecture.",
      type: "Education"
    }
  ]
};

const Journey = () => {
  return (
    <section id="journey" className="relative  bg-[#0c0c0e]/40 text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono">
      
      {/* Glow Accent */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// CAREER_TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
            A chronological log of my professional career, business leadership, and continuous learning journey.
          </p>
        </div>

        {/* Grid Layout for Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* EXPERIENCE COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-neutral-800">
              <FaBriefcase className="text-orange-500" size={18} />
              <h3 className="text-lg font-bold text-white tracking-wide">/* WORK_EXPERIENCE */</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-neutral-800">
              {journeyData.experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-2 border-orange-500 rounded-full group-hover:scale-125 group-hover:bg-orange-500 transition-all" />

                  <div className="bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/50 p-6 rounded-2xl backdrop-blur-md space-y-3 transition-all shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-md">
                        {item.company}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center space-x-1.5">
                        <FaCalendarAlt size={11} className="text-orange-500" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.role}
                    </h4>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-neutral-800">
              <FaGraduationCap className="text-orange-500" size={20} />
              <h3 className="text-lg font-bold text-white tracking-wide">/* EDUCATION_LOG */</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-neutral-800">
              {journeyData.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 bg-neutral-900 border-2 border-orange-500 rounded-full group-hover:scale-125 group-hover:bg-orange-500 transition-all" />

                  <div className="bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/50 p-6 rounded-2xl backdrop-blur-md space-y-3 transition-all shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-md">
                        {item.institution}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center space-x-1.5">
                        <FaCalendarAlt size={11} className="text-orange-500" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.degree}
                    </h4>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;