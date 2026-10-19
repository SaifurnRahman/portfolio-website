import React from 'react';
import { motion } from 'framer-motion';

// "01 — LABEL" row, then a large serif title whose last part is italic accent.
const SectionHeading = ({ index, label, title, accent, intro, align = 'left' }) => {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`space-y-4 ${centered ? 'text-center mx-auto' : ''} max-w-2xl`}
    >
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {index && <span className="font-mono text-xs text-accent">{index}</span>}
        <span className="h-px w-8 bg-line" />
        <span className="label">{label}</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight text-fg">
        {title} {accent && <em className="text-accent">{accent}</em>}
      </h2>
      {intro && <p className="text-muted text-sm sm:text-base leading-relaxed">{intro}</p>}
    </motion.div>
  );
};

export default SectionHeading;
