import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaNodeJs, FaDatabase, FaServer, FaImage, FaPenNib } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiCplusplus, SiWordpress, SiMongodb, SiExpress } from 'react-icons/si';

const skillsData = [
  { name: "React.js", category: "Frontend", icon: <FaReact className="text-cyan-400" size={26} />, level: "Advanced" },
  { name: "JavaScript (ES6+)", category: "Frontend", icon: <FaJs className="text-yellow-400" size={26} />, level: "Expert" },
  { name: "Tailwind CSS", category: "Styling", icon: <SiTailwindcss className="text-teal-400" size={26} />, level: "Expert" },
  { name: "HTML5 / CSS3", category: "Frontend", icon: <FaHtml5 className="text-orange-500" size={26} />, level: "Expert" },
  { name: "Next.js", category: "Framework", icon: <SiNextdotjs className="text-white" size={26} />, level: "Intermediate" },
  { name: "TypeScript", category: "Language", icon: <SiTypescript className="text-blue-500" size={26} />, level: "Intermediate" },
  { name: "Figma / UI-UX", category: "Design", icon: <FaFigma className="text-pink-500" size={26} />, level: "Advanced" },
  { name: "Adobe Photoshop", category: "Design", icon: <FaImage className="text-blue-400" size={26} />, level: "Advanced" },
  { name: "Adobe Illustrator", category: "Design", icon: <FaPenNib className="text-orange-400" size={26} />, level: "Advanced" },
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500" size={26} />, level: "Intermediate" },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-gray-300" size={26} />, level: "Intermediate" },
  { name: "MongoDB", category: "Backend", icon: <SiMongodb className="text-emerald-500" size={26} />, level: "Intermediate" },
  { name: "Git & GitHub", category: "Tools", icon: <FaGitAlt className="text-orange-600" size={26} />, level: "Advanced" },
  { name: "WordPress", category: "CMS", icon: <SiWordpress className="text-sky-600" size={26} />, level: "Advanced" },
  { name: "C++ Programming", category: "Language", icon: <SiCplusplus className="text-blue-600" size={26} />, level: "Intermediate" },
  { name: "Vite / Bundlers", category: "Tools", icon: <SiVite className="text-purple-400" size={26} />, level: "Advanced" },
];

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Frontend', 'Styling', 'Design', 'Backend', 'Language', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className="relative bg-transparent text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden cursor-default"
    >
      
      {/* Slow, Weighted Magnetic Custom Cursor Glow */}
      {isInside && (
        <motion.div
          className="absolute w-80 h-80 bg-orange-500/15 rounded-full blur-[90px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 30, mass: 0.8 }}
        />
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest"
          >
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// TECHNICAL_ARSENAL</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs transition-all duration-300 border ${
                activeFilter === category 
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30' 
                  : 'bg-neutral-950/65 text-gray-400 border-neutral-800 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              // {category.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              key={skill.name}
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              className="group bg-neutral-950/80 border border-neutral-800/90 hover:border-orange-500/80 rounded-2xl p-5 backdrop-blur-md shadow-xl flex flex-col items-center justify-center space-y-3 transition-colors relative overflow-hidden"
            >
              {/* Animated Top Scanline Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container with Rotation */}
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-orange-500/40 group-hover:bg-orange-500/15 transition-colors shadow-inner"
              >
                {skill.icon}
              </motion.div>

              <div className="text-center space-y-1">
                <h4 className="text-white font-bold text-xs group-hover:text-orange-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-[10px] text-neutral-500 px-2 py-0.5 bg-neutral-900/80 rounded-md border border-neutral-800/50 block">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;