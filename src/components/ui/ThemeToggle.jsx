import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';

// Toggles the .dark class on <html> and remembers the choice.
// The initial class is set by the inline script in index.html.
const ThemeToggle = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className="relative w-10 h-10 rounded-full border border-line bg-card/60 backdrop-blur flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25 }}
        >
          {dark ? <HiMoon size={16} /> : <HiSun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
