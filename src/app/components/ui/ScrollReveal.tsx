import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        isActive && "active",
        className
      )}
    >
      {children}
    </div>
  );
}
