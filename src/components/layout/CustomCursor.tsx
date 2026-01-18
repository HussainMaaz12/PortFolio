"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. The Inner Dot (The actual pointer) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-neon-pink rounded-full z-[9999] pointer-events-none"
        style={{
            boxShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff" // Neon Glow
        }}
        animate={{
          x: position.x - 10, // Center it (half of width)
          y: position.y - 10,
          scale: isPointer ? 1.5 : 1, // Pulse when hovering links
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
      />

      {/* 2. The Outer Ring (The "Reticle" that follows slowly) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-neon-blue rounded-full z-[9998] pointer-events-none"
        animate={{
          x: position.x - 24, // Center it (half of width)
          y: position.y - 24,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.8 : 0.5,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}