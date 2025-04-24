'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation once when 30% is visible

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly down
    visible: { opacity: 1, y: 0 },   // Fade in and slide up to original position
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      className="w-full py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-6">About Me 📖</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="/images/4.jpg"
            alt="About Me"
            className={`rounded-lg shadow-md w-full md:w-1/4 h-[300px] object-cover transition-transform duration-300 ${ // Adjusted width for responsiveness
              isHovered ? 'scale-105' : ''
            }`}
            width={400}
            height={300}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className="text-lg text-foreground text-center md:text-left w-full md:w-2/3 flex flex-col gap-4"> 
          {/* //Adjusted width for responsiveness */}
            <p className="text-muted-foreground">Hello again! Thanks for scrolling this far! I enjoy working with React, Node.js, and experimenting with LLM prompt engineering to create smarter interactions.</p>
            <p className="text-muted-foreground">Outside of coding, I spend time exploring AI concepts and browsing GitHub for projects that can be applied to daily life — anything that can make life a little easier or more efficient.</p>
            <p className="text-muted-foreground">I'm currently seeking new opportunities — feel free to reach out if you're interested in working together!</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
