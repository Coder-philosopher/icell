"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, ArrowDownLeft } from "lucide-react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="cursor-none relative text-muted-foreground font-medium transition-colors duration-300 hover:text-brand-blue group overflow-hidden font-inter flex items-center gap-1"
    >
      <span className="relative z-10">{label}</span>
      <ArrowDownLeft className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 text-brand-teal" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const cursorInner = document.createElement("div");
    cursorInner.className = "custom-cursor-inner";
    document.body.appendChild(cursorInner);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    document.addEventListener("mousemove", moveCursor);

    const handleMouseEnter = () => {
      cursor.classList.add("cursor-hover");
      cursorInner.classList.add("cursor-inner-hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      cursorInner.classList.remove("cursor-inner-hover");
    };

    const links = document.querySelectorAll("a, button");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
      document.removeEventListener("mousemove", moveCursor);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const target = document.getElementById(href.substring(1));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
        closeMobileMenu();
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 mt-3 text-white mx-3 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/75 border-border shadow-lg backdrop-blur-md rounded-full py-1"
          : "bg-transparent border-transparent rounded-full py-1"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-none">
            <div className="w-12 h-12 relative overflow-hidden">
              <Image
                src="/logo-bg.png"
                alt="Innovation Cell Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-montserrat tracking-tight font-bold text-2xl text-foreground bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Innovation Cell
              </h1>
              <p className="text-xs font-bold text-muted-foreground font-nunito-sans">
                NIT Raipur
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  items-center space-x-8">
            <NavLink href="#about" label="About" onClick={handleNavLinkClick} />
            <NavLink href="#events" label="Events" onClick={handleNavLinkClick} />
            <NavLink href="#gallery" label="Gallery" onClick={handleNavLinkClick} />
            <NavLink href="#team" label="Team" onClick={handleNavLinkClick} />
            <NavLink href="#contact" label="Contact" onClick={handleNavLinkClick} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-none bg-transparent border-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-4 top-20 z-40 bg-background/95 border border-border rounded-2xl shadow-xl backdrop-blur-lg px-6 py-6 transition-all duration-300",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-5">
          <NavLink href="#about" label="About" onClick={handleNavLinkClick} />
          <NavLink href="#events" label="Events" onClick={handleNavLinkClick} />
          <NavLink href="#gallery" label="Gallery" onClick={handleNavLinkClick} />
          <NavLink href="#team" label="Team" onClick={handleNavLinkClick} />
          <NavLink href="#contact" label="Contact" onClick={handleNavLinkClick} />
        </div>
      </div>
    </header>
  );
}
