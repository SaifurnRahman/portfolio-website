import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Graphic Design",
    desc: "Every single project is a challenge that we accept eagerly. Let’s implement innovative ideas together!",
  },
  {
    title: "Web Design",
    desc: "Every single project is a challenge that we accept eagerly. Let’s implement innovative ideas together!",
  },
  {
    title: "Web Development",
    desc: "Every single project is a challenge that we accept eagerly. Let’s implement innovative ideas together!",
  },
  {
    title: "Logo Design",
    desc: "Every single project is a challenge that we accept eagerly. Let’s implement innovative ideas together!",
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

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } },
};

const ServicesSection = () => (
  <section className="w-full bg-black py-16 px-4 ">
    <div className="text-center mb-10">
      <div className="flex justify-center mb-2">
        
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Services</h2>
      <div className="uppercase tracking-widest text-sm font-semibold text-violet-400">
        Recognitions & Accomplishments
      </div>
    </div>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          variants={card}
          className="bg-black border border-violet-500 rounded-md p-7 text-left shadow-lg hover:bg-violet-500"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300 text-base">{service.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ServicesSection;