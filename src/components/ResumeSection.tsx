
import React from 'react';
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { FileText, Download, Eye } from "lucide-react";

type ResumeSectionProps = {
  className?: string;
};

const ResumeSection: React.FC<ResumeSectionProps> = ({ className }) => {
  return (
    <section id="resume" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>Resume & CV</SectionTitle>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Download my detailed resume or view it online to learn more about my qualifications, experience, and skills.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-rajasthan-blue text-white p-8">
            <div className="flex items-center justify-center">
              <FileText size={36} className="mr-4" />
              <h3 className="text-2xl font-playfair font-bold">Kartik Thapa - Curriculum Vitae</h3>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="/kartik-thapa-cv.pdf" 
                className="flex items-center justify-center gap-2 bg-rajasthan-maroon text-white px-6 py-3 rounded-md hover:bg-rajasthan-maroon/90 transition-colors w-full md:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} />
                Download PDF
              </a>
              
              <a 
                href="/kartik-thapa-cv.pdf" 
                className="flex items-center justify-center gap-2 border-2 border-rajasthan-orange text-rajasthan-orange px-6 py-3 rounded-md hover:bg-rajasthan-orange/10 transition-colors w-full md:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye size={20} />
                View Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
