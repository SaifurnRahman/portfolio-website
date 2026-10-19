import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-router';
import founderImage from '../assets/profile.webp';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import LocalTime from './ui/LocalTime';

const { studio, founder, socials } = data;
const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % studio.rotating.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Text */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            {studio.available && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-card/70 backdrop-blur text-xs text-fg">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                {studio.availability}
              </span>
            )}
            <span className="font-mono text-[11px] text-faint">
              {studio.label} · {studio.location} · <LocalTime timeZone={studio.timezone} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-display text-[2.9rem] leading-[1] sm:text-7xl lg:text-[4.4rem] xl:text-[5.4rem] tracking-tight text-fg"
          >
            {studio.headline}
            {/* Rotating word on its own line, sized so the longest one fits */}
            <span className="relative block h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.em
                  key={wordIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="block text-accent whitespace-nowrap"
                >
                  {studio.rotating[wordIndex]}
                </motion.em>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="text-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {studio.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-white text-sm font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
            >
              See our work
              <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full border border-line text-sm font-semibold text-fg hover:border-accent/60 transition-colors"
            >
              Meet the team
              <HiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="label">Follow</span>
            <span className="h-px w-8 bg-line" />
            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  title={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Icon name={social.icon} size={14} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Founder portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] group">
            {/* Arch frame that fades out at the bottom, so the photo melts into the page */}
            <div className="relative aspect-[4/5] rounded-t-full overflow-hidden [mask-image:linear-gradient(to_bottom,#000_62%,transparent_98%)]">
              <div className="absolute inset-0 rounded-t-full border border-line bg-gradient-to-b from-card to-bg-soft" />
              <div className="absolute inset-x-6 top-1/4 -bottom-10 rounded-full bg-accent/30 blur-3xl" />
              <img
                src={founderImage}
                alt={`${founder.name}, ${founder.role} of ${studio.name}`}
                className="absolute inset-0 w-full h-full object-contain object-bottom origin-bottom group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 sm:-left-10 bottom-[22%] px-4 py-3 rounded-2xl border border-line bg-card/95 shadow-xl"
            >
              <p className="label !text-[0.6rem]">{founder.role}</p>
              <p className="text-sm font-semibold text-fg">{founder.name}</p>
              <p className="text-xs text-accent">{founder.focus}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Keyword marquee */}
      <div className="mt-10 border-y border-line py-5 overflow-hidden select-none" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {[...studio.keywords, ...studio.keywords].map((word, i) => (
                <span key={i} className="flex items-center font-display text-3xl sm:text-4xl text-fg whitespace-nowrap">
                  <span className={i % 2 ? 'italic text-muted' : ''}>{word}</span>
                  <span className="text-accent text-xl mx-8">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
