'use client';

import Link from 'next/link';
import {Menu} from 'lucide-react';
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
        <div className="sm:hidden absolute top-full right-0 bg-[#B0E2FF] w-60 rounded-md shadow-md py-2 z-20">
          <Link href="#project-showcase" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#about-me" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
          <Link href="#contact-form" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default ClientSideMenu;

