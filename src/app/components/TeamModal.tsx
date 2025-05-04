import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import TeamSection from "./TeamSection";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamModal({ isOpen, onClose }: TeamModalProps) {
  const [mounted, setMounted] = useState(false);

  // Handle modal open/close with animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setMounted(true), 10);
    } else {
      setMounted(false);
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${mounted ? 'opacity-50' : 'opacity-0'}`} 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full h-full md:w-11/12 md:h-5/6 bg-background rounded-lg shadow-xl overflow-y-auto transition-all transform duration-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Close button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground cursor-none"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Team section content */}
        <div className="p-0">
          <TeamSection />
        </div>
      </div>
    </div>
  );
}