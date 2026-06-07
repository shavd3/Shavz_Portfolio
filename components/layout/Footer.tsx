import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 pt-16 pb-10 overflow-hidden">
      {/* Top decorative rule */}
      <div className="flex items-center gap-6 mb-14">
        <div className="flex-1 h-px bg-grey-800" />
        <span className="font-display text-xs text-grey-700 tracking-[0.3em] uppercase">SF</span>
        <div className="flex-1 h-px bg-grey-800" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Name */}
        <div>
          <p className="font-display text-xl font-light text-grey-500 tracking-wide">
            Shavin Fernando
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-grey-700 font-body mt-1">
            Engineer · Lecturer · Photographer
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 border border-grey-800 hover:border-grey-600 flex items-center justify-center text-grey-500 hover:text-white transition-all duration-300"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 border border-grey-800 hover:border-grey-600 flex items-center justify-center text-grey-500 hover:text-white transition-all duration-300"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="w-9 h-9 border border-grey-800 hover:border-grey-600 flex items-center justify-center text-grey-500 hover:text-white transition-all duration-300"
          >
            <Mail size={14} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-grey-700 font-body">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
