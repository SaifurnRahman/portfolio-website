import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Only for mouse users who haven't asked for reduced motion.
const canHover =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

// Pulls its child slightly toward the mouse, then springs back on leave.
const Magnetic = ({ children, strength = 0.3, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  if (!canHover) return <span className={`inline-flex ${className}`}>{children}</span>;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span style={{ x: springX, y: springY }} onMouseMove={onMove} onMouseLeave={reset} className={`inline-flex ${className}`}>
      {children}
    </motion.span>
  );
};

export default Magnetic;
