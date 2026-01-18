"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

// Projects
const projects = [
  {
    id: "01",
    title: "NEURAL AUDIT",
    category: "MERN Stack Tool",
    description: "A sophisticated, real-time web accessibility auditing application. Automates WCAG compliance checks to ensure websites are usable by everyone.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Puppeteer"],
    link: "https://github.com/HussainMaaz12/Website-Auditor", 
    color: "text-neon-blue",
    border: "group-hover:border-neon-blue"
  },
  {
    id: "02",
    title: "UNSAID WORDS",
    category: "Interactive Web Experience",
    description: "A multi-page romantic storytelling website featuring custom animations and a personalized user journey for a specific narrative.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
    color: "text-neon-pink",
    border: "group-hover:border-neon-pink"
  },
  {
    id: "03",
    title: "CANTEEN V2",
    category: "Full Stack Management System",
    description: "Led a team of 3 to design a complete Canteen Management System handling inventory, orders, and student payments.",
    tech: ["Python", "Django", "MySQL", "JavaScript"],
    link: "https://github.com/HussainMaaz12/Canteen-Management-System-project-setup",
    color: "text-yellow-400",
    border: "group-hover:border-yellow-400"
  },
  {
    id: "04",
    title: "JAVA ALGORITHMS",
    category: "Core Computer Science",
    description: "A collection of complex logic implementations including Loop Control statements, multi-threading, and sorting algorithms.",
    tech: ["Java", "OOP", "Data Structures"],
    link: "#",
    color: "text-green-400",
    border: "group-hover:border-green-400"
  }
];

export default function ProjectsPage() {
  return (
    <>
    <div className="min-h-screen w-full bg-zinc-950 pt-24 px-6 md:px-12 pb-20 overflow-x-hidden">
      
     
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-retro text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500"
        >
          MISSION_LOG
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-neon-blue mt-4 text-lg"
        >
          // SELECT A PROJECT TO INSPECT SOURCE CODE
        </motion.p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={project.link} className="block h-full" target="_blank" rel="noopener noreferrer">
              <div className={`group relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-[1.01] ${project.border} hover:border-opacity-50`}>
                
                
                <span className="absolute top-4 right-6 font-retro text-4xl text-white/5 group-hover:text-white/10 transition-colors">
                  {project.id}
                </span>

                
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FolderGit2 className={`w-5 h-5 ${project.color}`} />
                      <span className={`font-mono text-xs ${project.color} tracking-widest uppercase`}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-3xl text-white mb-4 group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>

                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-mono text-slate-300 bg-black/30 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon-blue transition-colors">
                      VIEW REPOSITORY <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
    <Analytics />
    </>
  );
}