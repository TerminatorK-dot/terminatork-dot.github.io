
import React from 'react';
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-rajasthan-blue text-white py-12", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-white/20 pb-2">About Me</h3>
            <p className="font-poppins text-white/80">
              A passionate individual from Udaipur, Rajasthan, with a love for technology, culture, and innovation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 font-poppins">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#education" className="text-white/80 hover:text-white transition-colors">Education</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#resume" className="text-white/80 hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-white/20 pb-2">Contact Info</h3>
            <ul className="space-y-4 font-poppins">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-rajasthan-orange" />
                <span className="text-white/80">Udaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-rajasthan-orange" />
                <a href="mailto:kartik.thapa@example.com" className="text-white/80 hover:text-white transition-colors">kartik.thapa@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-rajasthan-orange" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-white/20 pb-2">Connect With Me</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/kartikthapa" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kartikthapa" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kartik.thapa@example.com" className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/80 font-poppins text-sm">
              Feel free to reach out for collaboration or just to say hello!
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center font-poppins text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Kartik Thapa. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ from Udaipur, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
