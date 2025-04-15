
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 rajasthan-gradient mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate or have any questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-full rajasthan-gradient text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Email Address</h4>
                    <p className="font-medium">kartik.thapa@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-full rajasthan-gradient text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Phone Number</h4>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-full rajasthan-gradient text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Location</h4>
                    <p className="font-medium">Jaipur, Rajasthan, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 relative p-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 rajasthan-gradient opacity-10"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">Let's Create Something Amazing Together</h4>
              <p className="text-foreground/70 relative z-10">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea id="message" placeholder="Write your message here..." rows={5} />
                  </div>
                  
                  <Button className="w-full rajasthan-gradient text-white font-medium">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
