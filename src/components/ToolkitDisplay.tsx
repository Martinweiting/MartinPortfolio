'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';

const ToolkitDisplay = () => {
  const tools = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Figma', icon: 'figma' },
    { name: 'NPM', icon: 'npm' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Prisma', icon: 'prisma' },
    { name: 'Docker', icon: 'docker' },
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
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>{tool.name} icon</title>
                <use xlinkHref={`/simple-icons.svg#si-${tool.icon}`} />
              </svg>
            )}
            <span className="text-lg text-foreground mt-2">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
