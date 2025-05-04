import { cn } from "@/lib/utils";
import ScrollReveal from "../ui/ScrollReveal";
import { ReactNode } from "react";

interface TimelineItemProps {
  position: "left" | "right";
  children: ReactNode;
  className?: string;
}

export default function TimelineItem({ position, children, className }: TimelineItemProps) {
  return (
    <ScrollReveal
      className={cn(
        "timeline-item mb-8",
        position === "left" ? "timeline-left" : "timeline-right",
        className
      )}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {children}
      </div>
    </ScrollReveal>
  );
}
