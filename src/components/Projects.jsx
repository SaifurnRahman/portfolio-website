import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiPlay, HiSquare2Stack } from 'react-icons/hi2';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import SectionHeading from './ui/SectionHeading';
import WebProjects from './WebProjects';
import Lightbox from './ui/Lightbox';

const categories = data.work;
const countOf = (category) => (category.layout === 'web' ? data.projects.length : category.items.length);

// Short motion clips play silently on loop while they are on screen.
const LoopVideo = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '100px' });
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView]);
  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      muted
      loop
      playsInline
      preload="none"
      className="w-full h-full object-cover"
      style={{ aspectRatio: item.ratio }}
    />
  );
};

const WorkCard = ({ item, index, onOpen }) => {
  const isVideo = item.type === 'video';
  const cover = item.type === 'carousel' ? item.slides[0] : isVideo ? item.poster : item.src;

  return (
    <motion.figure
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group mb-5 break-inside-avoid rounded-[1.5rem] border border-line bg-card/70 overflow-hidden hover:border-accent/50 transition-colors"
    >
      <button onClick={onOpen} className="relative block w-full text-left cursor-zoom-in" aria-label={`Open ${item.title}`}>
        {isVideo && item.loop ? (
          <LoopVideo item={item} />
        ) : (
          <img
            src={cover}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
            style={item.ratio ? { aspectRatio: item.ratio } : undefined}
          />
        )}

        {isVideo && !item.loop && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
            <span className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 transition-transform">
              <HiPlay size={26} className="translate-x-0.5" />
            </span>
          </span>
        )}
        {item.type === 'carousel' && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] backdrop-blur">
            <HiSquare2Stack size={12} /> {item.slides.length}
          </span>
        )}
        {item.duration && (
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[11px] font-mono">{item.duration}</span>
        )}
      </button>

      <figcaption className="p-4 sm:p-5 space-y-2">
        <h3 className="font-display text-2xl leading-tight text-fg">{item.title}</h3>
        {item.description && <p className="text-sm text-muted leading-relaxed">{item.description}</p>}
        {item.tags && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full border border-line text-[11px] text-muted">{tag}</span>
            ))}
          </div>
        )}
      </figcaption>
    </motion.figure>
  );
};

const Projects = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [open, setOpen] = useState(null); // index of the item shown in the lightbox
  const category = categories.find((c) => c.id === activeId);

  const selectCategory = (id) => {
    setActiveId(id);
    setOpen(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          index="02"
          label="Selected work"
          title="Our"
          accent="work."
          intro="Websites, graphics, logos, social content, motion and video, all made by the SaifurHub team."
        />

        {/* Category tabs */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
          <div className="flex sm:flex-wrap gap-2 w-max sm:w-auto">
            {categories.map((c) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => selectCategory(c.id)}
                  className={`relative inline-flex items-center gap-2 h-11 px-4 rounded-full text-sm whitespace-nowrap border transition-colors ${
                    isActive ? 'border-transparent text-white' : 'border-line text-muted hover:text-fg hover:border-faint'
                  }`}
                >
                  {isActive && (
                    <motion.span layoutId="work-tab" className="absolute inset-0 rounded-full bg-accent" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <Icon name={c.icon} size={14} className="relative" />
                  <span className="relative">{c.title}</span>
                  <span className={`relative font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-faint'}`}>{countOf(c)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <p className="text-muted max-w-2xl">{category.intro}</p>

            {category.layout === 'web' ? (
              <WebProjects />
            ) : (
              <div className={`gap-5 ${category.columns === 2 ? 'columns-1 md:columns-2' : 'columns-1 sm:columns-2 lg:columns-3'}`}>
                {category.items.map((item, i) => (
                  <WorkCard key={item.title} item={item} index={i} onOpen={() => setOpen(i)} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {category.items && (
        <Lightbox items={category.items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
};

export default Projects;
