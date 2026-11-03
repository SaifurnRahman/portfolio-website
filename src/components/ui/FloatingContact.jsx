import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa';
import data from '../../data/portfolio.json';

// Phone-only WhatsApp shortcut that appears once the visitor scrolls past the hero.
const FloatingContact = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const text = encodeURIComponent(`Hi ${data.studio.name}! I'd like to talk about a project.`);

  return (
    <AnimatePresence>
      {show && pathname !== '/contactSection' && (
        <motion.a
          href={`https://wa.me/${data.contact.whatsappNumber}?text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] inline-flex items-center gap-2 h-12 pl-4 pr-5 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-xl shadow-emerald-900/30 active:scale-95 transition-transform"
        >
          <FaWhatsapp size={20} />
          Chat now
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
