import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Github, Layers3 } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((entry) => entry.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Case Study | Maaz`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

function ProjectHero({ project }: { project: PortfolioProject }) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-[#34333d] bg-[#14141a] shadow-[0_24px_80px_rgba(0,0,0,0.5)] md:mt-12">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1c1c24] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto flex h-6 w-1/2 max-w-sm items-center justify-center rounded-md border border-white/10 bg-[#111116] font-label text-[10px] text-[#a09eb0]">
          https://{project.slug}.app
        </div>
      </div>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#16161d]">
        <Image
          src={project.image}
          alt={`${project.name} full case study hero screenshot`}
          fill
          priority
          sizes="(max-width: 1040px) 100vw, 1040px"
          className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((entry) => entry.slug === slug);

  if (!project) notFound();

  const { caseStudy } = project;
  const summary = [
    { label: "Problem", value: caseStudy.problem },
    { label: "Approach", value: caseStudy.approach },
    { label: "Result", value: caseStudy.result },
  ];

  return (
    <div className="min-h-full bg-background">
      <article className="mx-auto max-w-[1040px] px-5 pb-20 pt-10 md:px-6 md:pb-28 md:pt-14">
        <Link href="/work" className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-[#c6bfff] transition-colors hover:text-text">
          <ArrowLeft size={14} aria-hidden="true" /> All work
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">Case study</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.05em] text-text md:text-6xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-7 text-[#b3b1ba] md:text-lg">{project.description}</p>
          <div className="mt-6 flex flex-col gap-4 border-y border-[#26262e] py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-sm text-[#d0ced6]"><span className="text-[#8e8b99]">Role: </span>{caseStudy.role}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-md border border-[#393743] bg-[#16161d] px-2.5 py-1 font-label text-xs font-medium uppercase tracking-[0.08em] text-[#cbc7d8]">{tag}</span>)}
            </div>
          </div>
        </header>

        <ProjectHero project={project} />

        <section className="mt-6 grid divide-y divide-[#292930] overflow-hidden rounded-xl border border-[#292930] bg-[#141419] md:mt-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {summary.map((item) => (
            <div key={item.label} className="p-6 md:p-7">
              <h2 className="font-label text-xs font-semibold uppercase tracking-[0.15em] text-[#c6bfff]">{item.label}</h2>
              <p className="mt-3 font-body text-sm leading-6 text-[#c5c3ca]">{item.value}</p>
            </div>
          ))}
        </section>

        <div className="mx-auto mt-16 max-w-3xl md:mt-24">
          <section>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.15em] text-[#c6bfff]">01</p>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-[-0.04em] text-text md:text-3xl">The Challenge</h2>
            <p className="mt-5 font-body text-base leading-8 text-[#b3b1ba]">{caseStudy.challenge}</p>
          </section>

          <section className="mt-16 md:mt-20">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.15em] text-[#c6bfff]">02</p>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-[-0.04em] text-text md:text-3xl">Architecture</h2>
            <div className="mt-6 rounded-xl border border-[#30303a] bg-[#15151b] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#58536f] bg-[#272337] text-[#d5ceff]"><Layers3 size={17} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-heading text-lg font-medium text-text">{caseStudy.architecture.title}</h3>
                  <p className="mt-2 font-body text-sm leading-6 text-[#aaa8b5]">{caseStudy.architecture.description}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 border-t border-[#2a2931] pt-6 sm:grid-cols-3">
                {caseStudy.architecture.points.map((point) => <li key={point} className="flex items-center gap-2 font-body text-xs font-medium text-[#cfccd5]"><Check size={14} className="text-[#a99cff]" aria-hidden="true" />{point}</li>)}
              </ul>
            </div>
          </section>

          <section className="mt-16 md:mt-20">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.15em] text-[#c6bfff]">03</p>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-[-0.04em] text-text md:text-3xl">Key Features</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {caseStudy.features.map((feature, index) => (
                <div key={feature.title} className="rounded-xl border border-[#30303a] bg-[#15151b] p-6">
                  <span className="font-label text-xs font-semibold text-[#a99cff]">0{index + 1}</span>
                  <h3 className="font-heading mt-4 text-base font-semibold text-text">{feature.title}</h3>
                  <p className="mt-2 font-body text-xs leading-5 text-[#aaa8b5]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#292930] pt-8 sm:flex-row md:mt-20">
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#4b4855] px-6 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.1em] text-text transition-colors hover:bg-[#1c1c23]"><Github size={15} aria-hidden="true" /> View Repository</a>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_6px_20px_rgba(108,92,231,0.3)] transition-colors hover:bg-[#5847d2]">View Live Demo <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </article>
    </div>
  );
}
