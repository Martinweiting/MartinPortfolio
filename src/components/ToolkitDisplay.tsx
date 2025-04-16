'use client';

import {useEffect, useState} from 'react';
import {Settings} from 'lucide-react';

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
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>React</title>
          <path d="M22.479 11.574c0-5.217-8.447-9.426-14.104-9.426-.457 0-.913.028-1.363.084l1.344 2.296c.348-.047.714-.07 1.083-.07 4.073 0 7.377 3.148 7.377 7.048 0 3.9-3.304 7.048-7.377 7.048-4.073 0-7.377-3.148-7.377-7.048 0-.369.022-.735.07-.084l-1.344 2.296c.449.056.905.084 1.363.084 5.657 0 14.104-4.209 14.104-9.426zM14.104 12.433c0 1.873-1.646 3.394-3.68 3.394-2.034 0-3.68-1.521-3.68-3.394 0-1.873 1.646-3.394 3.68-3.394 2.034 0 3.68 1.521 3.68 3.394z"/>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Next.js</title>
          <path d="M12.33 14.66l4.48-7.72h-2.14l-2.34 4.03-2.34-4.03H5.52l4.48 7.72zM24 23.45H0V0h24v23.45z"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Tailwind CSS</title>
          <path d="M19.475 5.25H4.525L12 15.698zM0 3.75h24v16.5H0V3.75z"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Node.js</title>
          <path d="M12.83 2.344H11.17v19.312h1.66V2.344zM21.656 8.656h-1.656v6.688h1.656v-6.688zM2.344 8.656h1.656v6.688H2.344v-6.688zM21.656 15.344h-1.656v5.968h1.656v-5.968zM2.344 15.344h1.656v5.968H2.344v-5.968z"/>
        </svg>
      ),
    },
    {
      name: 'HTML',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>HTML5</title>
          <path d="M3.938 2.953h16.125l-1.313 14.719-6.75 1.875-6.75-1.875-1.313-14.719zm1.219.938l.907 10.125 5.906 1.64 5.906-1.64.906-10.125h-14.53zM8.25 6.563h7.5v.938h-7.5v-.938zm0 3.75h7.5v.938h-7.5v-.938zm0 3.75h5.063v.938h-5.063v-.938z"/>
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>CSS3</title>
          <path d="M3.938 2.953h16.125l-1.313 14.719-6.75 1.875-6.75-1.875-1.313-14.719zm1.219.938l.907 10.125 5.906 1.64 5.906-1.64.906-10.125h-14.53zM8.25 6.563h7.5v.938h-7.5v-.938zm0 3.75h7.5v.938h-7.5v-.938zm0 3.75h5.063v.938h-5.063v-.938z"/>
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Firebase</title>
          <path d="M22.438 8.125c0-1.656-1.344-3-3-3-.563 0-1.094.156-1.531.438v.031l-2.719 8.969h.031l-3.844-3.5v-.031c-.469-.281-.969-.438-1.531-.438-1.656 0-3 1.344-3 3s1.344 3 3 3c.563 0 1.094-.156 1.531-.438v-.031l3.844 3.5h-.031l2.719-8.969v.031c.437.281.968.438 1.531.438 1.656 0 3-1.344 3-3zm-3.188-1.188c.281 0 .531.094.719.281v.031l-1.875 6.188h-.031l-1.094-3.625c-.187-.594-.718-1.031-1.344-1.031-.625 0-1.156.438-1.344 1.031l-1.094 3.625h.031l-1.875-6.188v-.031c.188-.187.438-.281.719-.281.75 0 1.375.625 1.563 1.406.187.781.531 1.406 1.188 1.406h.031c.656 0 1.031-.625 1.188-1.406.188-.781.813-1.406 1.563-1.406z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>TypeScript</title>
          <path d="M1.188 0h21.625l-.313 7.906h-7.438v3.187h5.875v3.313h-5.875v7.594h-.625v-7.594h-6.313v-3.313h6.313v-3.187h-5.781l-.313-7.906zm5.469 7.906h6.75v3.187h-6.75v-3.187z"/>
        </svg>
      ),
    },
    {
      name: 'Adobe Creative Cloud',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Adobe Creative Cloud</title>
          <path d="M15.124 12.719l-3.219-9.765h-.094l-3.25 9.765h-.031l-3.719-11.219h2.844l2.375 7.125h.062l2.281-7.125h2.688l2.25 7.125h.094l2.344-7.125h2.844l-3.719 11.219zm-.25 8.734h-5.719v-17.469h5.719v17.469z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6 flex items-center gap-2">
        My Toolkit
        <Settings className="h-6 w-6 text-muted-foreground"/>
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
