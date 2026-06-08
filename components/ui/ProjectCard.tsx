"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
      className={cn(
        "group relative border border-grey-800 p-8 hover:border-grey-600 transition-all duration-500 flex flex-col overflow-hidden"
      )}
    >
      {/* Left accent border that grows on hover */}
      <div className="absolute left-0 top-0 w-px h-0 group-hover:h-full bg-silver/60 transition-all duration-700 ease-out" />

      {/* Highlight badge */}
      {project.highlight && (
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-silver font-body">
            <span className="w-3 h-px bg-silver" />
            {project.highlight}
          </span>
        </div>
      )}

      {/* Index number */}
      <span className="font-display text-6xl font-light leading-none select-none mb-5 block"
        style={{ color: "rgba(255,255,255,0.05)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-[1.65rem] font-light text-white mb-4 leading-snug group-hover:text-grey-100 transition-colors duration-300">
        {project.title}
      </h3>

      <p className="font-body text-sm text-grey-500 leading-[1.75] flex-1 mb-7">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-7">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] tracking-[0.08em] text-grey-400 font-body bg-grey-900 border border-grey-800 px-2 py-0.5 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-5 border-t border-grey-800/80 pt-5 mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-grey-600 hover:text-silver transition-colors duration-300 font-body"
          >
            <GithubIcon size={12} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-grey-600 hover:text-silver transition-colors duration-300 font-body"
          >
            <ExternalLink size={12} />
            Live
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && (
          <span className="text-[11px] tracking-[0.2em] uppercase text-grey-800 font-body">
            Private / Academic
          </span>
        )}
        {/* Arrow decoration top-right */}
        <div className="ml-auto text-grey-800 group-hover:text-grey-600 transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}
