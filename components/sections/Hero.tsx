"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { CONTACT } from "@/lib/data";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

const ROLES = ["Software Engineer", "Visiting Lecturer", "Researcher", "Photographer"];

const ITEM_TRANSITION = { duration: 0.75, ease: "easeOut" as const };

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Particle constellation */}
      <ParticleBackground />

      {/* Radial glow at centre */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(192,192,192,0.05)_0%,_transparent_70%)]" />

      {/* Edge vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-grey-800 z-10 hidden md:block" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-grey-800 z-10 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-grey-800 z-10 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-grey-800 z-10 hidden md:block" />

      {/* Content */}
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow with flanking lines */}
        <motion.div variants={stagger.item} transition={ITEM_TRANSITION} className="flex items-center gap-5 mb-10">
          <div className="h-px w-10 bg-grey-700" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-grey-500 font-body">
            Based in Sri Lanka
          </p>
          <div className="h-px w-10 bg-grey-700" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={stagger.item}
          transition={ITEM_TRANSITION}
          className="font-display font-light text-white leading-[0.95] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(4rem, 13vw, 10rem)" }}
        >
          Shavin
          <br />
          <span className="text-grey-300 italic">Fernando</span>
        </motion.h1>

        {/* Role pills — refined */}
        <motion.div
          variants={stagger.item}
          transition={ITEM_TRANSITION}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
        >
          {ROLES.map((role, i) => (
            <span key={role} className="flex items-center gap-3 font-body">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-grey-700" />}
              <span className="text-[11px] tracking-[0.25em] uppercase text-grey-500">
                {role}
              </span>
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={stagger.item}
          transition={ITEM_TRANSITION}
          className="font-display text-xl md:text-2xl text-grey-400 font-light italic max-w-lg leading-relaxed mb-12"
        >
          Engineer by trade.
          <br />
          Creator at heart.
        </motion.p>

        {/* Thin divider */}
        <motion.div
          variants={stagger.item}
          transition={ITEM_TRANSITION}
          className="w-px h-10 bg-grey-800 mb-10"
        />

        {/* CTAs */}
        <motion.div
          variants={stagger.item}
          transition={ITEM_TRANSITION}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <button
            onClick={scrollToAbout}
            className="group relative px-10 py-4 bg-white text-black text-[11px] tracking-[0.3em] uppercase font-body overflow-hidden min-w-[180px] transition-colors duration-300 hover:bg-grey-100"
          >
            View Work
          </button>
          <a
            href="/cv/Shavin_Fernando_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-10 py-4 border border-grey-700 text-grey-300 text-[11px] tracking-[0.3em] uppercase font-body hover:border-silver hover:text-white transition-all duration-500 min-w-[180px] justify-center"
          >
            <Download size={12} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={stagger.item} transition={ITEM_TRANSITION} className="flex items-center gap-5">
          {[
            { href: CONTACT.github,      icon: <GithubIcon size={17} />,    label: "GitHub" },
            { href: CONTACT.linkedin,    icon: <LinkedinIcon size={17} />,  label: "LinkedIn" },
            { href: CONTACT.instagram,   icon: <InstagramIcon size={17} />, label: "Instagram" },
            { href: CONTACT.facebook,    icon: <FacebookIcon size={17} />,  label: "Facebook" },
            { href: `mailto:${CONTACT.email}`, icon: <Mail size={16} />,    label: "Email" },
          ].map(({ href, icon, label }, i, arr) => (
            <span key={label} className="flex items-center gap-5">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-grey-600 hover:text-grey-200 transition-colors duration-300"
              >
                {icon}
              </a>
              {i < arr.length - 1 && <div className="w-px h-4 bg-grey-800" />}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 text-grey-700 hover:text-grey-400 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
