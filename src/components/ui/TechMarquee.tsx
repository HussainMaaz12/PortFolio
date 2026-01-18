"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", 
  "MONGODB", "EXPRESS", "THREE.JS", "TAILWIND", 
  "PYTHON", "DJANGO", "JAVA", "C++", "FIGMA"
];

export default function TechMarquee() {
  return (
    <div className="w-full py-4 bg-zinc-900/50 border-y border-white/5 backdrop-blur-sm overflow-hidden flex relative z-20">
      {/* Gradient fade on sides to make it look 3D */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

      {/* The Moving Container */}
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 // Adjust speed here (higher = slower)
        }}
      >
        {/* We repeat the list twice to create the seamless loop effect */}
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <div key={index} className="mx-8 flex items-center gap-4 group cursor-default">
            <span className="text-neon-pink text-xs">◆</span>
            <span className="font-retro text-2xl text-slate-400 group-hover:text-neon-blue group-hover:shadow-[0_0_10px_cyan] transition-all duration-300">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}