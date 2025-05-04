import ScrollReveal from "./ui/ScrollReveal";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h6 className="text-primary font-medium mb-2">GET IN TOUCH</h6>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Connect With Innovation Cell</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Have questions or want to collaborate? Reach out to us through any of these channels.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5">
            <ScrollReveal>
              <div className="bg-card/50 border border-border rounded-xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Contact Information</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 border border-primary/20">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        Innovation Cell, NIT Raipur<br />
                        G.E. Road, Raipur<br />
                        Chhattisgarh - 492010
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4 flex-shrink-0 border border-secondary/20">
                      <Mail className="text-secondary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">Email</h4>
                      <a href="mailto:innovation@nitrr.ac.in" className="text-muted-foreground hover:text-primary transition-colors">
                        innovation@nitrr.ac.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0 border border-accent/20">
                      <Phone className="text-accent h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">Phone</h4>
                      <a href="tel:+917712254200" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 771 225 4200
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 relative z-10">
                  <h4 className="font-medium mb-4 text-foreground">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary border border-border hover:border-primary transition-all duration-300">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-white hover:bg-secondary border border-border hover:border-secondary transition-all duration-300">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-white hover:bg-accent border border-border hover:border-accent transition-all duration-300">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary border border-border hover:border-primary transition-all duration-300">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-3/5">
            <ScrollReveal>
              <div className="bg-card/50 border border-border rounded-xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">Send Us a Message</h3>
                
                <form className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-lg bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Your message topic"
                      className="w-full rounded-lg bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <Label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full rounded-lg bg-background border-border resize-none focus:border-primary"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition duration-300 cursor-none"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
