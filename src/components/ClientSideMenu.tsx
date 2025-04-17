'use client';

import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

const ClientSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="sm:hidden text-foreground focus:outline-none"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#B0E2FF] z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-foreground focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <Link href="#project-showcase" className="text-2xl text-foreground hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#about-me" className="text-2xl text-foreground hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
            <Link href="#contact-form" className="text-2xl text-foreground hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default ClientSideMenu;
