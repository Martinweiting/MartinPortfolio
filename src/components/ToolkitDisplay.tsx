'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
import * as SiIcons from 'simple-icons-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: SiIcons.SiJavascript ? <SiIcons.SiJavascript className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'React',
      icon: SiIcons.SiReact ? <SiIcons.SiReact className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'Next.js',
      icon: SiIcons.SiNextdotjs ? <SiIcons.SiNextdotjs className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'Tailwind CSS',
      icon: SiIcons.SiTailwindcss ? <SiIcons.SiTailwindcss className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'Node.js',
      icon: SiIcons.SiNodedotjs ? <SiIcons.SiNodedotjs className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'HTML',
      icon: SiIcons.SiHtml5 ? <SiIcons.SiHtml5 className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'CSS',
      icon: SiIcons.SiCss3 ? <SiIcons.SiCss3 className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'Firebase',
      icon: SiIcons.SiFirebase ? <SiIcons.SiFirebase className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'TypeScript',
      icon: SiIcons.SiTypescript ? <SiIcons.SiTypescript className="h-6 w-6 text-primary" /> : null,
    },
    {
      name: 'Adobe Creative Cloud',
      icon: SiIcons.SiAdobecreativecloud ? <SiIcons.SiAdobecreativecloud className="h-6 w-6 text-primary" /> : null,
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
            {tool.icon}
            <span className="text-lg text-foreground mt-2">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
