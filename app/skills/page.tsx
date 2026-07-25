import type { Metadata } from "next";
import { Code2, Cpu, Database, Layout, Server, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills — Maaz | Technical Stack & Core Competencies",
  description:
    "Explore the technical skills of Maaz, including JavaScript, Python, MERN stack, Django, REST APIs, MongoDB, MySQL, and Docker.",
};

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    description: "Core programming and markup languages.",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "Building responsive, component-led user interfaces.",
    skills: ["React.js", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing fast, scalable server-side systems and APIs.",
    skills: ["Node.js", "Express.js", "Django", "REST APIs", "Socket.io"],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    description: "Database modeling, indexing, and cloud deployment.",
    skills: ["MongoDB", "MySQL", "Vercel", "Render", "Docker (basics)"],
  },
  {
    title: "Engineering Concepts",
    icon: Cpu,
    description: "Architectural and implementation patterns.",
    skills: ["JWT Authentication", "API Integration", "Real-time Communication", "Responsive Design", "Data Structures & Algorithms"],
  },
  {
    title: "Tools & Soft Skills",
    icon: UserCheck,
    description: "Developer tooling and professional competencies.",
    skills: ["Git / GitHub", "VS Code", "Postman", "Figma", "Analytical Thinking", "Problem Solving", "Leadership & Coordination"],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-full bg-background">
      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">
          Technical stack
        </p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.045em] text-text md:text-5xl">
          Technical Skills &amp; Concepts
        </h1>
        <p className="mt-3 max-w-xl font-body text-base leading-7 text-[#b3b1ba]">
          Comprehensive taxonomy of technical competencies, languages, frameworks, and developer tooling extracted directly from my professional work.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, description, skills }) => (
            <article
              key={title}
              className="flex flex-col justify-between rounded-xl border border-[#222228] bg-[#16161d] p-6 transition-all hover:border-[#6c5ce7]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#30303a] bg-[#111415] text-[#c6bfff]">
                    <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-base font-semibold tracking-[-0.02em] text-text">
                      {title}
                    </h2>
                    <p className="font-body text-xs text-[#a09eb0]">{description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#30303a] bg-[#111415] px-3 py-1.5 font-label text-xs font-medium text-[#c8c4d7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
