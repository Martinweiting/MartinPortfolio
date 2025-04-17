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
      <section className="w-full">
        <Hero />
      </section>

      {/* Project Showcase Section */}
      <section className="w-full" id="project-showcase">
        <ProjectShowcase />
      </section>

      {/* About Me Section */}
      <section className="w-full" id="about-me">
        <AboutMe />
      </section>

      {/* Toolkit Display Section */}
      <section className="w-full">
        <ToolkitDisplay />
      </section>

      {/* Contact Form Section */}
      <section className="w-full" id="contact-form">
        <ContactForm />
      </section>
    </div>
  );
}
