'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
import * as SiIcons from 'simple-icons-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: 'javascript',
    },
    {
      name: 'React',
      icon: 'react',
    },
    {
      name: 'Next.js',
      icon: 'nextdotjs',
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwindcss',
    },
    {
      name: 'Node.js',
      icon: 'nodedotjs',
    },
    {
      name: 'HTML',
      icon: 'html5',
    },
    {
      name: 'CSS',
      icon: 'css3',
    },
    {
      name: 'Firebase',
      icon: 'firebase',
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
    },
    {
      name: 'Adobe Creative Cloud',
      icon: 'adobecreativecloud',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6 flex items-center gap-2">
        My Toolkit
        <Settings className="h-6 w-6 text-muted-foreground" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const SimpleIconComponent = SiIcons[`Si${tool.icon}`];

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
            >
              {SimpleIconComponent && (
                <div style={{ width: '2em', height: '2em', verticalAlign: 'middle' }}>
                  <SimpleIconComponent />
                </div>
              )}
              <span className="text-lg text-foreground mt-2">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
