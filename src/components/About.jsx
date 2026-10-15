import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaBriefcase, FaGraduationCap, FaUser } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Bio', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Tech Stack', icon: <FaCode /> },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#0c0c0e] text-gray-100 flex items-center py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// background & skills</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About <span className="text-orange-500">Me</span>
          </h2>
        </div>

        {/* Terminal Window Wrapper */}
        <div className="bg-[#121216] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Terminal Top Bar */}
          <div className="bg-[#18181c] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs text-neutral-400 ml-2">saifur-profile ~ about</span>
            </div>

            {/* Tabs Navigation */}
            <div className="flex space-x-1 bg-[#0c0c0e] p-1 rounded-lg border border-neutral-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs transition-all ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/20'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Body Content */}
          <div className="p-6 sm:p-10 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: BIO */}
              {activeTab === 'bio' && (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed"
                >
                  <p className="text-orange-400 text-xs tracking-wider">// WHO AM I</p>
                  <p>
                    I'm a passionate designer and developer with over 4 years of hands-on experience, bridging the gap between aesthetics and high-performance code. 
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Whether I'm building modern full-stack web applications, custom brand identities, or fine-tuning user interfaces, I focus on crafting digital products that are clean, efficient, and scalable.
                  </p>
                </motion.div>
              )}

              {/* TAB 2: EXPERIENCE */}
              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 w-full"
                >
                  <p className="text-orange-400 text-xs tracking-wider">// PROFESSIONAL EXPERIENCE</p>
                  
                  <div className="border-l-2 border-orange-500/40 pl-4 space-y-1">
                    <span className="text-xs text-orange-400 font-semibold">2021 - 2024</span>
                    <h4 className="text-white font-bold text-sm sm:text-base">Assistant Director</h4>
                    <p className="text-xs text-neutral-400">BWB Company (Organic Products)</p>
                    <p className="text-xs text-gray-300 pt-1">
                      Managed operations, team workflow, and strategic support to expand digital reach and streamline product systems.
                    </p>
                  </div>

                  <div className="border-l-2 border-neutral-700 pl-4 space-y-1">
                    <span className="text-xs text-neutral-400 font-semibold">Present</span>
                    <h4 className="text-white font-bold text-sm sm:text-base">Freelance Designer & Full-Stack Developer</h4>
                    <p className="text-xs text-neutral-400">Upwork & Fiverr</p>
                    <p className="text-xs text-gray-300 pt-1">
                      Delivering thousands of high-end design projects, custom t-shirt layouts, logo branding, and web development solutions.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: TECH STACK */}
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 w-full"
                >
                  <p className="text-orange-400 text-xs tracking-wider">// CORE TECHNOLOGIES & TOOLS</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {['TypeScript / JavaScript', 'React / Next.js', 'Tailwind CSS', 'C++ Programming', 'WordPress Development', 'UI/UX & Logo Design'].map((skill, idx) => (
                      <div key={idx} className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg flex items-center space-x-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;