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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Hero />
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ProjectShowcase />
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AboutMe />
        </div>
      </section>

      {/* Toolkit Display Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ToolkitDisplay />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

