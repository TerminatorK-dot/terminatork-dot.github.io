
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold rajasthan-gradient-text">Kartik Thapa</h3>
            <p className="text-foreground/70 text-sm mt-1">
              Showcasing the vibrant culture of Rajasthan
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-foreground/70 text-sm">
              Made with <Heart className="inline h-4 w-4 text-rajasthan-pink" /> from Rajasthan, India
            </p>
            <p className="text-foreground/60 text-xs mt-1">
              © {currentYear} Kartik Thapa. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-foreground/70 hover:text-foreground hover:rajasthan-gradient-text transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground hover:rajasthan-gradient-text transition-colors">
              GitHub
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground hover:rajasthan-gradient-text transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
