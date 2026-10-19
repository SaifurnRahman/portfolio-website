import React from 'react';
import { motion } from 'framer-motion';

// Calm page backdrop: a faint grid that fades out, plus two slow-drifting
// accent glows. Colors come from the theme tokens, so it works in both themes.
const BackgroundAnimation = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 75%)',
      }}
    />
    <motion.div
      className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full blur-[140px]"
      style={{ background: 'var(--glow)' }}
      animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full blur-[140px]"
      style={{ background: 'var(--glow)' }}
      animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
      transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export default BackgroundAnimation;
