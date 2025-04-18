
import React from 'react';
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section id="home" className={cn("min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-rajasthan-sand/20", className)}>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">
            <span className="text-rajasthan-blue">Namaste!</span> <br />
            I'm <span className="text-rajasthan-maroon">Kartik Thapa</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-poppins">
            From the city of lakes - <span className="italic text-rajasthan-blue">Udaipur, Rajasthan</span>
          </p>
          <p className="text-gray-600 mb-8 font-poppins">
            Welcome to my personal website. I'm passionate about showcasing the beauty of my birthplace while sharing my journey, skills, and aspirations.
          </p>
          <div className="flex space-x-4">
            <a href="#about" className="px-6 py-3 bg-rajasthan-blue text-white rounded-md hover:bg-rajasthan-blue/90 transition-colors font-poppins">
              About Me
            </a>
            <a href="#resume" className="px-6 py-3 border border-rajasthan-orange text-rajasthan-orange rounded-md hover:bg-rajasthan-orange/10 transition-colors font-poppins">
              Resume
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 rounded-full bg-rajasthan-sand border-4 border-rajasthan-blue shadow-xl overflow-hidden">
              <img 
                src="/lovable-uploads/00cfe535-e236-4390-8bf0-58a21a199848.png" 
                alt="Kartik Thapa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg border border-rajasthan-sand">
              <span className="text-rajasthan-blue font-bold font-playfair">Udaipur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
