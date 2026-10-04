import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Startup Founder",
    content: "Saifur delivered an exceptional e-commerce platform for us. Attention to detail is top-tier.",
    project: "Shosta Shodai E-Commerce"
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "Working on our brand identity and custom logo system was completely seamless. Amazing work!",
    project: "Brand & Logo System"
  },
  {
    name: "David K.",
    role: "Product Manager",
    content: "Completed our web app project ahead of schedule with gorgeous React and Tailwind architecture.",
    project: "SaaS Analytics Dashboard"
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    content: "Clean code structure, phenomenal UI responsiveness, and highly professional delivery.",
    project: "Portfolio & Terminal UI"
  }
];

const Marquee = () => {
  // State to control speed on hover
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  return (
    <section className="relative bg-transparent text-gray-100 py-24 overflow-hidden font-mono">
      
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// CLIENT_FEEDBACK_MARQUEE</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Circulating <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Feedback</span>
          </h2>
          <p className="text-xs text-neutral-400">Hover over the cards to accelerate the stream speed!</p>
        </div>

        {/* Circulating Marquee Track */}
        <div 
          className="relative w-full overflow-hidden flex py-4 cursor-pointer mask-gradient"
          onMouseEnter={() => setSpeedMultiplier(3)} // Speeds up on hover
          onMouseLeave={() => setSpeedMultiplier(1)} // Normal speed on leave
        >
          {/* Dual motion track for seamless infinite loop loop */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25 / speedMultiplier, // Dynamic speed adjustment
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 shrink-0 items-center pr-6"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[350px] sm:w-[400px] bg-neutral-950/80 border border-neutral-800/90 hover:border-orange-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-4 shrink-0 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-500">
                    <FaQuoteLeft size={16} />
                  </div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.content}"
                </p>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="text-white font-bold">{item.name}</h4>
                    <p className="text-[11px] text-neutral-400">{item.role}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-orange-400 rounded-md text-[10px]">
                    // {item.project}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Marquee;