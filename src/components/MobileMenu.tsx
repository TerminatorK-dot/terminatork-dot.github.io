
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="text-rajasthan-blue focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50 border-t border-rajasthan-sand/30">
          <ul className="space-y-4 font-poppins">
            <li>
              <a 
                href="#home" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#resume" 
                className="block text-gray-800 hover:text-rajasthan-blue py-2"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
