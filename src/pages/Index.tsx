
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { setupIntersectionObserver } from "@/utils/animations";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up the intersection observer for animations
    observerRef.current = setupIntersectionObserver();

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Add intersection observer class to elements after initial render
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach((section) => {
      section.classList.add('section-fade-in');
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden page-transition">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
