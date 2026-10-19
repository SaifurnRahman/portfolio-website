import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import data from '../data/portfolio.json';
import SectionHeading from './ui/SectionHeading';

const testimonialsData = data.testimonials;
const pad = (n) => String(n).padStart(2, '0');

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonialsData.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // Auto-advance every 7 seconds unless the visitor is hovering.
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % total), 7000);
    return () => clearInterval(timer);
  }, [currentIndex, paused, total]);

  const current = testimonialsData[currentIndex];
  const long = current.content.length > 260;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading index="04" label="Kind words" title="Trusted by" accent="clients." align="center" />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative rounded-[2rem] border border-line bg-card/70 px-6 py-10 sm:px-14 sm:py-14"
        >
          <span className="absolute -top-8 left-8 sm:left-14 font-display text-[8rem] leading-none text-accent select-none" aria-hidden="true">
            “
          </span>

          <div className="min-h-[260px] sm:min-h-[220px] flex flex-col justify-between gap-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <p className={`font-display text-fg leading-snug ${long ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>
                  {current.content}
                </p>
                <footer className="flex flex-wrap items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display text-xl">
                    {current.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="font-semibold text-fg">{current.name}</p>
                    <p className="text-xs text-muted">{current.role} · {current.project}</p>
                  </div>
                  <span className="ml-auto flex gap-0.5 text-accent-2">
                    {[...Array(current.rating)].map((_, i) => <FaStar key={i} size={12} />)}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-center justify-between gap-4 pt-6 border-t border-line">
              <span className="font-mono text-xs text-faint tabular-nums">
                <span className="text-accent">{pad(currentIndex + 1)}</span> / {pad(total)}
              </span>
              <div className="flex items-center gap-1.5">
                {testimonialsData.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Show review ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-faint'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={handlePrev} aria-label="Previous review" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors">
                  <HiArrowLeft />
                </button>
                <button onClick={handleNext} aria-label="Next review" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors">
                  <HiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
