"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="03 — Skills" title="The tools of the craft." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative border border-grey-800 p-6 hover:border-grey-700 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent line that grows on hover */}
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-silver/50 transition-all duration-500 ease-out" />

              <h3 className="text-[10px] tracking-[0.35em] uppercase text-grey-500 group-hover:text-silver mb-5 font-body transition-colors duration-300">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((skill, j) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 + j * 0.04, ease: "easeOut" }}
                    className="flex items-center gap-3 text-sm text-grey-400 group-hover:text-grey-300 font-body transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-grey-700 group-hover:bg-grey-500 flex-shrink-0 transition-colors duration-300" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
