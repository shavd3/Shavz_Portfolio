"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group border border-grey-800 p-8 hover:border-grey-600 transition-all duration-500 relative flex flex-col",
        project.featured && "lg:col-span-1"
      )}
    >
      {/* Highlight badge */}
      {project.highlight && (
        <div className="mb-5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-silver border border-grey-700 px-3 py-1 font-body">
            {project.highlight}
          </span>
        </div>
      )}

      {/* Index */}
      <span className="font-display text-5xl font-light text-grey-800 group-hover:text-grey-700 transition-colors duration-500 mb-4 leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4 leading-tight">
        {project.title}
      </h3>

      <p className="font-body text-sm text-grey-400 leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] tracking-[0.1em] uppercase text-grey-600 font-body"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 border-t border-grey-800 pt-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-grey-500 hover:text-white transition-colors duration-300 font-body"
          >
            <GithubIcon size={13} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-grey-500 hover:text-white transition-colors duration-300 font-body"
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && (
          <span className="text-xs tracking-[0.15em] uppercase text-grey-700 font-body">
            Private / Academic
          </span>
        )}
      </div>
    </motion.div>
  );
}
