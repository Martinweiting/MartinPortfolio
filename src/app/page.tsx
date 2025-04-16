'use client';

import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ProjectShowcase from '@/components/ProjectShowcase';
import ToolkitDisplay from '@/components/ToolkitDisplay';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-screen-lg w-full">
        <Hero />
        <ProjectShowcase />
        <AboutMe />
        <ToolkitDisplay />
        <ContactForm />
      </div>
    </div>
  );
}
