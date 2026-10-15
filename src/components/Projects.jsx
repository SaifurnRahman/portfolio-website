import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "DentalCareBD",
    category: "E-Commerce",
    description: "Find trusted dentists, book appointments, make secure payments and manage your dental treatment from one simple platform.",
    image: "https://i.postimg.cc/RF0WSbYf/Screenshot-23.png",
    tech: ["React", "Node.js", "Tailwind", "MongoDB"],
    liveUrl: "https://dental-clinic-manage-system.netlify.app/",
    githubUrl: "https://github.com/SaifurnRahman/Dentel-Clinic-Management-System",
  },
  {
    id: 2,
    title: "UniCircleBD",
    category: "Web Apps",
    description: "The centralized platform to explore campus organizations, track your engagement history, and collaborate on high-impact projects.",
    image: "https://i.ibb.co.com/Y48Czswv/Screenshot-21.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "HTML5 Canvas"],
    liveUrl: "https://unicarebd.netlify.app/",
    githubUrl: "https://github.com/SaifurnRahman/university-club-membership-portal",
  },
  {
    id: 3,
    title: "Portfolio Site",
    category: "Branding",
    description: "SaifurHUB delivers cutting-edge digital solutions. From stunning graphic design to powerful web development and strategic brand promotion..",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
    tech: ["Illustrator", "Typography", "UI/UX", "Figma"],
    liveUrl: "https://saifurhub-it-agency-xxqt.bolt.host/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "NiyogBangla",
    category: "Web Apps",
    description: "NiyogBangla connects you with top employers across Bangladesh. Discover the right opportunities, apply easily, and move forward in your career — all in one place.",
    image: "https://i.postimg.cc/FHdXjtfJ/Screenshot-24.png",
    tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
    liveUrl: "https://dragon-news-auth-1c028.web.app/",
    githubUrl: "#",
  },
];

const categories = ['All', 'Web Apps', 'E-Commerce', 'Branding'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative  bg-[#0c0c0e]/70 text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono">
      
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
              <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
              <span>// PORTFOLIO_SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/80 border border-neutral-800 p-1.5 rounded-xl backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                ./{category.toLowerCase().replace(' ', '_')}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid with Motion Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden backdrop-blur-md flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                {/* Project Image Box with Overlay */}
                <div className="relative h-60 overflow-hidden border-b border-neutral-800/80">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-70" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover:grayscale-0"
                  />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-neutral-900/90 border border-neutral-700/60 text-orange-400 text-xs rounded-md shadow-md backdrop-blur-md">
                      // {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((techItem, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-gray-300 rounded-md">
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                      <a 
                        href={project.githubUrl} 
                        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={15} />
                        <span>Source Code</span>
                      </a>
                      <a 
                        href={project.liveUrl} 
                        className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors font-bold"
                      >
                        <span>Live Preview</span>
                        <FaExternalLinkAlt size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;