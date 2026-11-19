import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowUpRight } from 'react-icons/hi2';
import data from '../data/portfolio.json';
import SectionHeading from './ui/SectionHeading';
import Magnetic from './ui/Magnetic';

const { pricing, studio, contact } = data;

const whatsappFor = (plan) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${studio.name}! I'm interested in the ${plan.name} package ($${plan.price}). Can we talk?`
  )}`;

const PricingSection = ({ index = '05' }) => {
  return (
    <section id="pricing" className="relative py-16 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          index={index}
          label="Packages"
          title="Simple"
          accent="pricing."
          intro={pricing.note}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {pricing.plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-[2rem] border p-7 sm:p-8 ${
                plan.popular
                  ? 'border-accent bg-gradient-to-b from-accent/15 to-card shadow-2xl shadow-accent/15 md:-translate-y-3'
                  : 'border-line bg-card/70'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold shadow-lg shadow-accent/30">
                  Most popular
                </span>
              )}

              <div className="space-y-2">
                <p className="label">{String(i + 1).padStart(2, '0')} · {plan.name}</p>
                <p className="text-sm text-muted">{plan.tagline}</p>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl leading-none text-fg">${plan.price.toLocaleString('en-US')}</span>
                <span className="pb-1 text-sm text-muted">{plan.period}</span>
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-fg">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <HiCheck size={12} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Magnetic className="mt-8 w-full">
                <a
                  href={whatsappFor(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'border border-line text-fg hover:border-accent hover:text-accent'
                  }`}
                >
                  {plan.cta}
                  <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-faint">
          Prices in {pricing.currency}. Need something custom? <a href="/contactSection" className="text-accent hover:underline">Tell us about your project</a>.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
