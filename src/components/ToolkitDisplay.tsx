'use client';

import {useEffect, useState} from 'react';
import {Settings} from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiTypescript,
  SiAdobecreativecloud,
  SiJquery,
  SiMysql,
} from 'react-icons/si';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: <SiJavascript size={24} color="#ADD8E6" />,
    },
    {
      name: 'React',
      icon: <SiReact size={24} color="#ADD8E6" />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={24} color="#ADD8E6" />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={24} color="#ADD8E6" />,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={24} color="#ADD8E6" />,
    },
    {
      name: 'HTML5',
      icon: <SiHtml5 size={24} color="#ADD8E6" />,
    },
    {
      name: 'CSS3',
      icon: <SiCss3 size={24} color="#ADD8E6" />,
    },
    {
      name: 'Firebase',
      icon: <SiFirebase size={24} color="#ADD8E6" />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={24} color="#ADD8E6" />,
    },
    {
      name: 'Adobe Creative Cloud',
      icon: <SiAdobecreativecloud size={24} color="#ADD8E6" />,
    },
    {
      name: 'jQuery',
      icon: <SiJquery size={24} color="#ADD8E6" />,
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={24} color="#ADD8E6" />,
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-6 flex items-center gap-2">
          My Toolkit ⚙️
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
              >
                <div className="h-6 w-6 text-foreground">{tool.icon}</div>
                <span className="text-lg text-muted-foreground mt-2" style={{ fontFamily: 'Caveat Brush', cursive: 'true' }}>{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolkitDisplay;
