import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import SectionHeading from './ui/SectionHeading';

const skillsData = data.skills;
const categories = ['All', ...new Set(skillsData.map((skill) => skill.category))];
const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = activeFilter === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeFilter);

  const count = (category) =>
    category === 'All' ? skillsData.length : skillsData.filter((s) => s.category === category).length;

  return (
    <section id="skills" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index="03"
          label="Toolbox"
          title="Tools &"
          accent="expertise."
          intro="The tools we reach for every day, from the first sketch to the final deploy."
        />

        {/* Filters with counts */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm border transition-colors ${
                  isActive ? 'border-transparent text-white' : 'border-line text-muted hover:text-fg hover:border-faint'
                }`}
              >
                {isActive && (
                  <motion.span layoutId="skill-filter" className="absolute inset-0 rounded-full bg-accent" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{category}</span>
                <span className={`relative font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-faint'}`}>{count(category)}</span>
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              const level = levels.indexOf(skill.level) + 1;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: idx * 0.02 }}
                  className="group relative rounded-2xl border border-line bg-card/70 p-4 sm:p-5 hover:border-accent/50 hover:-translate-y-1 transition-[border-color,transform] duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-11 h-11 rounded-xl bg-bg-soft border border-line flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={skill.icon} className={skill.color} size={22} />
                    </span>
                    <span className="label !text-[0.55rem] text-right">{skill.category}</span>
                  </div>
                  <h4 className="mt-4 text-sm sm:text-base font-semibold text-fg">{skill.name}</h4>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-xs text-muted">{skill.level}</span>
                    <span className="flex gap-1" title={skill.level}>
                      {levels.map((_, i) => (
                        <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-accent' : 'bg-line'}`} />
                      ))}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
