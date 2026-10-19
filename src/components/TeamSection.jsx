import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { HiArrowRight } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi2';
import { FaCrown } from 'react-icons/fa';
import founderImage from '../assets/profile.webp';
import data from '../data/portfolio.json';
import { Icon } from '../data/icons';
import SectionHeading from './ui/SectionHeading';

const { founder, team, socials } = data;
const ease = [0.22, 1, 0.36, 1];

// Profile picture for a team member: their photo if "image" is set in
// portfolio.json, otherwise a person icon. A badge shows their role icon.
const MemberAvatar = ({ member }) => (
  <div className="relative w-28 h-28 sm:w-32 sm:h-32">
    <div className="absolute -inset-3 rounded-full bg-accent/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
    <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-accent to-accent-2">
      <div className="w-full h-full rounded-full bg-bg-soft overflow-hidden flex items-end justify-center">
        {member.image ? (
          <img src={member.image} alt={member.name || member.role} className="w-full h-full object-cover" />
        ) : (
          <HiUser className="w-[78%] h-[78%] text-faint/70 translate-y-[12%]" aria-hidden="true" />
        )}
      </div>
    </div>
    <span
      className="absolute -bottom-1 -right-1 w-11 h-11 rounded-full bg-accent text-white border-4 border-card flex items-center justify-center shadow-lg shadow-accent/30 group-hover:rotate-[-12deg] transition-transform duration-500"
      title={member.role}
    >
      <Icon name={member.icon} size={15} />
    </span>
  </div>
);

const TeamSection = ({ index = '05', showPageLink = false }) => {
  return (
    <section id="team" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            index={index}
            label="The team"
            title="People behind"
            accent="the work."
            intro="A founder who designs and codes, and specialists for video, interfaces and motion."
          />
          {showPageLink && (
            <Link
              to="/team"
              className="group shrink-0 inline-flex items-center gap-2 h-11 px-5 rounded-full border border-line text-sm font-semibold text-fg hover:border-accent/60 transition-colors self-start sm:self-auto"
            >
              Meet the team
              <HiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Founder spotlight */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="relative grid grid-cols-1 md:grid-cols-12 rounded-[2rem] border border-accent/40 bg-card/80 overflow-hidden group"
        >
          <div className="md:col-span-5 relative aspect-[5/4] md:aspect-auto md:min-h-[380px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-soft to-transparent" />
            <div className="absolute inset-x-10 top-1/4 -bottom-10 rounded-full bg-accent/30 blur-3xl" />
            <img
              src={founderImage}
              alt={founder.name}
              className="absolute inset-0 w-full h-full object-contain object-bottom origin-bottom group-hover:scale-[1.03] transition-transform duration-700 [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]"
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-semibold shadow-lg shadow-accent/30">
              <FaCrown size={11} /> {founder.role}
            </span>
          </div>

          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center gap-5">
            <div>
              <p className="label !text-[0.6rem]">Leads the studio</p>
              <h3 className="mt-2 font-display text-5xl sm:text-6xl leading-none text-fg">{founder.name}</h3>
              <p className="mt-3 text-sm text-accent font-semibold">{founder.role} · {founder.focus}</p>
            </div>
            <p className="text-muted leading-relaxed max-w-xl">{founder.bio}</p>
            <div className="flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border border-line text-xs text-muted">{skill}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  title={s.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition-colors"
                >
                  <Icon name={s.icon} size={13} />
                </a>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Team member profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.article
              key={member.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group rounded-[1.75rem] border border-line bg-card/70 overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-[border-color,transform] duration-300"
            >
              {/* Profile header */}
              <div className="relative h-44 flex items-center justify-center bg-gradient-to-b from-bg-soft to-transparent">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: 'radial-gradient(var(--line) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to bottom, #000, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent)',
                  }}
                />
                <MemberAvatar member={member} />
              </div>

              <div className="px-6 pb-7 pt-2 text-center space-y-3">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-fg">{member.role}</h3>
                  <p className="label !text-[0.6rem] mt-1">{member.name || 'Team member'}</p>
                </div>
                <p className="text-sm text-muted leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  {member.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-line text-xs text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
