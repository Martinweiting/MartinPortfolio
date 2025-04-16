'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M20.59 3.41a1.97 1.97 0 0 0-2.83 0L9.76 11.31a2 2 0 0 0 0 2.83L3.41 20.59a1.97 1.97 0 0 0 0 2.83 1.97 1.97 0 0 0 2.83 0l7.91-7.91a2 2 0 0 0 2.83 0l8.17 8.17a1.97 1.97 0 0 0 2.83 0 1.97 1.97 0 0 0 0-2.83L12.69 9.76a2 2 0 0 0 0-2.83L20.59 3.41z" />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M21.56 9.68A8.94 8.94 0 0 0 20 8h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a8.94 8.94 0 0 0 1.56-3.32zM3.44 14.32A8.94 8.94 0 0 0 4 16h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4a8.94 8.94 0 0 0-1.56 3.32z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M12 7v4M7 7h4M13 17h-4M17 17v-4" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M16 18h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6M8 6H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3H22.29a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      name: 'HTML',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M3 3h18l-2 16-7 4-7-4-2-16z" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M3 3h18l-2 16-7 4-7-4-2-16z" />
          <path d="M7 7h10M7 11h10M7 15h10" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M12 2L1 9M12 22L12 15M4 6L18 18M4 18L18 6" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M16 18h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM4 6h16M4 18h16M4 12h2M18 12h-2" />
        </svg>
      ),
    },
    {
      name: 'Adobe Creative Cloud',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M12 2L4 22M20 22L12 2" />
          <path d="M4 22H2M22 22H20" />
        </svg>
      ),
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

    