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
      <section className="max-w-6xl mx-auto px-4 py-16">
        <Hero />
      </section>

      {/* Project Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ProjectShowcase />
      </section>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <AboutMe />
      </section>

      {/* Toolkit Display Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ToolkitDisplay />
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ContactForm />
      </section>
    </div>
  );
}
