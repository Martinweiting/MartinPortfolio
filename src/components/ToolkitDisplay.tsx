'use client';

import {useEffect, useState} from 'react';
import {Settings} from 'lucide-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'HTML',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Adobe Creative Cloud',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          style={{verticalAlign: 'middle'}}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v5h2v-5zm0 6h-2v2h2v-2z" />
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
