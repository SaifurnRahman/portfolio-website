import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

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

const MAX_REVIEW_LENGTH = 200; // Adjust as needed

const TestimonialCard = ({ t }) => {
  const [showMore, setShowMore] = useState(false);
  const isLong = t.review.length > MAX_REVIEW_LENGTH;
  const reviewText = showMore ? t.review : t.review.slice(0, MAX_REVIEW_LENGTH);

  return (
    <div className="bg-[#18181b] border border-violet-500 rounded-2xl shadow-lg p-6 min-w-[320px] max-w-[400px] mx-4 flex-shrink-0 flex flex-col justify-between h-[310px]">
      {/* Header */}
      <div className="flex items-center ">
        {typeof t.avatar === "string" && t.avatar.startsWith("http") ? (
          <img src={t.avatar} alt={t.user} className="w-10 h-10 rounded-full object-cover mr-3" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-black font-bold text-xl mr-3">
            {t.avatar}
          </div>
        )}
        <div>
          <div className="text-white font-semibold">{t.user}</div>
          <div className="text-xs text-gray-400">{t.country}</div>
        </div>
      </div>
      <hr className="border-violet-800 " />
      {/* Stars and time */}
      <div className="flex items-center text-violet-500  min-h-[32px]">
        {Array.from({ length: t.stars }).map((_, i) => (
          <FaStar key={i} className="inline-block mr-1" />
        ))}
        <span className="text-white ml-2 text-sm font-medium">{t.stars}</span>
        <span className="text-gray-400 ml-4 text-xs">{t.time}</span>
      </div>
      {/* Review */}
      <div className="text-gray-200 text-sm flex-1 min-h-[110px] max-h-[110px] overflow-hidden relative">
        {reviewText}
        {!showMore && isLong && (
          <span>
            ...{" "}
            <button
              className="text-violet-400 underline text-xs"
              onClick={() => setShowMore(true)}
            >
              See more
            </button>
          </span>
        )}
        {showMore && isLong && (
          <button
            className="text-violet-400 underline text-xs ml-2"
            onClick={() => setShowMore(false)}
          >
            See less
          </button>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="w-full bg-black py-16 px-4">
    <div className="text-center mb-10">
      <div className="inline-block px-4 py-1 border-2 border-violet-500 rounded-md text-white text-sm mb-3">
        Client Testimonials
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">
        What My <span className="text-violet-500">Clients Are Saying</span>
      </h2>
    </div>
    {/* Carousel */}
    <div className="relative overflow-x-hidden">
      <div
        className="flex items-stretch"
        style={{
          animation: "slide 20s linear infinite"
        }}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <TestimonialCard t={t} key={idx} />
        ))}
      </div>
    </div>
  </section>
);


export default TestimonialsSection;