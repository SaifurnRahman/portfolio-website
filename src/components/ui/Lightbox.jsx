import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

// Full-screen viewer for work items. Carousels step through their slides
// first, then move on to the next item. Keys: ← → Esc.
const Lightbox = ({ items, index, onChange, onClose }) => {
  const [slide, setSlide] = useState(0);
  const item = index === null ? null : items[index];
  const slides = item?.type === 'carousel' ? item.slides : null;

  useEffect(() => setSlide(0), [index]);

  const next = () => {
    if (slides && slide < slides.length - 1) return setSlide(slide + 1);
    onChange((index + 1) % items.length);
  };
  const prev = () => {
    if (slides && slide > 0) return setSlide(slide - 1);
    onChange((index - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  });

  const navButton = 'w-11 h-11 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center backdrop-blur transition-colors';

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex flex-col"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-white" onClick={(e) => e.stopPropagation()}>
            <div className="min-w-0">
              <p className="font-display text-2xl leading-tight truncate">{item.title}</p>
              <p className="font-mono text-[11px] text-white/50">
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                {slides && ` · slide ${slide + 1} of ${slides.length}`}
              </p>
            </div>
            <button onClick={onClose} aria-label="Close" className={navButton}>
              <HiXMark size={20} />
            </button>
          </div>

          {/* Media */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${slide}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
                    playsInline
                    loop={item.loop}
                    muted={item.loop}
                    className="max-w-full max-h-[calc(100vh-8rem)] rounded-xl bg-black"
                  />
                ) : (
                  <img
                    src={slides ? slides[slide] : item.src}
                    alt={item.title}
                    className="max-w-full max-h-[calc(100vh-8rem)] object-contain rounded-xl"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className={`${navButton} absolute left-2 sm:left-6 top-1/2 -translate-y-1/2`}>
              <HiArrowLeft size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className={`${navButton} absolute right-2 sm:right-6 top-1/2 -translate-y-1/2`}>
              <HiArrowRight size={18} />
            </button>
          </div>

          {slides && (
            <div className="flex justify-center gap-1.5 pb-6" onClick={(e) => e.stopPropagation()}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-6 bg-accent' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;
