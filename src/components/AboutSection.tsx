
import React from 'react';
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

type AboutSectionProps = {
  className?: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>About Me</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 font-poppins leading-relaxed">
              Hello! I'm Kartik Thapa, born and raised in the beautiful city of Udaipur, Rajasthan - often called the "City of Lakes" and the "Venice of the East."
            </p>
            <p className="text-gray-700 font-poppins leading-relaxed">
              Growing up in Udaipur has instilled in me a deep appreciation for our rich cultural heritage, art, and architecture. The serene lakes, majestic palaces, and vibrant traditions of Rajasthan have shaped my perspective and inspired my journey.
            </p>
            <p className="text-gray-700 font-poppins leading-relaxed">
              I'm passionate about blending my technical knowledge with the artistic sensibilities I've developed in this culturally rich environment. When I'm not working on my technical projects, you can find me exploring the hidden gems of Udaipur or learning about our local traditions and crafts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src="https://source.unsplash.com/random/300x400/?udaipur,palace" alt="Udaipur Palace" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg mt-8">
              <img src="https://source.unsplash.com/random/300x400/?udaipur,lake" alt="Udaipur Lake" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src="https://source.unsplash.com/random/300x400/?rajasthan,culture" alt="Rajasthan Culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg mt-8">
              <img src="https://source.unsplash.com/random/300x400/?rajasthan,craft" alt="Rajasthan Craft" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
