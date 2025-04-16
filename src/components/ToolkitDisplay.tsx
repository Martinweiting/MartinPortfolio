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
} from 'react-icons/si';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: <SiJavascript size={24} />,
    },
    {
      name: 'React',
      icon: <SiReact size={24} />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={24} />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={24} />,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={24} />,
    },
    {
      name: 'HTML',
      icon: <SiHtml5 size={24} />,
    },
    {
      name: 'CSS',
      icon: <SiCss3 size={24} />,
    },
    {
      name: 'Firebase',
      icon: <SiFirebase size={24} />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={24} />,
    },
    {
      name: 'Adobe Creative Cloud',
      icon: <SiAdobecreativecloud size={24} />,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6 flex items-center gap-2">
        My Toolkit
        <Settings className="h-6 w-6 text-muted-foreground"/>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
            >
              {tool.icon && <div className="h-6 w-6 text-foreground">{tool.icon}</div>}
              <span className="text-lg text-foreground mt-2">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
