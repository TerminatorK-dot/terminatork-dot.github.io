
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="floating space-y-6">
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold rajasthan-gradient-text">
            Kartik Thapa
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mt-4 max-w-2xl mx-auto">
            A creative professional from the vibrant land of Rajasthan
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rajasthan-gradient text-white font-medium">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pulse">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/70 hover:text-foreground transition-colors"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
