"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "START", href: "/" },
  { name: "MISSIONS", href: "/projects" },
  { name: "BIO", href: "/about" },      
  { name: "CREDITS", href: "/credits" }, 
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse group-hover:shadow-[0_0_10px_#ff00ff] transition-shadow" />
        <span className="font-retro text-2xl text-white tracking-widest group-hover:text-neon-pink transition-colors">
          PLAYER_1
        </span>
      </Link>

      <div className="flex gap-4 md:gap-8">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="relative group">
            <span className="font-retro text-lg md:text-xl text-slate-300 transition-colors group-hover:text-neon-blue">
              {link.name}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all group-hover:w-full" />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}