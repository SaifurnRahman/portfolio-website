import React from 'react';
import { motion } from "framer-motion";
import sample1 from '../assets/Screenshot_1.png'
import sample2 from '../assets/Screenshot_2.png'
import sample3 from '../assets/Screenshot_3.png'
import sample4 from  '../assets/Screenshot_4.png'

const projects = [
  {
    title: "Project 1",
    image: "https://i.ibb.co.com/27DtT7qG/Screenshot-2.png", // replace with your own
    link: "http://limping-art.surge.sh/",
  },
  {
    title: "Project 2",
    image: "https://i.ibb.co.com/ymbZ8f68/Screenshot-3.png", // replace with your own
    link: "https://saifurnrahman.github.io/A-5-Saifur/",
  },
  {
    title: "Project 3",
    image: "https://i.ibb.co.com/4ZWsQ3nm/Screenshot-1.png", // replace with your own
    link: "https://english-janala-saifur.netlify.app/",
  },
  {
    title: "Project 3",
    image: "https://i.ibb.co.com/tTR9Y5Pt/Screenshot-4.png", // replace with your own
    link: "https://saifurnrahman.github.io/PH-tube/",
  }
];

const WorkSample = () => {
    return (
        <div>
            <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-violet-400 mb-12 text-center">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group bg-gradient-to-br from-violet-900 to-violet-700 shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[340px] object-cover opacity-90 group-hover:opacity-60 transition duration-300"
              />

              {/* Overlay Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="px-8 py-3 bg-white text-violet-700 font-semibold rounded-full shadow-lg text-lg flex items-center gap-2">
                    Live View
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
                      <path d="M5 12l7-7M12 5h5v5" />
                      <path d="M5 5h8v8H5z" />
                    </svg>
                  </button>
                </span>
              </motion.a>

              {/* Card Footer */}
              <div className="absolute bottom-0 left-0 w-full py-4 bg-gradient-to-t from-[#1a102a] to-transparent text-center">
                <span className="text-white font-semibold tracking-wider text-lg drop-shadow">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default WorkSample;