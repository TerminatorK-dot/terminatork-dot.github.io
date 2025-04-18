
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import GallerySection from '@/components/GallerySection';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <GallerySection />
      <SkillsSection />
      <ResumeSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
