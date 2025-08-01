import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const tools = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-3xl text-blue-400" />,
    percent: 95,
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator className="text-3xl text-yellow-500" />,
    percent: 90,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-3xl text-orange-500" />,
    percent: 98,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-3xl text-blue-500" />,
    percent: 96,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
    percent: 94,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-3xl text-yellow-400" />,
    percent: 92,
  },
  {
    name: "React",
    icon: <SiReact className="text-3xl text-cyan-300" />,
    percent: 90,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ToolCard = ({ icon, name, percent }) => (
  <motion.div
    variants={card}
    className="bg-[#18181b] rounded-2xl p-5 flex flex-col justify-between shadow-lg relative min-w-[150px]"
  >
    {/* Percent badge */}
    <span className="absolute top-3 right-3 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
      <CountUp end={percent} duration={1.5} />%
    </span>
    {/* Icon and name */}
    <div className="flex items-center space-x-4 mb-6">
      <span>{icon}</span>
      <span className="text-white text-lg font-medium">{name}</span>
    </div>
    {/* Progress bar */}
    <div className="w-full h-2 bg-[#232329] rounded-full">
      <div
        className="h-2 bg-violet-500 rounded-full transition-all duration-700"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </motion.div>
);

const FavoriteTools = () => (
  <section className="w-full bg-black py-12 px-4">
    {/* Section Title */}
    <div className="text-center mb-10">
      <div className="inline-block px-4 py-1 border-2 border-violet-500 rounded-md text-white text-sm mb-3">
        My Favorite Tools
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-violet-500 mb-1">
        Exploring the Tools
      </h2>
      <h3 className="text-xl md:text-3xl font-semibold text-white">
        Behind My Designs
      </h3>
    </div>
    {/* Tools Grid with Motion */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {tools.map((tool) => (
        <ToolCard key={tool.name} {...tool} />
      ))}
    </motion.div>
  </section>
);

export default FavoriteTools;