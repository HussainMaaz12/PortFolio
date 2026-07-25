import type { Metadata } from "next";
import { Braces, Lightbulb, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Maaz | Full-Stack Developer & UI/UX Designer",
  description:
    "Learn more about Maaz, a hybrid designer-developer creating accessible and scalable digital systems.",
};

const specialties = [
  {
    title: "Web Application Development",
    description: "Scalable, accessible digital products from interface to backend.",
    icon: Braces,
  },
  {
    title: "UI/UX Design",
    description: "Intentional product experiences built around people and purpose.",
    icon: Palette,
  },
  {
    title: "Problem Solving",
    description: "Practical systems for complex real-world challenges.",
    icon: Lightbulb,
  },
];

const timeline = [
  {
    label: "2024–2027 (Expected)",
    title: "BCA — Computer Application (CGPA: 8.2 / 10)",
    subtitle: "ST Xavier's College of Management & Technology",
    description: "Affiliated to Aryabhata Knowledge University. Coursework: Data Structures & Algorithms, DBMS, MERN, Computer Networks, OOP with Java, Software Engineering.",
  },
  {
    label: "Recognition",
    title: "AI/ML Program — IIT Ropar",
    subtitle: "IIT Ropar Applied Machine Learning Track",
    description: "Hands-on coursework in machine learning fundamentals and generative AI integration.",
  },
  {
    label: "Achievement",
    title: "1st Place — Web Development Competition",
    subtitle: "Amity University Web Hackathon",
    description: "Awarded first place for designing and building an accessible, high-performance web platform.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">
          About
        </p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.045em] text-text md:text-5xl">
          Maaz Hussain
        </h1>
        <p className="mt-3 max-w-xl font-body text-base leading-7 text-[#b3b1ba]">
          Full Stack Developer Intern specializing in MERN, Django, and REST APIs.
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#30303a] bg-[#16161d] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.4)]">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#222228] bg-[radial-gradient(circle_at_15%_20%,rgba(108,92,231,0.32),transparent_36%),linear-gradient(135deg,#1e2021,#111415_68%)] p-6">
                <div className="relative">
                  <p className="font-label text-xs uppercase tracking-[0.16em] text-[#c6bfff]">
                    Professional Summary
                  </p>
                  <p className="font-heading mt-3 text-lg font-semibold leading-7 tracking-[-0.03em] text-text">
                    Second-year BCA student with hands-on experience developing full-stack web applications.
                  </p>
                </div>
                <div className="relative rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                  <p className="font-label text-xs uppercase tracking-[0.12em] text-[#c6bfff]">
                    Current Status
                  </p>
                  <p className="font-body text-xs text-[#d0ced6] mt-1">
                    Seeking Full Stack Developer internship opportunities to apply practical development skills in real-world environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-2xl space-y-4 font-body text-sm leading-7 text-[#c8c4d7]">
              <p>
                I&apos;m a second-year Bachelor of Computer Applications (BCA) student at St. Xavier&apos;s College of Management &amp; Technology (Aryabhata Knowledge University) with a strong academic standing of <span className="font-semibold text-text">8.2 / 10 CGPA</span>.
              </p>
              <p>
                My technical foundation spans across the MERN stack (MongoDB, Express, React, Node.js), Django, Python, Socket.io real-time systems, and REST API engineering. I focus on clean architecture, responsive design, secure authentication (JWT), and seamless database integration.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {specialties.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#222228] bg-[#16161d] p-5 transition-colors hover:border-[#474554]"
                >
                  <Icon size={18} strokeWidth={1.6} className="text-[#c6bfff]" aria-hidden="true" />
                  <h2 className="font-heading mt-5 text-sm font-semibold tracking-[-0.02em] text-text">
                    {title}
                  </h2>
                  <p className="mt-2 font-body text-xs leading-5 text-[#aaaaaa]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#222228]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-6 md:py-28">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">
            Education &amp; Credentials
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-[-0.04em] text-text">Education &amp; Achievements</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timeline.map(({ label, title, subtitle, description }) => (
              <article key={title} className="flex flex-col justify-between rounded-xl border border-[#222228] bg-[#16161d] p-6 transition-all hover:border-[#6c5ce7]/40">
                <div>
                  <p className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#c6bfff]">{label}</p>
                  <h3 className="font-heading mt-4 text-base font-semibold tracking-[-0.02em] text-text">
                    {title}
                  </h3>
                  <p className="font-body text-xs font-medium text-[#8e8b99] mt-1">{subtitle}</p>
                  <p className="mt-3 font-body text-xs leading-6 text-[#aaaaaa]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
