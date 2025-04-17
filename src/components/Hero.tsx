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
    <section className="w-full flex flex-col items-center justify-center py-64 mt-48">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mx-auto">
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="relative text-4xl font-bold text-[#9BC7F3]" style={{ fontFamily: 'Caveat Brush', cursive: 'true' }} ref={textRef}>
              Hello! I'm Martin. 👋
              <span
                className="absolute bottom-0 left-0 h-3 rounded-full -z-10"
                style={{
                  paddingBottom: '0.25rem',
                  width: `${textWidth}px`,
                  backgroundColor: 'rgba(155, 199, 243, 0.3)',
                }}
              />
            </h1>
            <p className="text-lg mt-2 text-foreground text-muted-foreground text-center sm:text-left" style={{ fontFamily: 'Inter', color: 'grey' }}>
              A front-end engineer with an education background, curious mind,
              and a passion for crafting thoughtful, intuitive web experiences. ✨
            </p>
          </div>
          <div className="sm:w-1/2 flex justify-end">
            <Image
              src="https://picsum.photos/300/300"
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover shadow-md"
              width={300}
              height={300}
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
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
