"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ label, title, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={cn("mb-16", className)}>
      {/* Label with flanking lines */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-4 mb-5"
      >
        <div className="h-px w-8 bg-grey-700" />
        <p className="text-xs tracking-[0.35em] uppercase text-grey-500 font-body whitespace-nowrap">
          {label}
        </p>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
        style={{ whiteSpace: "pre-line" }}
      >
        {title}
      </motion.h2>

      {/* Animated silver rule */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 64, opacity: 0.45 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-6 h-px bg-silver"
      />
    </div>
  );
}
