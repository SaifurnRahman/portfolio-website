import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowUp, HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import { NavLink } from './Navbar';
import LocalTime from './ui/LocalTime';

const { studio, contact, socials, navLinks } = data;

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-line bg-bg-soft/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 space-y-16">

        {/* Closing call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <h2 className="font-display text-5xl sm:text-7xl leading-[0.95] tracking-tight text-fg max-w-3xl">
            Let's build something <em className="text-accent">worth remembering.</em>
          </h2>
          <Link
            to="/contactSection"
            className="group shrink-0 inline-flex items-center gap-3 h-14 px-7 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/25 self-start lg:self-auto"
          >
            Start a project
            <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-10 border-t border-line">
          <div className="lg:col-span-5 space-y-3">
            <p className="font-display text-3xl text-fg">{studio.name}</p>
            <p className="text-sm text-muted leading-relaxed max-w-sm">{studio.footerBio}</p>
            <a href={`mailto:${contact.email}`} className="inline-block text-sm text-fg hover:text-accent break-all">
              {contact.email}
            </a>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="label">Navigation</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <NavLink href={link.href} className="group inline-flex items-baseline gap-2 text-muted hover:text-fg transition-colors">
                    <span className="font-mono text-[10px] text-faint group-hover:text-accent">0{i + 1}</span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="label">Connect</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  title={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors"
                >
                  <Icon name={social.icon} size={14} />
                </a>
              ))}
            </div>
            <p className="text-xs text-faint font-mono">
              {studio.location} · <LocalTime timeZone={studio.timezone} />
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-faint">
          <p>© {new Date().getFullYear()} {studio.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 h-9 rounded-full border border-line text-muted hover:text-accent hover:border-accent/60 transition-colors"
          >
            Back to top
            <HiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
