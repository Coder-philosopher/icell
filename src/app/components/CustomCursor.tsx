"use client";

import { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Move inner cursor immediately
      if (innerCursorRef.current) {
        innerCursorRef.current.style.left = `${e.clientX}px`;
        innerCursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateOuterCursor = () => {
      
      const lerp = (start: number, end: number, amt: number) => start + (end - start) * amt;

      // Then use:
      outerPos.current.x = lerp(outerPos.current.x, mouse.current.x, 0.3);
      outerPos.current.y = lerp(outerPos.current.y, mouse.current.y, 0.3);
      // Apply friction - adjust 0.1 for more or less lag
      

      if (outerCursorRef.current) {
        outerCursorRef.current.style.left = `${outerPos.current.x}px`;
        outerCursorRef.current.style.top = `${outerPos.current.y}px`;
      }

      requestAnimationFrame(animateOuterCursor);
    };

    window.addEventListener("mousemove", updateMouse);
    animateOuterCursor();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    const clickableElements = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], [tabindex="0"]'
    );

    clickableElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerCursorRef}
        className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
      />
      <div
        ref={innerCursorRef}
        className={`custom-cursor-inner ${isHovering ? "cursor-inner-hover" : ""}`}
      />
    </>
  );
}
