'use client';

import {motion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [textRef.current]);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-64 pb-48 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly down
        animate={{ opacity: 1, y: 0 }}   // Final state: fully visible and at original position
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mx-auto">
          <div className="text-center sm:text-left sm:w-1/2">
          <h1 className="text-5xl font-bold" style={{ fontFamily: 'Caveat Brush' }}>
  <span className="relative inline-block text-[#9BC7F3]">
    <span className="relative z-10">Hello! I'm Martin. 👋</span>
    <span className="absolute left-0 bottom-0 w-full h-3 bg-[#9BC7F3]/30 rounded-full -z-10" />
  </span>
</h1>
            <p className="text-lg mt-2 text-foreground text-muted-foreground text-center sm:text-left" style={{  color: 'grey' }}>
            Currently enjoying building intuitive web experiences and exploring new ideas in tech. Open to opportunities across the industry — always excited to build things that matter. ✨
            </p>
          </div>
          <div className="sm:w-1/2 flex justify-end">
            <Image
              src="/images/5.jpg"
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover shadow-md"
              width={500}
              height={500}
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </motion.div>
      {showScrollIndicator && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse'}}
          className="mt-48 text-primary"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
