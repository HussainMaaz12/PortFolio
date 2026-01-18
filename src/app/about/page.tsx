"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Mail, GraduationCap, Briefcase, Code2, Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 pt-24 px-6 md:px-12 pb-20 overflow-x-hidden font-sans text-slate-200">
      
      {/* Background Noise */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-6"
        >
          <h1 className="font-retro text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-purple-500">
            PLAYER_BIO
          </h1>
          <p className="font-mono text-neon-blue mt-2">// LOADING USER DATA...</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: THE "CARD" */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
              {/* Profile Image Placeholder */}
              <div className="w-full aspect-square bg-black/40 rounded-xl mb-6 border-2 border-white/10 flex items-center justify-center relative overflow-hidden">
                <User className="w-20 h-20 text-white/20" />
                {/* You can add an <Image /> here later */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-retro text-2xl text-white">LVL. 20 DEV</div>
              </div>

              {/* Stats Block */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neon-pink" />
                  <span>Earth, Milky Way</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  <span>Contact: work.mh12@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span>Online since 2006</span>
                </div>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: THE "LORE" */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-12"
          >
            
            {/* SECTION: ABOUT */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-neon-pink" /> SYSTEM LOG
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed bg-black/20 p-6 rounded-xl border-l-4 border-neon-pink">
                <p className="mb-4">
                  I am a passionate Full Stack Developer with a knack for building immersive web experiences. 
                  My journey began with a simple "Hello World" in Python, and has since evolved into architecting complex systems using the MERN stack.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, optimizing algorithms, or designing 3D interactions 
                  that push the boundaries of the browser.
                </p>
              </div>
            </section>

            {/* SECTION: EXPERIENCE */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-neon-blue" /> QUEST HISTORY
              </h2>
              
              <div className="space-y-6">
                {/* Job 1 */}
                <div className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_10px_cyan]"></div>
                  <h3 className="text-xl font-bold text-white">Exploring Options</h3>
                  <span className="text-xs font-mono text-neon-blue mb-2 block">2025 - PRESENT</span>
                  <p className="text-sm text-slate-400">
                    Delivering custom web solutions for clients, focusing on performance, SEO, and interactive UI designs.
                  </p>
                </div>

                {/* Job 2 */}
                <div className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                  <h3 className="text-xl font-bold text-white">Computer Science Student (BCA) </h3>
                  <span className="text-xs font-mono text-neon-blue mb-2 block">2024 - 2027</span>
                  <p className="text-sm text-slate-400">
                    Specializing in Data Structures, MERN , Algorithms, and Web Technologies. Lead Developer for the university Canteen System project & Personal Level Projects.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: EDUCATION */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-yellow-400" /> SKILL TREES
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Django", "SQL & MYSQL" , "MERN"].map((skill) => (
                  <div key={skill} className="bg-white/5 border border-white/10 p-3 rounded text-center hover:bg-white/10 hover:border-neon-pink transition-colors cursor-default">
                    <span className="text-sm font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}