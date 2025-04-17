'use client';

import { useState } from 'react';

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://picsum.photos/500/400"
            alt="About Me"
            className={`rounded-lg shadow-md w-1/4 h-[300px] object-cover transition-transform duration-300 ${
              isHovered ? 'scale-105' : ''
            }`}
            width={400}
            height={300}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className="text-lg text-foreground text-center md:text-left w-2/3 flex flex-col gap-4">
            <p className="text-muted-foreground">Hello again! Thanks for scrolling this far! I enjoy working with React, Node.js, and experimenting with LLM prompt engineering to create smarter interactions.</p>
            <p className="text-muted-foreground">Outside of coding, I spend time exploring AI concepts and browsing GitHub for projects that can be applied to daily life — anything that can make life a little easier or more efficient.</p>
            <p className="text-muted-foreground">I'm currently seeking new opportunities — feel free to reach out if you're interested in working together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
