
import React from 'react';
import { cn } from "@/lib/utils";
import MobileMenu from './MobileMenu';

type NavBarProps = {
  className?: string;
};

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={cn("w-full py-4 border-b border-rajasthan-sand/30 bg-white/90 backdrop-blur-sm fixed top-0 z-50", className)}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="font-playfair text-2xl font-bold text-rajasthan-maroon">
          <span className="text-rajasthan-blue">K</span>artik <span className="text-rajasthan-orange">T</span>hapa
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-poppins">
          <li><a href="#home" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">About</a></li>
          <li><a href="#education" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">Education</a></li>
          <li><a href="#gallery" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">Gallery</a></li>
          <li><a href="#skills" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">Skills</a></li>
          <li><a href="#resume" className="text-gray-800 hover:text-rajasthan-blue relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rajasthan-orange after:transition-all after:duration-300">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
