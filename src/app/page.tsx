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
      <Hero />

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* About Me Section */}
      <AboutMe />

      {/* Toolkit Display Section */}
      <ToolkitDisplay />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}


