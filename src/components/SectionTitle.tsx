
import React from 'react';
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-playfair font-bold text-rajasthan-blue relative mb-12 pb-4 inline-block", className)}>
      {children}
      <span className="absolute bottom-0 left-0 w-3/4 h-1 bg-rajasthan-orange"></span>
      <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-rajasthan-maroon mt-2"></span>
    </h2>
  );
};

export default SectionTitle;
