import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import data from '../data/portfolio.json';

const projectsData = data.projects;
const pad = (n) => String(n).padStart(2, '0');
const slug = (project) => project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const hasLink = (url) => url && url !== '#';

// Websites: numbered list on the left, detail card on the right.
const WebProjects = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: '-30% 0px -30% 0px' });
  const total = projectsData.length;
  const project = projectsData[active];

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive((index + total) % total);
  };
  const next = () => { setDirection(1); setActive((i) => (i + 1) % total); };
  const prev = () => { setDirection(-1); setActive((i) => (i - 1 + total) % total); };

  // Arrow keys switch projects while the section is on screen.
  useEffect(() => {
    if (!inView) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div ref={sectionRef} className="space-y-4">
      <p className="font-mono text-xs text-faint tabular-nums text-right">
        <span className="text-accent">{pad(active + 1)}</span> / {pad(total)}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

        {/* Numbered list */}
        <ol className="lg:col-span-4 flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 snap-x lg:border-t lg:border-line">
          {projectsData.map((p, i) => {
            const isActive = i === active;
            return (
              <li key={p.id} className="snap-start shrink-0 lg:shrink lg:border-b lg:border-line">
                <button
                  onClick={() => goTo(i)}
                  className={`group relative w-full text-left flex items-center gap-4 px-4 lg:px-3 py-3 lg:py-5 rounded-full lg:rounded-none border lg:border-0 transition-colors ${
                    isActive ? 'border-accent/50 bg-accent/10 lg:bg-transparent' : 'border-line'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-indicator"
                      className="hidden lg:block absolute left-0 top-3 bottom-3 w-[2px] bg-accent rounded-full"
                    />
                  )}
                  <span className={`font-mono text-xs ${isActive ? 'text-accent' : 'text-faint'}`}>{pad(i + 1)}</span>
                  <span
                    className={`font-display text-xl lg:text-3xl whitespace-nowrap transition-all ${
                      isActive ? 'text-fg italic lg:translate-x-1' : 'text-muted group-hover:text-fg'
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="hidden xl:block ml-auto label !text-[0.6rem] whitespace-nowrap">{p.category}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail card */}
        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
              className="relative rounded-[2rem] border border-line bg-card/80 overflow-hidden shadow-xl shadow-black/5 cursor-grab active:cursor-grabbing"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line group">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs text-fg border border-line">
                  {project.category}
                </span>
              </div>

              <div className="relative p-6 sm:p-10 space-y-5">
                {/* Large faded number */}
                <span className="absolute right-6 sm:right-10 top-2 font-display italic text-[7rem] sm:text-[9rem] leading-none text-fg/[0.05] select-none pointer-events-none">
                  {pad(active + 1)}
                </span>

                <p className="font-mono text-xs text-accent">/{slug(project)}</p>
                <h3 className="font-display text-4xl sm:text-5xl leading-none text-fg">{project.title}</h3>
                <p className="text-muted leading-relaxed max-w-xl">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border border-line text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-line flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button onClick={prev} aria-label="Previous project" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors">
                      <HiArrowLeft />
                    </button>
                    <button onClick={next} aria-label="Next project" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors">
                      <HiArrowRight />
                    </button>
                    <div className="hidden sm:flex items-center gap-1.5 ml-3">
                      {projectsData.map((p, i) => (
                        <button
                          key={p.id}
                          onClick={() => goTo(i)}
                          aria-label={`Show ${p.title}`}
                          className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-faint'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {hasLink(project.githubUrl) && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-line text-sm text-fg hover:border-accent/60 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {hasLink(project.liveUrl) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 h-10 px-5 rounded-full bg-fg text-bg text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
                      >
                        Live site
                        <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          <p className="mt-4 label !text-[0.6rem] text-center">Click a project · use ← → · or swipe</p>
        </div>
      </div>
    </div>
  );
};

export default WebProjects;
