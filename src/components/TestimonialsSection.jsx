import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Startup Founder",
    content: "Saifur delivered an exceptional e-commerce platform for us. His attention to design detail, clean code structure, and lightning-fast responsiveness blew our team away.",
    rating: 5,
    project: "Shosta Shodai E-Commerce"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "Working with Saifur on our brand identity and custom logo system was seamless. He blends creative design intuition with professional execution effortlessly.",
    rating: 5,
    project: "Brand & Logo System"
  },
  {
    id: 3,
    name: "David K.",
    role: "Product Manager",
    content: "Absolute professional on Upwork! Completed our web app project ahead of schedule with top-tier React architecture and beautiful Tailwind styling.",
    rating: 5,
    project: "SaaS Analytics Dashboard"
  },
  {
    id: 4,
    name: "new_brute",
    role: "HR",
    content: "Saif is a total gentleman and works really hard. I am very busy and takes a long time for me to make decisions. He was fine with that and extending his delivery date for me, always quick with his adjustments and patient with my thinking time. He also took time to explain to me how I could adjust colors etc myself with Adobe, which meant I didn’t have to have him find the perfect colour combination, I can try those myself! :) I’ll work with him again. He was great FIVE STARS all round.",
    rating: 5,
    project: "Marchendise product"
  },
  {
    id: 5,
    name: "ctcreativemedia.",
    role: "Executive Manager",
    content: "Excellent work by Saif! He was patient with me and stayed in constant communication which is super important to me when I hire someone. He has an eye for creativity that can't be found just anywhere. I went with the highest tier he offers and it was worth it. Will work with again!.",
    rating: 5,
    project: "Poster"
  }
];
const testimonials = [
  {
    user: "new_brute",
    country: "Japan",
    avatar: "N",
    review: "Saif is a total gentleman and works really hard. I am very busy and takes a long time for me to make decisions. He was fine with that and extending his delivery date for me, always quick with his adjustments and patient with my thinking time. He also took time to explain to me how I could adjust colors etc myself with Adobe, which meant I didn’t have to have him find the perfect colour combination, I can try those myself! :) I’ll work with him again. He was great FIVE STARS all round.",
    stars: 5,
    time: "1 month ago"
  },
  {
    user: "ctcreativemedia",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Excellent work by Saif! He was patient with me and stayed in constant communication which is super important to me when I hire someone. He has an eye for creativity that can't be found just anywhere. I went with the highest tier he offers and it was worth it. Will work with again!",
    stars: 5,
    time: "6 days ago"
  },
  {
    user: "massimilliano500",
    country: "Italy",
    avatar: "M",
    review: "A serious and professional designer. I'm very satisfied with the work delivered and will definitely entrust him with more projects in the future. Highly recommended.",
    stars: 5,
    time: "1 month ago"
  },
  {
    user: "thatmexicancat",
    country: "United States",
    avatar: "T",
    review: "Quick turnaround and understood exactly what I was asking for and delivered! I would highly recommend Saif ur Rahman for his talent and professionalism.",
    stars: 5,
    time: "1 month ago"
  },
  {
    user: "mariahkrystynaa",
    country: "Canada",
    avatar: "M",
    review: "Thank you so much! Projected was extended due to MY end but otherwise this artist was fast and reliable!!",
    stars: 5,
    time: "1 month ago"
  },
  {
    user: "steffbell",
    country: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    review: "Very easy to work with, understood what I wanted and delivered exactly what was discussed! Great designer, I would definitely recommend and use his services again in the future!",
    stars: 5,
    time: "5 months ago"
  },
  {
    user: "coolspiky",
    country: "Germany",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    review: "Fantastic work and fast delivery! We will definitely use him for our next logo design job as well. His understanding and communication were quick and problem-free. Throughout the entire process, he listened to our ideas and provided valuable feedback that truly improved our design.",
    stars: 5,
    time: "5 months ago"
  },
  {
    user: "keithmuise",
    country: "Canada",
    avatar: "K",
    review: "I was very pleased to get my order quickly and it was exactly what I asked for. Totally recommend him and will definitely be utilizing his talent and skills again.",
    stars: 5,
    time: "6 months ago"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide circulating every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // 3D Flipping variants
  const flipVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative bg-transparent text-gray-100 py-24 px-4 sm:px-6 lg:px-8 font-mono overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-orange-500 tracking-widest">
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
            <span>// CLIENT_FEEDBACK</span>
            <span className="w-3 h-0.5 bg-orange-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Clients</span>
          </h2>
        </div>

        {/* Circulating Flipping Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center perspective-[1000px]">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative space-y-6"
            >
              {/* Top Row: Quote Icon & Stars */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-500">
                  <FaQuoteLeft size={20} />
                </div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              {/* Feedback Content */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                "{current.content}"
              </p>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold text-base">{current.name}</h4>
                  <p className="text-xs text-neutral-400">{current.role}</p>
                </div>
                <span className="text-xs px-3 py-1 bg-neutral-900 border border-neutral-800 text-orange-400 rounded-lg">
                  // {current.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controls: Manual Next / Prev & Indicators */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 transition-all"
              title="Previous feedback"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 transition-all"
              title="Next feedback"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;