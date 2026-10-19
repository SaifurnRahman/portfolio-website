import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import data from '../data/portfolio.json';
import SectionHeading from './ui/SectionHeading';

// One timeline: work first, then education.
const timeline = [
  ...data.experience.map((e) => ({ kind: 'Work', title: e.role, place: e.company, period: e.period, description: e.description })),
  ...data.education.map((e) => ({ kind: 'Education', title: e.degree, place: e.institution, period: e.period, description: e.description })),
];

const Journey = ({ index = '06' }) => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          index={index}
          label="Our story"
          title="The founder's"
          accent="journey."
          intro="How SaifurHub came to be: freelance craft, starting the studio and engineering school."
        />

        <ol className="relative">
          {/* Center line (left line on mobile) */}
          <span className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-line to-transparent" />

          {timeline.map((item, index) => {
            const right = index % 2 === 1;
            const Icon = item.kind === 'Work' ? FaBriefcase : FaGraduationCap;
            return (
              <motion.li
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-16 pl-12 sm:pl-0 pb-14 last:pb-0"
              >
                {/* Node */}
                <span className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-bg border border-accent/60 text-accent flex items-center justify-center">
                  <Icon size={12} />
                </span>

                {/* Period, on the opposite side of the card */}
                <div className={`hidden sm:flex items-start ${right ? 'justify-end text-right' : 'order-2'}`}>
                  <p className="font-display italic text-5xl text-fg/80 leading-none pt-1">{item.period}</p>
                </div>

                <div className={`group rounded-2xl border border-line bg-card/70 p-6 sm:p-7 space-y-3 hover:border-accent/50 transition-colors ${right ? '' : 'sm:order-1'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="label !text-[0.6rem] text-accent">{item.kind}</span>
                    <span className="sm:hidden font-mono text-xs text-muted">{item.period}</span>
                  </div>
                  <h3 className="font-display text-3xl leading-tight text-fg">{item.title}</h3>
                  <p className="text-sm font-semibold text-muted">{item.place}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
