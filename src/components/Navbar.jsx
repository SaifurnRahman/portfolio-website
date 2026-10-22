import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import ThemeToggle from './ui/ThemeToggle';
import logoIcon from '../assets/saifurhub-icon.webp';
import LocalTime from './ui/LocalTime';

const { studio, navLinks, socials, contact } = data;

// Route links ("/aboutSection") go through the router; hash links ("/#projects") are plain anchors.
export const NavLink = ({ href, children, ...props }) =>
  href.includes('#') ? <a href={href} {...props}>{children}</a> : <Link to={href} {...props}>{children}</Link>;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape while the menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/75 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img
              src={logoIcon}
              alt=""
              width="36"
              height="36"
              className="w-9 h-9 rounded-[10px] group-hover:rotate-[-8deg] transition-transform"
            />
            <span className="font-display text-2xl tracking-tight text-fg">
              {studio.brandName}<em className="text-accent">{studio.brandSuffix}</em>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-fg transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/contactSection"
              className="hidden sm:inline-flex items-center px-5 h-10 rounded-full bg-fg text-bg text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Let's talk
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center gap-2 px-4 h-10 rounded-full border border-line text-sm text-fg hover:border-accent/60 transition-colors"
            >
              <span>{isOpen ? 'Close' : 'Menu'}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-lg leading-none">+</motion.span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen menu (mobile / tablet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg pt-24 pb-8 px-6 sm:px-10 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                >
                  <NavLink
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 py-2 border-b border-line"
                  >
                    <span className="font-mono text-xs text-faint group-hover:text-accent">0{index + 1}</span>
                    <span className="font-display text-5xl sm:text-6xl text-fg group-hover:italic group-hover:text-accent transition-all">
                      {link.name}
                    </span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm"
            >
              <div className="space-y-2">
                <p className="label">Say hello</p>
                <a href={`mailto:${contact.email}`} className="text-fg hover:text-accent break-all">{contact.email}</a>
                <p className="text-muted">
                  {studio.location} · <LocalTime timeZone={studio.timezone} />
                </p>
              </div>
              <div className="space-y-2">
                <p className="label">Socials</p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      title={s.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors"
                    >
                      <Icon name={s.icon} size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
