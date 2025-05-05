import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 0.5;
        this.color = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.alpha > 0.01) {
          this.alpha -= 0.001;
        }
        
        if (this.size > 0.1) {
          this.size -= 0.01;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Particles array
    let particles: Particle[] = [];
    
    // Mouse position
    const mouse = {
      x: 0,
      y: 0,
      isMoving: false,
    };
    
    // On mouse move, add particles
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoving = true;
      
      // Add particles
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Remove small or transparent particles
        if (particles[i].size <= 0.1 || particles[i].alpha <= 0.01) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      // Add particles at random positions occasionally
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5; // Only in top half
        particles.push(new Particle(x, y));
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      particles = [];
    };
  }, []);
  
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 bg-black md:pb-24 relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* Particle canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      {/* Cyber-grid background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-teal/10"></div>
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(transparent 95%, rgba(55, 118, 224, 0.2) 1px), linear-gradient(90deg, transparent 95%, rgba(104, 216, 180, 0.2) 1px)`, backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Glowing orb effects */}
      {/* <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-teal/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-brand-teal/10 to-brand-blue/20 blur-3xl"></div> */}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - text content */}
          <div className="md:w-1/2 md:pr-10">
            <ScrollReveal>
              <div className="inline-block px-3 py-1 mb-4 bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                <span className="text-brand-blue text-sm font-medium font-poppins">NIT Raipur&apos;s Innovation Hub</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-foreground mb-6 leading-tight">
                <span className="inline-block relative">
                  Innovate
                  
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">Create</span>{" "}&{" "}
                <span className="inline-block relative">
                  Transform
                  
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-nunito-sans">
                A creative ecosystem where innovators, thinkers, and creators collaborate to develop 
                breakthrough solutions using emerging technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="relative px-8 py-6 overflow-hidden cursor-none rounded-lg font-medium bg-brand-blue hover:bg-brand-blue/90 transition-all duration-300 font-inter" 
                  variant="default" 
                  size="lg"
                  onClick={() => {
                    
                    if (window.openEventsModal) window.openEventsModal();
                  }}
                >
                  <span className="relative group flex items-center gap-2">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="z-10 relative">Explore Events</span>
                    <span className="z-10 relative inline-block w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></span>
                  </span>
                </Button>
                
                <Button 
                  className="relative px-8 py-6 rounded-lg font-medium cursor-none bg-background border border-brand-blue/40 hover:border-brand-blue/60 hover:bg-brand-blue/5 transition-all duration-300 font-inter" 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    
                    if (window.openTeamModal) window.openTeamModal();
                  }}
                >
                  <span className="relative flex items-center gap-2">
                    <span className="relative">Meet Our Team</span>
                    <span className="relative inline-block w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform duration-300"></span>
                  </span>
                </Button>
              </div>
              
              {/* Statistics with animated counting effect */}
              <div className="flex flex-wrap items-center mt-12 space-x-8 md:space-x-16">
                <div className="group relative">
                  <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal/80 group-hover:to-brand-teal transition-colors duration-300 font-montserrat">24+</p>
                  <p className="text-sm text-muted-foreground font-nunito-sans">Annual Events</p>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></div>
                </div>
                
                <div className="group relative">
                  <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-blue/80 group-hover:to-brand-blue transition-colors duration-300 font-montserrat">100+</p>
                  <p className="text-sm text-muted-foreground font-nunito-sans">Active Members</p>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right column - logo and graphic */}
          <div className="md:w-1/2 relative">
            <ScrollReveal>
              {/* Main logo display with glowing effect */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Animated rotating circles */}
                <div className="absolute inset-0 w-full h-full animate-spin-slow opacity-30 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full blur-sm"></div>
                </div>
                
                {/* Glowing center image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/5 to-brand-teal/5 animate-pulse-slow"></div>
                  
                  <Image 
                    src="/logo-bg.png" 
                    alt="NIT Raipur Innovation Cell Logo" 
                    width={400}
                    height={400}
                    className="w-4/5 h-4/5 object-contain hidden md:block z-20 drop-shadow-[0_0_15px_rgba(32,133,255,0.3)]"
                  />
                </div>
                
                {/* Orbiting particles */}
                <div className="orbit-particle   bg-brand-blue"></div>
                <div className="orbit-particle  delay-300 bg-brand-teal"></div>
                <div className="orbit-particle   delay-700 bg-brand-cyan"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a href="#about" className="cursor-none text-muted-foreground hover:text-brand-blue transition-colors group relative p-2">
            <span className="absolute inset-0 rounded-full bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
