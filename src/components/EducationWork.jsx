import React from 'react';
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const education = [
  {
    year: "2024 - Present",
    title: "Southeast University",
    desc: "B.Sc in CSE",
  },
  {
    year: "2019 - 2023",
    title: "Feni Polytechnic Institute",
    desc: "Diploma Engineering",
  },
  {
    year: "2019",
    title: "T.I.M.A. High School",
    desc: "S.S.C",
  },
];

const work = [
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    desc: "Marketplace (Upwork)",
  },
  {
    year: "2022 - Present",
    title: "Designer",
    desc: "Marketplace (Fiverr, Upwork)",
  },
  {
    year: "2021 - 2022",
    title: "Graphics Studio",
    desc: "Designer",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const eduCard = {
  hidden: { opacity: 0, x: -60 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" },
  }),
};

const workCard = {
  hidden: { opacity: 0, x: 60 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" },
  }),
};

const EducationWork = () => {
    return (
        <div>
             <section className="w-full py-16 px-4 bg-black">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-2">
          <span className="text-violet-500 text-xl mr-2">—</span>
          <span className="text-violet-500 font-semibold">Education & Work</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-violet-500 italic font-normal">Academic and</span>
          <span className="text-violet-500 italic font-normal"> Professional</span> <span className="font-bold">Journey</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Education */}
        <div className="bg-[#18181b] rounded-2xl p-6 shadow border border-violet-500">
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-violet-500 text-2xl mr-3" />
            <span className="text-xl font-bold text-white">Education</span>
          </div>
          <div>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.title}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={eduCard}
                className="mb-6 last:mb-0"
              >
                <div className="text-violet-400 text-sm mb-1">{edu.year}</div>
                <div className="text-lg font-bold text-white">{edu.title}</div>
                <div className="text-gray-400 text-sm">{edu.desc}</div>
                {idx !== education.length - 1 && (
                  <hr className="my-4 border-violet-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Work */}
        <div className="bg-[#18181b] rounded-2xl p-6 shadow border border-violet-500">
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-violet-500 text-2xl mr-3" />
            <span className="text-xl font-bold text-white">Work Experience</span>
          </div>
          <div>
            {work.map((job, idx) => (
              <motion.div
                key={job.title}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={workCard}
                className="mb-6 last:mb-0"
              >
                <div className="text-violet-400 text-sm mb-1">{job.year}</div>
                <div className="text-lg font-bold text-white">{job.title}</div>
                <div className="text-gray-400 text-sm">{job.desc}</div>
                {idx !== work.length - 1 && (
                  <hr className="my-4 border-violet-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default EducationWork;