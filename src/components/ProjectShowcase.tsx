
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Pet Adoption Website',
      description:
        'Connect, adopt, and care — your gateway to a better life for pets.',
      image: 'https://picsum.photos/600/400',
      githubLink: '#',
      demoLink: '#',
      techStack: ['Next.js', 'React', 'Bootstrap'],
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      image: 'https://picsum.photos/600/400',
      githubLink: '#',
      demoLink: '#',
      techStack: [],
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3.',
      image: 'https://picsum.photos/600/400',
      githubLink: '#',
      demoLink: '#',
      techStack: [],
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-6">
        Project Showcase 💻
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {/* First Project Full Width */}
          {projects.length > 0 && (
            <ProjectCard project={projects[0]} isFullWidth={true} />
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Remaining Projects (Two per row) */}
          {projects.length > 1 &&
            projects.slice(1).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    demoLink: string;
    techStack: string[];
  };
  isFullscreen?: boolean;
  isFullWidth?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFullWidth }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden relative transition-transform duration-300 ${
        isFullWidth ? 'md:col-span-2' : ''
      } ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-background/80 text-foreground flex flex-col justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-md">{project.description}</p>
        <div className="flex gap-2">
          {project.techStack.map((tech, index) => (
            <Button variant="secondary" size="sm" key={index}>
              {tech}
            </Button>
          ))}
        </div>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="bg-[#ADD8E6] text-white hover:bg-white hover:text-[#ADD8E6] transition-colors duration-300">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild className="bg-[#ADD8E6] text-white hover:bg-white hover:text-[#ADD8E6] transition-colors duration-300">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
