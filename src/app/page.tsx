'use client';

import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ProjectShowcase from '@/components/ProjectShowcase';
import ToolkitDisplay from '@/components/ToolkitDisplay';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="max-w-5xl w-full px-4">
        <Hero />
      </div>

      {/* Project Showcase Section */}
      <div className="max-w-5xl w-full px-4">
        <ProjectShowcase />
      </div>

      {/* About Me Section */}
      <div className="max-w-5xl w-full px-4">
        <AboutMe />
      </div>

      {/* Toolkit Display Section */}
      <div className="max-w-5xl w-full px-4">
        <ToolkitDisplay />
      </div>

      {/* Contact Form Section */}
      <div className="max-w-5xl w-full px-4">
        <ContactForm />
      </div>
    </div>
  );
}

