
import React from 'react';
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { Code, Palette, Database, Globe, Brain, BookOpen } from "lucide-react";

type SkillsSectionProps = {
  className?: string;
};

type SkillCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, color }) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md border-t-4 ${color} hover:shadow-lg transition-shadow`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-playfair font-bold text-gray-800 ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-poppins">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <section id="skills" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>Technical Skills</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Code className="text-rajasthan-blue" size={24} />}
            skills={['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap']}
            color="border-rajasthan-blue"
          />
          <SkillCategory 
            title="Design" 
            icon={<Palette className="text-rajasthan-orange" size={24} />}
            skills={['Figma', 'Adobe XD', 'Photoshop', 'Responsive Design', 'UI/UX Principles', 'Wireframing']}
            color="border-rajasthan-orange"
          />
          <SkillCategory 
            title="Backend Development" 
            icon={<Database className="text-rajasthan-maroon" size={24} />}
            skills={['Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'REST API', 'GraphQL']}
            color="border-rajasthan-maroon"
          />
          <SkillCategory 
            title="Tools & Deployment" 
            icon={<Globe className="text-rajasthan-turquoise" size={24} />}
            skills={['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel', 'AWS Basics', 'Docker']}
            color="border-rajasthan-turquoise"
          />
          <SkillCategory 
            title="Programming Languages" 
            icon={<Brain className="text-purple-500" size={24} />}
            skills={['JavaScript', 'TypeScript', 'Python', 'C++', 'Java']}
            color="border-purple-500"
          />
          <SkillCategory 
            title="Learning" 
            icon={<BookOpen className="text-green-500" size={24} />}
            skills={['Next.js', 'React Native', 'AWS Advanced', 'Blockchain Development', 'AI/ML Basics']}
            color="border-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
