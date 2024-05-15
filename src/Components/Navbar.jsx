import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img className="h-14 w-14" src="https://thumbs.dreamstime.com/z/vector-illustration-use-as-print-poster-sticker-logo-tattoo-emblem-other-funny-monkey-sunglasses-168555820.jpg" alt="Logo" />
              </a>
            </div>

          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 justify-end">
              <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="https://rpsc.rajasthan.gov.in/Static/Syllabus/7B209EAD-A262-4AE5-8387-0E53FF305A31.pdf" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Syllabus</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pdf Notes</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Make notes</a>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y- sm:px-3">
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Syllabus</a>
          <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pdf Notes</a>
          <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Make Notes</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;