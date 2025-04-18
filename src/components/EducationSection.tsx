
import React from 'react';
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Calendar } from "lucide-react";

type EducationSectionProps = {
  className?: string;
};

type EducationItemProps = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

const EducationItem: React.FC<EducationItemProps> = ({ title, institution, period, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-rajasthan-blue hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-playfair font-bold text-rajasthan-maroon mb-2">{title}</h3>
      <div className="flex items-center text-rajasthan-blue mb-4">
        <GraduationCap size={18} className="mr-2" />
        <span className="font-poppins">{institution}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Calendar size={18} className="mr-2" />
        <span className="font-poppins text-sm">{period}</span>
      </div>
      <p className="text-gray-700 font-poppins">{description}</p>
    </div>
  );
};

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  return (
    <section id="education" className={cn("py-20 bg-rajasthan-sand/10", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>Education</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <EducationItem 
            title="Computer Science" 
            institution="International Institute of Information Technology, Hyderabad (IIITH)"
            period="2020 - Present"
            description="Pursuing a bachelor's degree with focus on computer science and software engineering."
          />
          <EducationItem 
            title="Higher Secondary Education" 
            institution="St. Anthony's Sr. Sec. School"
            period="2018 - 2020"
            description="Completed higher secondary education with science as major subject."
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

