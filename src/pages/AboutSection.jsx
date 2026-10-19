import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaCrown } from 'react-icons/fa';
import founderImage from '../assets/profile.webp';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import SectionHeading from '../components/ui/SectionHeading';
import LocalTime from '../components/ui/LocalTime';

const { about, studio, founder, team, services, contact } = data;
const ease = [0.22, 1, 0.36, 1];

// Renders **text** inside a paragraph as bold, using the given class.
const withBold = (text, boldClass) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={boldClass}>{part}</strong> : part
  );

const AboutSection = () => {
  const stats = [
    { value: services.length, label: 'Services' },
    { value: team.length + 1, label: 'Team members' },
    { value: data.projects.length, label: 'Featured projects' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Sticky founder card */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-4 lg:sticky lg:top-28 self-start"
        >
          <div className="rounded-[2rem] border border-line bg-card/80 overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-bg-soft to-transparent" />
              <div className="absolute inset-x-6 top-1/4 -bottom-10 rounded-full bg-accent/25 blur-3xl" />
              <img
                src={founderImage}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-contain object-bottom origin-bottom group-hover:scale-[1.03] transition-transform duration-700 [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-semibold">
                <FaCrown size={11} /> Founder
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="label !text-[0.55rem]">Founded by</p>
                <p className="mt-1 font-display text-3xl text-fg leading-none">{founder.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-line">
                <div>
                  <p className="label !text-[0.55rem]">Role</p>
                  <p className="text-sm font-semibold text-fg mt-1">{founder.role}</p>
                </div>
                <div>
                  <p className="label !text-[0.55rem]">Focus</p>
                  <p className="text-sm font-semibold text-fg mt-1">{founder.focus}</p>
                </div>
              </div>
              <p className="font-mono text-[11px] text-faint">
                {studio.location} · <LocalTime timeZone={studio.timezone} />
              </p>
              <a href={`mailto:${contact.email}`} className="block text-sm text-fg hover:text-accent break-all">
                {contact.email}
              </a>
            </div>
          </div>
        </motion.aside>

        {/* Studio story */}
        <div className="lg:col-span-8 space-y-16">
          <SectionHeading
            label={`About ${studio.name}`}
            title={about.headline.replace(/\s*\S+$/, '')}
            accent={`${about.headline.split(' ').pop()}.`}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="space-y-6"
          >
            <p className="font-display text-3xl sm:text-4xl leading-snug text-fg">
              {withBold(about.intro, 'font-normal italic text-accent')}
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {withBold(about.story, 'font-semibold text-fg')}
            </p>
          </motion.div>

          {/* Simple stats counted from the data */}
          <div className="grid grid-cols-3 border-y border-line divide-x divide-line">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 px-3 sm:px-6 text-center sm:text-left">
                <p className="font-display text-5xl sm:text-6xl text-fg leading-none">{String(stat.value).padStart(2, '0')}</p>
                <p className="mt-2 label !text-[0.6rem]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* How we work */}
          <div className="space-y-8">
            <p className="label">How we work</p>
            <ol className="relative space-y-10 pl-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-line">
              {about.highlights.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease }}
                  className="relative group"
                >
                  <span className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-bg border border-accent/60 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  </span>
                  <p className="label !text-[0.6rem]">Step {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 flex items-center gap-3 font-display text-3xl sm:text-4xl text-fg">
                    {item.title}
                    <Icon name={item.icon} className={`${item.color} opacity-80`} size={20} />
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed max-w-2xl">{item.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-line bg-card/70 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="font-display text-3xl sm:text-4xl text-fg leading-tight">
              Have an idea? <em className="text-accent">Let's talk.</em>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/team"
                className="inline-flex items-center h-12 px-6 rounded-full border border-line text-sm font-semibold text-fg hover:border-accent/60 transition-colors"
              >
                Meet the team
              </Link>
              <Link
                to="/contactSection"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-white text-sm font-semibold shadow-lg shadow-accent/25"
              >
                Get in touch
                <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
