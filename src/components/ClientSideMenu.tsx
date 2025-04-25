'use client';

import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import { cn } from '@/lib/utils';
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
        className="text-[#9BC7F3] fixed top-4 right-4 focus:outline-none z-50"
        aria-label="Open menu"
      >
        <Menu className="h-8 w-8" />
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 left-0 w-full h-full bg-[#B0E2FF] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
          {
            'opacity-100 pointer-events-auto translate-y-0': isOpen,
            'opacity-0 pointer-events-none -translate-y-full': !isOpen,
          }
        )}
      >
        <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-foreground focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-9 w-9 text-[#FFFFFF]" />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <Link href="#project-showcase" className="text-2xl text-white hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              Project
            </Link>
            <Link href="#about-me" className="text-2xl text-white hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
            <Link href="#contact-form" className="text-2xl text-white hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
    </>
  );
};

export default ClientSideMenu;
