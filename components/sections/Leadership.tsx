"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXTRACURRICULAR } from "@/lib/data";
import type { ExtracurricularItem } from "@/lib/data";

const CATEGORY_COLOURS: Record<ExtracurricularItem["category"], string> = {
  Leadership:  "text-grey-200 border-grey-600",
  Community:   "text-grey-400 border-grey-700",
  Achievement: "text-silver  border-silver/40",
  Creative:    "text-grey-300 border-grey-600",
};

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="07 — Leadership" title="Beyond the keyboard." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {EXTRACURRICULAR.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="group relative border border-grey-800 p-6 hover:border-grey-700 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Top accent sweep */}
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-silver/40 transition-all duration-500 ease-out" />

              {/* Category badge */}
              <span className={`text-[9px] tracking-[0.3em] uppercase font-body border px-2 py-0.5 self-start mb-4 ${CATEGORY_COLOURS[item.category]}`}>
                {item.category}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl font-light text-white leading-snug mb-1 group-hover:text-grey-100 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Org + period */}
              <p className="text-[11px] text-grey-500 font-body mb-4">
                {item.org}
                {item.period && (
                  <span className="text-grey-700"> · {item.period}</span>
                )}
              </p>

              {/* Description */}
              <p className="text-sm text-grey-500 font-body leading-relaxed flex-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
