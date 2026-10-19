import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../data/portfolio.json';

const testimonialsData = data.testimonials;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide circulating every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // 3D Flipping variants
  const flipVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative bg-transparent text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// CLIENT_FEEDBACK</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Clients</span>
          </h2>
        </div>

        {/* Circulating Flipping Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center perspective-[1000px]">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative space-y-6"
            >
              {/* Top Row: Quote Icon & Stars */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-500">
                  <FaQuoteLeft size={20} />
                </div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              {/* Feedback Content */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                "{current.content}"
              </p>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold text-base">{current.name}</h4>
                  <p className="text-xs text-neutral-400">{current.role}</p>
                </div>
                <span className="text-xs px-3 py-1 bg-neutral-900 border border-neutral-800 text-orange-400 rounded-lg">
                  // {current.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controls: Manual Next / Prev & Indicators */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 transition-all"
              title="Previous feedback"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 transition-all"
              title="Next feedback"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;