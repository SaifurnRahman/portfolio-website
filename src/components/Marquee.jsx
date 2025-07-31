import React from "react";

const items = [
  "Web Design",
  "App Design",
  "Graphic Design",
  "Logo Design",
  "Web-Development"
];

const Marquee = () => {
  // Repeat the items to ensure smooth looping
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-violet-500 overflow-hidden py-3">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 15s linear infinite"
        }}
      >
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-8 text-black font-bold text-xl">{item}</span>
            <span className="mx-4 text-black text-2xl font-bold">*</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;