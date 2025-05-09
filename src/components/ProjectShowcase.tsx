'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Pet Adoption Website',
      description:
        'Connect, adopt, and care — your gateway to a better life for pets.',
      image: '/images/1.jpg',
      githubLink: 'https://github.com/Martinweiting/final',
      demoLink: 'https://github.com/martinweiting/final',
      techStack: ['Next.js', 'React', 'Bootstrap'],
      isFeatured: true,
    },
    {
      title: 'Framed Perspectives',
      description: 'Capture the moment — storytelling through light, lens, and emotion.',
      image: '/images/2.jpg',
      githubLink: ' ',
      demoLink: ' ',
      techStack: ['Next.js', 'React', 'Tailwind CSS'],
      isFeatured: false,
    },
    {
      title: 'MiniGame Arcade',
      description: 'Quick to start — challenge your reflexes and beat your best score!',
      image: '/images/3.jpg',
      githubLink: ' ',
      demoLink: ' ',
      techStack: ['TypeScript', 'Three.js', 'WebSocket'],
      isFeatured: false,
    },
    {
      title: 'Project 4',
      description: 'A brief description of project 4.',
      image: 'https://picsum.photos/600/300',
      githubLink: 'https://github.com/example4',
      demoLink: 'https://project4.example.com',
      techStack: [],
      isFeatured: false,
    },
  ];

  const featuredProject = projects.find(project => project.isFeatured);
  const secondaryProjects = projects.filter(project => !project.isFeatured).slice(0, 2);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger animation once when 20% is visible
  // Removed animationDirection state and useEffect

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Changed from hiddenLeft/hiddenRight with x to hidden with y
    visible: { opacity: 1, y: 0 },  // Changed from x: 0 to y: 0
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-12 overflow-hidden" // Added overflow-hidden
      initial="hidden" // Changed initial logic
      animate={isInView ? 'visible' : 'hidden'} // Changed animate logic
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-semibold text-[#9BC7F3] mb-6"
          style={{ fontFamily: 'Caveat Brush' }}
        >
          Project Showcase 💻
        </h2>
        <div className="flex flex-col gap-6">
          {/* Featured Project */}
          {featuredProject && (
            <ProjectCard project={featuredProject} isFeatured />
          )}

          {/* Secondary Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
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
    isFeatured: boolean;
  };
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = `rounded-lg shadow-md overflow-hidden relative transition-transform duration-300 transform-gpu ${isHovered ? 'scale-105' : ''
    } `;

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Image
          src={project.image || "https://picsum.photos/600/300"}
          alt={project.title}
          width={isFeatured ? 800 : 600}
          height={isFeatured ? 400 : 400}
          className={`w-full object-cover`}
          style={{height: '200px'}}
        />
      </div>
      <div className="absolute inset-0 bg-gray-800/80 text-white flex flex-col justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button asChild className="bg-[#ADD8E6] text-white hover:bg-white hover:text-[#ADD8E6] transition-colors duration-300">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
