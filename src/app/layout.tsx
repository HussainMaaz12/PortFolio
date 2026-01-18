import type { Metadata } from "next";
import { Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar"; 
// import CustomCursor from "@/components/layout/CustomCursor";
import KonamiListener from "@/game/KonamiListener";
import { Analytics } from "@vercel/analytics/next";

// FORCE LOADING: We remove the 'variable' strategy and just load them directly
const mainFont = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"]
});

const retroFont = VT323({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-retro" // We keep this one as a variable for special headers
});

export const metadata: Metadata = {
  title: "Dev Portfolio | Player 1 Start",
  description: "Interactive 3D Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        // APPLY FONT DIRECTLY HERE
        className={`${mainFont.className} antialiased overflow-x-hidden bg-zinc-950 text-slate-200 selection:bg-neon-pink selection:text-white ${retroFont.variable}`}
      >
        
        {/* <CustomCursor /> */}
        <Navbar />

        <main className="relative w-full min-h-screen flex flex-col font-sans">
             {children}
        </main>
        
        <KonamiListener />

        <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <Analytics />
      
      </body>
    </html>
  );
}