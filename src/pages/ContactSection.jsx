import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const email = "saifurrahman24to7@gmail.com";
  const phone = "01822690061";
  const whatsappUrl = `https://wa.me/88${phone}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');
    setTimeout(() => {
      setFormStatus('Message sent successfully! ./success');
      e.target.reset();
      setTimeout(() => setFormStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-transparent text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// LETS_TALK</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
            Have a project in mind, a job opportunity, or want to collaborate? Send a message or connect directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards (Gmail & WhatsApp) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-neutral-950/80 border border-neutral-800/90 hover:border-orange-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-500">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Gmail Address</h4>
                    <p className="text-xs text-neutral-400">Direct response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                <span className="text-xs text-orange-400 font-mono truncate mr-2">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-lg text-xs text-gray-300 transition-all shrink-0"
                >
                  {copiedEmail ? <FaCheck size={12} className="text-green-500" /> : <FaCopy size={12} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="bg-neutral-950/80 border border-neutral-800/90 hover:border-orange-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-500">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">WhatsApp / Phone</h4>
                    <p className="text-xs text-neutral-400">Available for fast chats</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                <span className="text-xs text-green-400 font-mono">{phone}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-neutral-900 border border-neutral-800 hover:border-green-500/50 rounded-lg text-xs text-gray-300 transition-all"
                  >
                    {copiedPhone ? <FaCheck size={12} className="text-green-500" /> : <FaCopy size={12} />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 hover:bg-green-500 rounded-lg text-xs text-white transition-all font-semibold"
                  >
                    Chat
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Contact Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-8 backdrop-blur-md shadow-2xl space-y-6"
            >
              <div className="flex items-center space-x-2 pb-2 border-b border-neutral-800 text-xs text-orange-500">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block animate-pulse"></span>
                <span>/* TERMINAL_MESSAGE_TRANSMISSION */</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">// Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400">// Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">// Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Collaboration / Job Offer"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">// Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-orange-400 font-mono">{formStatus}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <FaPaperPlane size={12} />
                </motion.button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;