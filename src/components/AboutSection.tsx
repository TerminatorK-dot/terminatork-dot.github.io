
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 rajasthan-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3" 
                alt="Rajasthan Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rajasthan-gradient rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold rajasthan-gradient-text">
              I'm Kartik Thapa from Rajasthan
            </h3>
            
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                I'm Kartik Thapa—a developer, designer, and digital storyteller currently pursuing my undergraduate studies in CHD. Whether I'm building a culturally themed portfolio, participating in debates with my DEBSOC team, or designing intuitive user interfaces for hackathons, I bring creativity and clarity to every project I take on. My work reflects a balance between technical proficiency—like C, C++, SQL, and React—and an eye for design, rooted in my fascination with vibrant cultures like that of Rajasthan.
              </p>
              
              <p>
                I've also stood for student parliament, driven by the belief that representation should come with purpose, not ego. My portfolio blends code and culture to narrate stories that matter, often exploring themes like positivity, tradition, and identity. Whether it's through collaborative projects, visual experiments, or deep dives into history and propaganda for academic presentations, I aim to connect ideas in a way that resonates.
              </p>
              
              <p>
                This space is more than just a showcase—it's a reflection of my journey as a builder, thinker, and creative explorer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-4 text-center">
                  <h4 className="text-lg font-bold rajasthan-gradient-text">Based in</h4>
                  <p>Rajasthan, India</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-4 text-center">
                  <h4 className="text-lg font-bold rajasthan-gradient-text">Experience</h4>
                  <p>5+ Years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

