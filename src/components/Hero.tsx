'use client';

import {motion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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

  return (
    <section className="w-full flex flex-col items-center justify-center py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mx-auto">
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-4xl font-bold text-[#9BC7F3]">
              Hello! I'm Martin. 👋
            </h1>
            <p className="text-lg mt-2 text-foreground text-muted-foreground text-center sm:text-left">
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
          className="mt-12 text-primary"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
