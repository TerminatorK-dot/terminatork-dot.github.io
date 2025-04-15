
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, PenTool, Lightbulb, Globe, Camera } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      category: "Development",
      icon: Code,
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      category: "Design",
      icon: Palette,
      items: [
        { name: "UI/UX Design", level: 85 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Illustrator", level: 75 },
        { name: "Figma", level: 85 },
      ],
    },
    {
      category: "Creative",
      icon: PenTool,
      items: [
        { name: "Content Writing", level: 90 },
        { name: "Photography", level: 80 },
        { name: "Video Editing", level: 75 },
        { name: "Animation", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 rajasthan-gradient mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Here are some of my skills and expertise in various domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full rajasthan-gradient text-white">
                    <skillGroup.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-card rounded-xl border border-border flex flex-col items-center text-center">
            <div className="p-3 rounded-full rajasthan-gradient text-white mb-4">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
            <p className="text-foreground/70">Analytical thinking and creative solutions</p>
          </div>
          
          <div className="p-6 bg-card rounded-xl border border-border flex flex-col items-center text-center">
            <div className="p-3 rounded-full rajasthan-gradient text-white mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multilingual</h3>
            <p className="text-foreground/70">Fluent in Hindi, English and local dialects</p>
          </div>
          
          <div className="p-6 bg-card rounded-xl border border-border flex flex-col items-center text-center">
            <div className="p-3 rounded-full rajasthan-gradient text-white mb-4">
              <Camera className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Photography</h3>
            <p className="text-foreground/70">Capturing the beauty of Rajasthan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
