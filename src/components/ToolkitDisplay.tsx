'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
// import * as SiIcons from 'simple-icons-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: null,
    },
    {
      name: 'React',
      icon: null,
    },
    {
      name: 'Next.js',
      icon: null,
    },
    {
      name: 'Tailwind CSS',
      icon: null,
    },
    {
      name: 'Node.js',
      icon: null,
    },
    {
      name: 'HTML',
      icon: null,
    },
    {
      name: 'CSS',
      icon: null,
    },
    {
      name: 'Firebase',
      icon: null,
    },
    {
      name: 'TypeScript',
      icon: null,
    },
    {
      name: 'Adobe Creative Cloud',
      icon: null,
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
