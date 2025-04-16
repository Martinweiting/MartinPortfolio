
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ProjectShowcase from '@/components/ProjectShowcase';
import ToolkitDisplay from '@/components/ToolkitDisplay';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 md:px-16 lg:px-24">
      <Hero />
      <ProjectShowcase />
      <AboutMe />
      <ToolkitDisplay />
      <ContactForm />
    </div>
  );
}
