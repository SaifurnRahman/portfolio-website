import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Desktop-only cursor follower. Over any element with data-cursor="View" (or "Play",
// "Drag"...) it grows into a labelled bubble; the system cursor is hidden there via CSS.
const CustomCursor = () => {
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!canHover) return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setLabel(e.target.closest?.('[data-cursor]')?.dataset.cursor || '');
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  if (!canHover) return null;

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[70]" style={{ x: springX, y: springY }}>
      <motion.div
        initial={false}
        animate={{ width: label ? 88 : 10, height: label ? 88 : 10, opacity: visible ? (label ? 1 : 0.7) : 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30"
      >
        {label && <span className="text-xs font-semibold tracking-wide">{label}</span>}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
