import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -64; // Navbar height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[rgba(82,39,255,0.18)] backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 text-white font-bold text-2xl cursor-pointer focus:outline-none"
            aria-label="Scroll to Hero"
          >
            BrightPath IELTS
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            {[
              { label: 'Features', id: 'home' },
              { label: 'About Us', id: 'services' },
              { label: 'Testimonials', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-800 transition focus:outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(82,39,255,0.18)] backdrop-blur-md px-2 pt-2 pb-3 space-y-1 text-white rounded-md animate-fade-in">
          {[
            { label: 'Features', id: 'home' },
            { label: 'About Us', id: 'services' },
            { label: 'Testimonials', id: 'about' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 rounded hover:bg-[rgba(82,39,255,0.3)] transition focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
