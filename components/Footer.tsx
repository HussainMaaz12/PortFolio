import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/HussainMaaz12", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/hussainmaaz",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:work.mh12@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222228] bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-6 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold tracking-[-0.03em] text-text transition-colors hover:text-accent"
            >
              Maaz<span className="text-accent">.</span>
            </Link>
            <p className="mt-2.5 max-w-xs font-body text-xs sm:text-sm leading-6 text-[#b3b1ba]">
              Full-stack developer and UI/UX designer building thoughtful, accessible web products.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-heading text-xs sm:text-sm font-semibold text-[#b3b1ba] transition-colors hover:text-text"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#30303a] bg-[#16161d] text-[#b3b1ba] transition-all hover:border-accent hover:bg-[#1a1a23] hover:text-text"
              >
                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#222228] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-[#a09eb0]">
            © {year} Hussain Maaz. All rights reserved.
          </p>
          <p className="font-label text-[11px] text-[#a09eb0]">
            Designed &amp; Built with React, Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
