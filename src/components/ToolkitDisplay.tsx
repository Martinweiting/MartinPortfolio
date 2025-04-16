'use client';

import {
  BadgeCheck,
  Code,
  FileCode2,
  LayoutDashboard,
  LucideIcon,
  MoveRight,
  Rocket,
  ServerCog,
  Sparkles,
  Terminal,
  Wand2,
  Settings,
  Cloud,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ToolkitDisplay = () => {
  const [iconColor, setIconColor] = useState('hsl(var(--primary))');

  useEffect(() => {
    // This code will run only on the client-side
    setIconColor(getComputedStyle(document.documentElement).getPropertyValue('--primary'));
  }, []);

  const tools = [
    { name: 'JavaScript', icon: FileCode2, color: iconColor },
    { name: 'React', icon: Sparkles, color: iconColor },
    { name: 'Next.js', icon: LayoutDashboard, color: iconColor },
    { name: 'Tailwind CSS', icon: Terminal, color: iconColor },
    { name: 'Node.js', icon: ServerCog, color: iconColor },
    { name: 'HTML', icon: Code, color: iconColor },
    { name: 'CSS', icon: FileCode2, color: iconColor },
    { name: 'Firebase', icon: Cloud, color: iconColor },
    { name: 'TypeScript', icon: BadgeCheck, color: iconColor },
    { name: 'Adobe Creative Cloud', icon: Settings, color: iconColor },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6 flex items-center gap-2">
        My Toolkit
        <Settings className="h-6 w-6 text-muted-foreground" />
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
          >
            <tool.icon color={tool.color} size={32} />
            <span className="text-lg text-foreground mt-2">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitDisplay;
