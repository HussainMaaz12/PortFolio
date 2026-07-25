import type { Metadata } from "next";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Maaz | Get In Touch",
  description:
    "Reach out to Maaz for internships, freelance projects, and full-time software engineering roles.",
};

const contactLinks = [
  { label: "Email", href: "mailto:work.mh12@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hussainmaaz", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/HussainMaaz12", icon: Github },
  { label: "WhatsApp", href: "https://wa.me/916207030626", icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <div className="min-h-full bg-background">
      <section className="mx-auto max-w-[640px] px-5 pb-20 pt-16 text-center md:pb-28 md:pt-24">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-[#c6bfff]">Get in touch</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.045em] text-text md:text-5xl">Contact</h1>
        <p className="mt-3 font-body text-base leading-7 text-[#b3b1ba]">Open to internships, freelance projects, and full-time software engineering roles.</p>
        <div className="mt-10 text-left md:mt-12"><ContactForm /></div>
        <div className="mt-12 flex items-start justify-center gap-6 sm:gap-8">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex flex-col items-center gap-2 font-label text-xs font-medium uppercase tracking-[0.08em] text-[#b3b1ba] transition-colors hover:text-text">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#373540] bg-[#15151b] transition-all group-hover:border-accent group-hover:bg-[#211f2b] group-hover:text-white"><Icon size={18} aria-hidden="true" /></span>
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
