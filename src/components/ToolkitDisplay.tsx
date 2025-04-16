'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';

const ToolkitDisplay = () => {
  const tools = [
    {
      name: 'JavaScript',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>JavaScript</title>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-.114-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-4.037m-7.32 7.32A5.004 5.004 0 013.283 7.023m13.694 13.694c-.258-.89-.728-1.775-1.383-2.542M3.317 3.316c.258.89.728 1.775 1.383 2.542m13.694 13.694L3.317 3.316m0 0c.635-.635 1.684-1.019 2.657-1.019m0 0c1.057 0 2.023.416 2.783 1.079m0 0l10.252 10.259m-10.252-10.259c.635.635 1.684 1.019 2.657 1.019m0 0c1.057 0 2.023.416 2.783 1.079"
          />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L5.25 17.25m12 0L6.75 5.25M4.5 19.5l1.5-1.5m10.5-10.5l1.5-1.5"
          />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479m-3.741.479c-.3 0-.597-.03-9.215-.307m9.215.307A9.024 9.024 0 0012 15.75a9.024 9.024 0 00-6.257 2.971m9.215.307c.146-.227.3-.454.454-.681m-.454.681c-.3 1.535-1.391 2.891-3.1 3.777m3.1-3.777c.146.227.3.454.454.681m-.454-.681c-.3 1.535-1.391 2.891-3.1 3.777"
          />
        </svg>
      ),
    },
    {
      name: 'HTML',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9.776c.112-.034.225-.067.338-.101l.016-.004c.197-.052.4-.1.61-.152m17.494 13.244a5.25 5.25 0 00-6.967-6.967m-1.149-1.15c.03-.111.061-.223.092-.335l.008-.015c.103-.192.21-.382.321-.57M3.75 21v-.72a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25v.72m6.75 0v-.72a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25v.72m-18 0l2.315-2.315c.577-.577 1.527-.577 2.104 0l.577.577m0 0a5.23 5.23 0 007.408 0l.577-.577m0 0L21.75 21m-13.378 0L12 7.621m1.122 13.379l5.16-5.16"
          />
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.422.422 1.005.659 1.591.659h4.318a2.25 2.25 0 002.25-2.25V14.432c0-.597-.237-1.17-.659-1.591L9.568 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 9.75h11.25"
          />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12h5.25m-10.5 0h5.25"
          />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: 'Adobe Creative Cloud',
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-4.037m-7.32 7.32A5.004 5.004 0 013.283 7.023m13.694 13.694c-.258-.89-.728-1.775-1.383-2.542M3.317 3.316c.258.89.728 1.775 1.383 2.542m13.694 13.694L3.317 3.316m0 0c.635-.635 1.684-1.019 2.657-1.019m0 0c1.057 0 2.023.416 2.783 1.079m0 0l10.252 10.259m-10.252-10.259c.635.635 1.684 1.019 2.657 1.019m0 0c1.057 0 2.023.416 2.783 1.079"
          />
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
        {tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-card"
            >
              {tool.icon && (
                <div
                  style={{
                    width: '2em',
                    height: '2em',
                    verticalAlign: 'middle',
                  }}
                >
                  {tool.icon}
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
