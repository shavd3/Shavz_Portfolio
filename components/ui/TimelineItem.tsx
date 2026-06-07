"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex gap-8">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0 w-px relative">
        <div className={cn(
          "w-2.5 h-2.5 rounded-full border flex-shrink-0 mt-1.5",
          experience.current
            ? "border-silver bg-silver"
            : "border-grey-600 bg-transparent"
        )} />
        {!isLast && (
          <div className="flex-1 w-px bg-grey-800 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={cn("pb-12 flex-1", isLast && "pb-0")}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-light text-white">
              {experience.role}
            </h3>
            <p className="text-sm text-grey-400 font-body mt-0.5">{experience.company}</p>
          </div>
          <div className="text-right">
            <span className="text-xs tracking-[0.15em] uppercase text-grey-500 font-body">
              {experience.period}
            </span>
            {experience.current && (
              <div className="mt-1 flex justify-end">
                <span className="text-[10px] tracking-[0.2em] uppercase bg-grey-800 text-silver px-2 py-0.5 font-body">
                  Current
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-grey-400 font-body text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-grey-500 hover:text-grey-200 transition-colors duration-300 font-body mb-4"
        >
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
          />
          {expanded ? "Less detail" : "More detail"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-2.5 overflow-hidden"
            >
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-grey-400 font-body leading-relaxed">
                  <span className="text-silver mt-1.5 flex-shrink-0 text-[8px]">◆</span>
                  {bullet}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.15em] uppercase text-grey-500 border border-grey-800 px-3 py-1 font-body hover:border-grey-600 hover:text-grey-300 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
