"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#222228] bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5 md:px-6">
        <Link
          href="/"
          aria-label="Maaz home"
          className="shrink-0 font-heading text-lg font-bold tracking-[-0.03em] text-text transition-colors hover:text-accent"
        >
          Maaz<span className="text-accent">↗</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-4 sm:gap-6"
        >
          {navigation.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 pb-0.5 font-heading text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "border-accent text-text"
                    : "border-transparent text-[#b3b1ba] hover:border-[#474554] hover:text-text"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-[#30303a] bg-[#16161d] px-3 py-1.5 font-body text-xs text-[#c6bfff] lg:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships &amp; freelance work
          </span>
          <a
            href="/resume.pdf"
            download="Maaz_Hussain_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-4 py-2 font-heading text-xs font-semibold text-[#faf6ff] shadow-[0_4px_16px_rgba(108,92,231,0.25)] transition-all hover:bg-[#5847d2]"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
