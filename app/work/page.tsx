import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";
import { portfolioProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Maaz | Selected Projects & Case Studies",
  description:
    "Explore full-stack web development and UI/UX design projects created by Maaz.",
};

export default function WorkPage() {
  return (
    <div className="min-h-full bg-background">
      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">
          Selected projects
        </p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.045em] text-text md:text-5xl">
          Featured Work
        </h1>
        <p className="mt-3 max-w-xl font-body text-base leading-7 text-[#b3b1ba]">
          Selected projects across full-stack development and UI/UX design, delivering
          precise, scalable, and visually striking digital experiences.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group animate-fade-in-up flex flex-col overflow-hidden rounded-xl border border-[#222228] bg-[#14141a] transition-all duration-300 hover:-translate-y-1 hover:border-[#6c5ce7]/50 hover:shadow-[0_20px_50px_rgba(108,92,231,0.15)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Link href={`/work/${project.slug}`} className="block flex-1">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#222228] bg-[#1a1a22]">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141a] via-transparent to-transparent opacity-30" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-heading text-xl font-semibold tracking-[-0.025em] text-text transition-colors group-hover:text-[#c6bfff]">
                      {project.name}
                    </h2>
                    <ExternalLink
                      size={18}
                      className="mt-1 shrink-0 text-[#aaaaaa] transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2.5 font-body text-xs leading-6 text-[#aaa8b5]">
                    {project.description}
                  </p>
                </div>
              </Link>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#222228]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#30303a] bg-[#191920] px-2.5 py-1 font-label text-xs font-medium text-[#c8c4d7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#474554] px-3 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-text transition-all hover:border-accent hover:bg-[#1e2021]"
                  >
                    <Github size={14} aria-hidden="true" /> Repository
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-3 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-[#faf6ff] shadow-[0_4px_16px_rgba(108,92,231,0.2)] transition-all hover:bg-[#5847d2]"
                  >
                    <ExternalLink size={14} aria-hidden="true" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

