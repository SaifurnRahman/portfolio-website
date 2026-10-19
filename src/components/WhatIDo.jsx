import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import SectionHeading from './ui/SectionHeading';

const services = data.services;

const WhatIDo = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <SectionHeading
            index="01"
            label="Services"
            title="What we"
            accent="do."
            intro="From websites and interfaces to posters, videos and motion: everything your brand needs to look good online."
          />
        </div>

        <ul className="lg:col-span-8 border-t border-line">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-b border-line py-8 sm:py-10 grid grid-cols-[auto_1fr] sm:grid-cols-[4rem_1fr_auto] gap-x-6 gap-y-3 items-start"
            >
              {/* Hover fill */}
              <span className="absolute inset-0 -mx-4 rounded-2xl bg-accent/[0.06] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <span className="relative font-mono text-xs text-faint pt-3 group-hover:text-accent transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative space-y-3">
                <h3 className="font-display text-3xl sm:text-4xl text-fg group-hover:italic transition-all">
                  {service.title}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-line text-xs text-muted group-hover:border-accent/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="relative hidden sm:flex w-14 h-14 rounded-full border border-line items-center justify-center text-muted group-hover:text-white group-hover:bg-accent group-hover:border-accent group-hover:rotate-[-12deg] transition-all duration-500">
                <Icon name={service.icon} size={20} />
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatIDo;
