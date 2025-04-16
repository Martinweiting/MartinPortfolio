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
} from 'simple-icons-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      name: 'HTML',
      icon: SiHtml5,
    },
    {
      name: 'CSS',
      icon: SiCss3,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'Adobe Creative Cloud',
      icon: SiAdobecreativecloud,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6 flex items-center gap-2">
        My Toolkit
        <Settings className="h-6 w-6 text-muted-foreground" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
          >
            {tool.icon && (
              React.createElement(tool.icon, {
                style: {width: '2em', height: '2em', verticalAlign: 'middle'},
              })
            )}
            <span className="text-lg text-foreground mt-2">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
