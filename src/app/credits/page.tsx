"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreditsPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center relative overflow-hidden font-sans text-slate-200">
      
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Link 
        href="/" 
        className="fixed top-24 left-6 z-50 text-slate-500 hover:text-neon-pink transition-colors flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Base
      </Link>

      <div className="relative w-full max-w-2xl h-[60vh] mt-32 overflow-hidden mask-image-gradient">
        
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-150%" }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
          className="flex flex-col items-center text-center space-y-12 pb-20 px-4"
        >
          <div className="space-y-2">
            <h1 className="font-retro text-5xl md:text-6xl text-neon-pink drop-shadow-[0_0_10px_magenta]">
              PLAYER 1
            </h1>
            <p className="font-mono text-neon-blue tracking-widest text-sm">
              THANKS FOR PLAYING
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-white font-bold text-lg uppercase tracking-widest">Lead Developer</h2>
            <p className="text-slate-400 font-mono text-sm">MAAZ HUSSAIN</p>
          </div>

          <div className="space-y-1">
            <h2 className="text-white font-bold text-lg uppercase tracking-widest">Tech Stack</h2>
            <p className="text-slate-400 font-mono text-sm">Next.js 14 / React</p>
            <p className="text-slate-400 font-mono text-sm">Tailwind CSS</p>
            <p className="text-slate-400 font-mono text-sm">Framer Motion</p>
            <p className="text-slate-400 font-mono text-sm">Three.js / R3F</p>
            <p className="text-slate-400 font-mono text-sm">MERN-STACK</p>
            <p className="text-slate-400 font-mono text-sm">Django & MYSQL</p>
          </div>

          <div className="space-y-1">
            <h2 className="text-white font-bold text-lg uppercase tracking-widest">Assets</h2>
            <p className="text-slate-400 font-mono text-sm">Lucide Icons</p>
            <p className="text-slate-400 font-mono text-sm">Google Fonts</p>
            <p className="text-slate-400 font-mono text-sm">Grainy Gradients</p>
          </div>

        </motion.div>
        
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>

      </div>

      <div className="fixed bottom-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-t border-white/10 py-8">
         <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
            
            <h2 className="font-retro text-2xl md:text-3xl text-white animate-pulse">
              READY TO START A NEW GAME?
            </h2>
            
            <div className="flex gap-8 justify-center">
              <a href="mailto:work.mh12@gmail.com" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-neon-pink transition-colors">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-neon-pink group-hover:bg-neon-pink/10 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest">EMAIL</span>
              </a>

              <a href="https://github.com/HussainMaaz12" target="_blank" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest">GITHUB</span>
              </a>

              <a href="https://linkedin.com/in/hussain-maaz/" target="_blank" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest">LINKEDIN</span>
              </a>
            </div>

         </div>
      </div>

    </div>
  );
}