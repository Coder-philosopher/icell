"use effect"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ScrollReveal from "./ScrollReveal";

function page() {
  return (
    <>
    <Navbar/>
    
  
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h6 className="text-primary font-medium mb-2">WHO WE ARE</h6>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Fostering Innovation at NIT Raipur</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  Innovation Cell, NIT Raipur was formed in May 2018 under the supervision
                  of Director and Head, Career Development Center, NIT Raipur. It aims to inculcate 
                  the spirit of innovation and entrepreneurship amongst the students, encourage
                  and support innovations through guidance, mentorship and support. 
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 p-8 border border-border bg-card rounded-xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <div className="h-1 w-8 bg-primary mb-6 transition-all duration-300 group-hover:w-12"></div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Idea Incubation</h3>
                    <p className="text-muted-foreground">
                      We provide resources, mentorship, and support to transform innovative ideas into viable projects that make a real impact.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Feature 2 */}
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 p-8 border border-border bg-card rounded-xl transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-lg group-hover:shadow-secondary/10">
                    <div className="h-1 w-8 bg-secondary mb-6 transition-all duration-300 group-hover:w-12"></div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">Collaborative Network</h3>
                    <p className="text-muted-foreground">
                      Connect with like-minded innovators, industry experts, and academic mentors in our vibrant community of creators.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Feature 3 */}
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 p-8 border border-border bg-card rounded-xl transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10">
                    <div className="h-1 w-8 bg-accent mb-6 transition-all duration-300 group-hover:w-12"></div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Technology Access</h3>
                    <p className="text-muted-foreground">
                      Gain access to state-of-the-art labs, equipment, and software tools to build and test your innovative solutions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="mt-20">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                  <ScrollReveal>
                    <h6 className="text-primary font-medium mb-2">OUR MISSION</h6>
                    <h2 className="text-3xl font-heading font-bold mb-6">Fostering Student Innovation & Entrepreneurship</h2>
                    <p className="text-muted-foreground mb-8">
                      Students will be encouraged to take up innovative projects with possibility of commercialization.
                      We aim to create an ecosystem where students can explore, experiment, and excel in their innovative 
                      pursuits while developing entrepreneurial mindsets.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="relative pl-6 group bg-card/50 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-all duration-300">
                        <span className="absolute left-0 top-0 w-1.5 h-full bg-primary/70 rounded-l-md"></span>
                        <h4 className="text-lg font-medium mb-1 text-primary-foreground">Skills Development</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Organizing workshops, bootcamps and hands-on training programs</p>
                      </div>
                      <div className="relative pl-6 group bg-card/50 p-4 rounded-lg border border-transparent hover:border-secondary/20 transition-all duration-300">
                        <span className="absolute left-0 top-0 w-1.5 h-full bg-secondary/70 rounded-l-md"></span>
                        <h4 className="text-lg font-medium mb-1 text-secondary-foreground">Competitions & Hackathons</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Hosting national and international level tech competitions</p>
                      </div>
                      <div className="relative pl-6 group bg-card/50 p-4 rounded-lg border border-transparent hover:border-accent/20 transition-all duration-300">
                        <span className="absolute left-0 top-0 w-1.5 h-full bg-accent/70 rounded-l-md"></span>
                        <h4 className="text-lg font-medium mb-1 text-accent-foreground">Industry Partnerships</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Facilitating industry-academia collaborations and mentorship</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <ScrollReveal>
                    <div className="group relative rounded-lg overflow-hidden">
                      <img 
                        src="/images/gallery/image3.png" 
                        alt="Students presenting ideas" 
                        className="rounded-lg h-64 object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm font-medium">Innovation Showcase</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="group relative rounded-lg overflow-hidden mt-8">
                      <img 
                        src="/images/gallery/image5.png" 
                        alt="Innovation workshop" 
                        className="rounded-lg h-64 object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm font-medium">Hands-on Workshops</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="group relative rounded-lg overflow-hidden">
                      <img 
                        src="/images/gallery/image6.png" 
                        alt="Collaboration session" 
                        className="rounded-lg h-64 object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm font-medium">Team Collaborations</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="group relative rounded-lg overflow-hidden mt-8">
                      <img 
                        src="/images/gallery/image2.png" 
                        alt="Team meeting" 
                        className="rounded-lg h-64 object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm font-medium">Expert Mentorship</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    
    <Footer/>
    </>
  )
}

export default page