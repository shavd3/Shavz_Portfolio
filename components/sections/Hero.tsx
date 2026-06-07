"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { CONTACT } from "@/lib/data";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

const ROLES = ["Software Engineer", "Visiting Lecturer", "Researcher", "Photographer"];

const ease = "easeOut" as const;

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
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

      {/* Subtle radial gradient centre glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(192,192,192,0.04)_0%,_transparent_70%)]" />

      {/* Content */}
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={stagger.item}
          className="text-xs tracking-[0.4em] uppercase text-grey-400 mb-8 font-body"
        >
          Based in Sri Lanka
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={stagger.item}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[1.05] tracking-tight mb-6"
        >
          Shavin
          <br />
          <span className="text-grey-200">Fernando</span>
        </motion.h1>

        {/* Role pills */}
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {ROLES.map((role) => (
            <span
              key={role}
              className="text-xs tracking-[0.2em] uppercase text-grey-400 border border-grey-700 px-4 py-2 font-body"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={stagger.item}
          className="font-display text-lg md:text-xl text-grey-300 font-light max-w-xl leading-relaxed mb-12"
        >
          Building enterprise systems by day.
          <br />
          Capturing moments by night.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-body hover:bg-grey-200 transition-colors duration-300 min-w-[160px]"
          >
            View Work
          </button>
          <a
            href="/cv/Shavin_Fernando_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 border border-grey-600 text-grey-200 text-xs tracking-[0.2em] uppercase font-body hover:border-white hover:text-white transition-all duration-300 min-w-[160px] justify-center"
          >
            <Download size={13} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={stagger.item} className="flex items-center gap-6">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-grey-500 hover:text-white transition-colors duration-300"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-grey-500 hover:text-white transition-colors duration-300"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-grey-600 hover:text-grey-300 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
