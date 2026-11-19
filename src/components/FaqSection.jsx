import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import data from '../data/portfolio.json';
import SectionHeading from './ui/SectionHeading';
import Magnetic from './ui/Magnetic';

const { faq, contact, studio } = data;

const FaqSection = ({ index = '07' }) => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-16 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8">
          <SectionHeading
            index={index}
            label="FAQ"
            title="Good"
            accent="questions."
            intro="The things clients ask most before we start. Anything else? Just message us."
          />
          <Magnetic>
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${studio.name}! I have a question.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-900/20"
            >
              <FaWhatsapp size={18} /> Ask on WhatsApp
            </a>
          </Magnetic>
        </div>

        <ul className="lg:col-span-7 border-t border-line">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-display text-2xl sm:text-3xl leading-tight transition-colors ${isOpen ? 'text-accent' : 'text-fg group-hover:text-accent'}`}>
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-accent border-accent text-white rotate-45' : 'border-line text-muted group-hover:border-accent/60'
                      }`}
                    >
                      <HiPlus size={16} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FaqSection;
