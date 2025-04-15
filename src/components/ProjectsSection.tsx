
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const projects = [
    {
      title: "Rajasthan Tourism Portal",
      description: "A modern web platform showcasing the tourist destinations of Rajasthan with virtual tours and booking features.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
      link: "#"
    },
    {
      title: "Desert Adventure App",
      description: "Mobile application for adventure enthusiasts to discover and book desert safari experiences in Rajasthan.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3",
      tags: ["React Native", "Firebase", "Payment Gateway"],
      link: "#"
    },
    {
      title: "Heritage Conservation Project",
      description: "Digital documentation and preservation initiative for the historical monuments of Rajasthan.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3",
      tags: ["3D Modeling", "Documentation", "Research"],
      link: "#"
    },
    {
      title: "Rajasthani Craft Marketplace",
      description: "E-commerce platform connecting local artisans of Rajasthan with global customers to sell traditional handicrafts.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3",
      tags: ["Next.js", "Stripe", "CMS", "UI/UX Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 rajasthan-gradient mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Explore some of my recent work showcasing the beauty and culture of Rajasthan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border group hover:shadow-lg transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-foreground/80 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
