import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5"></div>
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(transparent 98%, rgba(55, 118, 224, 0.1) 1px), linear-gradient(90deg, transparent 98%, rgba(104, 216, 180, 0.1) 1px)`, backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image 
                  src="/logo-bg.png" 
                  alt="NIT Raipur Innovation Cell Logo" 
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-contain drop-shadow-[0_0_15px_rgba(32,133,255,0.3)]"
                />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-lg text-foreground bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                  Innovation Cell
                </h4>
                <p className="text-xs text-muted-foreground font-nunito-sans">NIT Raipur</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 font-nunito-sans">
              The Innovation Cell at NIT Raipur fosters a culture of innovation and entrepreneurship among students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 group">
                <div className="p-2 rounded-full bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 group">
                <div className="p-2 rounded-full bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 group">
                <div className="p-2 rounded-full bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 group">
                <div className="p-2 rounded-full bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">About Us</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Events</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Gallery</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-blue transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/brochure" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Brochure</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Success Stories</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Event Calendar</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">FAQs</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-brand-teal transition-all duration-300 font-inter relative group">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal/50 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground mb-4 font-nunito-sans">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all duration-300 font-inter"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue/90 hover:to-brand-teal/90 text-white rounded-r-lg transition-all duration-300 group"
              >
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0 font-nunito-sans">
              &copy; 2024 Innovation Cell, NIT Raipur. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-brand-blue text-sm transition-all duration-300 font-inter relative group">
                <span className="relative z-10">Privacy Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-brand-blue text-sm transition-all duration-300 font-inter relative group">
                <span className="relative z-10">Terms of Service</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-brand-blue text-sm transition-all duration-300 font-inter relative group">
                <span className="relative z-10">Cookie Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}