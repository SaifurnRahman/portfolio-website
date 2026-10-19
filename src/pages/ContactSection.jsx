import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import data from '../data/portfolio.json';
import SectionHeading from '../components/ui/SectionHeading';
import LocalTime from '../components/ui/LocalTime';

const ease = [0.22, 1, 0.36, 1];
const inputClass =
  'peer w-full bg-transparent border-0 border-b border-line focus:border-accent px-0 pt-6 pb-2 text-fg placeholder-transparent outline-none transition-colors';
const labelClass =
  'absolute left-0 top-0 text-xs text-faint transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent';

const ContactCard = ({ icon, title, note, value, href, onCopy, copied, action }) => (
  <div className="group rounded-2xl border border-line bg-card/70 p-5 sm:p-6 hover:border-accent/50 transition-colors">
    <div className="flex items-start gap-4">
      <span className="w-11 h-11 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="label !text-[0.6rem]">{title}</p>
        <a href={href} className="block mt-1 text-fg font-semibold hover:text-accent truncate">{value}</a>
        <p className="text-xs text-muted mt-1">{note}</p>
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      <button
        onClick={onCopy}
        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-line text-xs text-muted hover:text-fg hover:border-faint transition-colors"
      >
        {copied ? <FaCheck size={10} className="text-emerald-500" /> : <FaCopy size={10} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      {action}
    </div>
  </div>
);

const ContactSection = () => {
  const [copied, setCopied] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const { email, phone, whatsappNumber, intro } = data.contact;
  const { studio } = data;
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const copy = (key, value) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(''), 2500);
  };

  // A static site can't send WhatsApp messages by itself, so this opens WhatsApp
  // (app or web) with the message already written; the visitor just taps Send.
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const text = [
      `Hi ${studio.name}! 👋`,
      '',
      `*Name:* ${form.get('name')}`,
      `*Email:* ${form.get('email')}`,
      `*Subject:* ${form.get('subject')}`,
      '',
      form.get('message'),
    ].join('\n');

    window.open(`${whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setFormStatus('WhatsApp opened. Press send there to deliver your message.');
    e.target.reset();
    setTimeout(() => setFormStatus(''), 8000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading label="Contact" title="Let's work" accent="together." intro={intro} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5 space-y-4"
          >
            <ContactCard
              icon={<FaEnvelope size={16} />}
              title="Email"
              note="We reply within 24 hours"
              value={email}
              href={`mailto:${email}`}
              onCopy={() => copy('email', email)}
              copied={copied === 'email'}
            />
            <ContactCard
              icon={<FaWhatsapp size={18} />}
              title="WhatsApp / Phone"
              note="Available for quick chats"
              value={phone}
              href={`tel:${phone}`}
              onCopy={() => copy('phone', phone)}
              copied={copied === 'phone'}
              action={
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-semibold transition-colors"
                >
                  Chat <HiArrowUpRight size={12} />
                </a>
              }
            />
            <div className="rounded-2xl border border-dashed border-line p-5 sm:p-6 flex items-center justify-between gap-4">
              <div>
                <p className="label !text-[0.6rem]">Based in</p>
                <p className="mt-1 text-fg font-semibold">{studio.location}</p>
              </div>
              <div className="text-right">
                <p className="label !text-[0.6rem]">Local time</p>
                <LocalTime timeZone={studio.timezone} className="mt-1 block font-mono text-sm text-accent" />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-[2rem] border border-line bg-card/80 p-6 sm:p-10 space-y-8"
          >
            <p className="font-display text-3xl text-fg">Start a <em className="text-accent">project</em></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative">
                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                <label htmlFor="name" className={labelClass}>Your name</label>
              </div>
              <div className="relative">
                <input id="email" name="email" type="email" required placeholder="Email address" className={inputClass} />
                <label htmlFor="email" className={labelClass}>Email address</label>
              </div>
            </div>
            <div className="relative">
              <input id="subject" name="subject" type="text" required placeholder="Subject" className={inputClass} />
              <label htmlFor="subject" className={labelClass}>Subject: website, design, video, motion…</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={4} required placeholder="Message" className={`${inputClass} resize-none`} />
              <label htmlFor="message" className={labelClass}>Tell us about your project…</label>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm text-accent max-w-xs" aria-live="polite">
                {formStatus || <span className="text-faint text-xs">Your message opens in WhatsApp, ready to send.</span>}
              </span>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent text-white text-sm font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
              >
                <FaWhatsapp size={16} />
                Send message
                <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
