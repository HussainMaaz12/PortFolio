import Hero3D from "@/components/hero/Hero3D";
import TechMarquee from "@/components/ui/TechMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <><div className="relative w-full h-screen flex flex-col overflow-hidden bg-zinc-950">


      <Hero3D />


      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-zinc-950 pointer-events-none" />


      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pointer-events-none">

        <div className="max-w-4xl w-full text-center space-y-8 pointer-events-auto flex flex-col items-center">

          <h2 className="font-retro font-bold text-neon-pink text-xl md:text-2xl tracking-[0.3em] animate-pulse drop-shadow-[0_0_25px_rgba(255,0,255,1)] [text-shadow:0_0_10px_rgba(255,0,255,0.8),0_0_20px_rgba(255,0,255,0.6),0_0_30px_rgba(255,0,255,0.4)] px-6 py-2">
            SYSTEM STATUS: ONLINE
          </h2>

          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl opacity-95">
            CREATIVE<br />
            DEVELOPER
          </h1>

          <p className="font-sans text-slate-200 max-w-xl mx-auto text-base md:text-lg leading-relaxed bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl">
            Specializing in the <span className="text-neon-blue font-bold">MERN Stack</span>, Python/Django, and interactive 3D web experiences.
          </p>


          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-neon-blue text-black font-bold font-retro text-lg tracking-wider hover:bg-white transition-all hover:scale-105 hover:shadow-[0_0_20px_cyan] flex items-center justify-center gap-2 min-w-[200px]"
            >
              VIEW MISSIONS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 border border-white/30 text-white font-retro text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm bg-black/40 min-w-[200px]"
            >
              READ BIO
            </Link>
          </div>

        </div>
      </div>


      <div className="relative z-20 pb-0 bg-black/80 backdrop-blur-md border-t border-white/10">
        <TechMarquee />
      </div>

    </div><Analytics /></>
  );
}