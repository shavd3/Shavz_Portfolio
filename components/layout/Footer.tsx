import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-grey-800 px-6 md:px-12 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg font-light text-grey-400 tracking-wide">
          Shavin Fernando
        </p>

        <div className="flex items-center gap-6">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-grey-400 hover:text-white transition-colors duration-300"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-grey-400 hover:text-white transition-colors duration-300"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="text-grey-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs tracking-[0.15em] uppercase text-grey-600 font-body">
          © {new Date().getFullYear()} Shavin Fernando
        </p>
      </div>
    </footer>
  );
}
