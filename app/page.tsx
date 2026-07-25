import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Figma,
  Sparkles,
} from "lucide-react";
import { portfolioProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Maaz — Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Maaz, a full-stack developer and UI/UX designer building web products for education and real estate brands.",
};

const specialties = [
  {
    title: "Full-Stack Development",
    description: "Fast, reliable web applications built from interface to API with React, Next.js, Node.js, and Express.",
    icon: Braces,
  },
  {
    title: "UI/UX Design",
    description: "Clear, intentional digital experiences shaped around real user needs in Figma and Tailwind CSS.",
    icon: Figma,
  },
  {
    title: "Data-Driven Systems",
    description: "Useful product dashboards, async queues, and workflows that process data into actionable feedback.",
    icon: Database,
  },
];

const metrics = [
  { label: "Production Projects", value: "6+", icon: Code2 },
  { label: "WCAG Accessibility Score", value: "100%", icon: CheckCircle2 },
  { label: "Hackathon Winner", value: "1st Place", icon: Award },
  { label: "AI/ML Track", value: "IIT Ropar", icon: Sparkles },
];

export default function Home() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <div className="overflow-hidden bg-background">
      <section className="relative isolate border-b border-[#222228]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#6c5ce7]/15 blur-3xl" />

        <div className="mx-auto grid min-h-[580px] max-w-[1200px] items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 px-3 py-1 font-label text-[10px] font-medium uppercase tracking-[0.14em] text-[#c6bfff]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Full-Stack Developer &amp; UI/UX Designer
            </div>

            <h1 className="font-heading mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-text sm:text-5xl md:text-6xl">
              I design and build web products for{" "}
              <span className="bg-gradient-to-r from-[#8172f8] via-[#a29bfe] to-[#c6bfff] bg-clip-text text-transparent">
                education &amp; real estate
              </span>{" "}
              brands.
            </h1>

            <p className="mt-6 max-w-lg font-body text-sm leading-7 text-[#b3b1ba] md:text-base">
              Hi, I&apos;m <span className="font-semibold text-text">Maaz Hussain</span> — a second-year BCA student (<span className="font-semibold text-text">CGPA: 8.2/10</span>) at St. Xavier&apos;s College of Management &amp; Technology.
              I build scalable full-stack web applications using MERN, Django, and REST APIs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-heading text-xs font-semibold text-[#faf6ff] shadow-[0_10px_30px_rgba(108,92,231,0.3)] transition-all hover:bg-[#5847d2] hover:shadow-[0_14px_40px_rgba(108,92,231,0.45)]"
              >
                View Selected Work <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <a
                href="/resume.pdf"
                download="Maaz_Hussain_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#474554] bg-[#16161d] px-5 py-3 font-heading text-xs font-semibold text-text transition-all hover:border-[#928ea0] hover:bg-[#1e2021]"
              >
                Download Resume <ArrowDownRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#30303a] bg-[#141419] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/profile_avatar.png"
                  alt="Maaz — Full-Stack Developer visual avatar"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                  <div>
                    <p className="font-heading text-xs font-semibold text-text">Hussain Maaz</p>
                    <p className="font-label text-[9px] uppercase tracking-[0.1em] text-[#c6bfff]">MERN &amp; Next.js Developer</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-label text-[9px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#222228] bg-[#0d0e12]/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-4 md:px-6">
            {metrics.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#30303a] bg-[#16161d] text-accent">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-lg font-bold text-text">{value}</p>
                  <p className="font-label text-[9px] uppercase tracking-[0.1em] text-[#a09eb0]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-6 md:py-28">
        <p className="font-label text-[10px] font-medium uppercase tracking-[0.16em] text-[#c6bfff]">
          Core competencies
        </p>
        <h2 className="font-heading mt-2 text-3xl font-semibold tracking-[-0.04em] text-text md:text-4xl">
          What I Bring to the Table
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {specialties.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-xl border border-[#222228] bg-[#15151b] p-6 transition-all duration-300 hover:border-[#6c5ce7]/40 hover:bg-[#1a1a23] hover:shadow-[0_12px_40px_rgba(108,92,231,0.12)]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#30303a] bg-[#111415] text-[#c6bfff] transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-heading mt-6 text-base font-semibold tracking-[-0.02em] text-text">
                {title}
              </h3>
              <p className="mt-2 font-body text-xs leading-6 text-[#aaaaaa]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#222228]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-6 md:py-28">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.16em] text-[#c6bfff]">
                Selected work
              </p>
              <h2 className="font-heading mt-2 text-3xl font-semibold tracking-[-0.04em] text-text md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-label text-[10px] uppercase tracking-[0.12em] text-[#c6bfff] transition-colors hover:text-text"
            >
              View all projects <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#222228] bg-[#131318] transition-all duration-300 hover:-translate-y-1 hover:border-[#6c5ce7]/50 hover:shadow-[0_20px_50px_rgba(108,92,231,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#222228] bg-[#1a1a22]">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-transparent to-transparent opacity-40" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-semibold tracking-[-0.025em] text-text transition-colors group-hover:text-[#c6bfff]">
                        {project.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-[#aaaaaa] transition-colors group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2.5 font-body text-xs leading-6 text-[#aaa8b5]">{project.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-[#222228]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#30303a] bg-[#191920] px-2.5 py-1 font-label text-xs font-medium text-[#c8c4d7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

