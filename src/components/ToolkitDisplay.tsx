'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
// import * as SiIcons from 'simple-icons-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: 'SiJavascript',
    },
    {
      name: 'React',
      icon: 'SiReact',
    },
    {
      name: 'Next.js',
      icon: 'SiNextdotjs',
    },
    {
      name: 'Tailwind CSS',
      icon: 'SiTailwindcss',
    },
    {
      name: 'Node.js',
      icon: 'SiNodedotjs',
    },
    {
      name: 'HTML',
      icon: 'SiHtml5',
    },
    {
      name: 'CSS',
      icon: 'SiCss3',
    },
    {
      name: 'Firebase',
      icon: 'SiFirebase',
    },
    {
      name: 'TypeScript',
      icon: 'SiTypescript',
    },
    {
      name: 'Adobe Creative Cloud',
      icon: 'SiAdobecreativecloud',
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
          // const SimpleIconComponent = SiIcons[tool.icon as keyof typeof SiIcons];
          const SimpleIconComponent = () => <div>{tool.name}</div>;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
            >
              {SimpleIconComponent && (
                <div style={{ width: '2em', height: '2em', verticalAlign: 'middle' }}>
                  {/* <SimpleIconComponent /> */}
                  ICON
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
