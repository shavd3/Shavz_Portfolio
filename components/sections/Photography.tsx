"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PHOTOS } from "@/lib/data";

// Grid layout: assign span sizes to create a compelling masonry feel
const SPANS = [
  "col-span-2 row-span-2", // 01 canon lens — featured tall
  "col-span-1 row-span-1", // 02 tech flatlay
  "col-span-1 row-span-1", // 03 calla lily
  "col-span-1 row-span-2", // 04 night street — tall
  "col-span-2 row-span-1", // 05 train promenade — wide
  "col-span-1 row-span-2", // 06 rooftop sunset — tall
  "col-span-2 row-span-1", // 07 city skyline — wide
  "col-span-1 row-span-1", // 08 train overhead
  "col-span-1 row-span-1", // 09 sea from train
  "col-span-2 row-span-1", // 10 port city — wide
  "col-span-1 row-span-1", // 11 blood moon
  "col-span-1 row-span-1", // 12 colonial building
];

export default function Photography() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = PHOTOS.map((p) => ({
    src: p.src,
    alt: p.alt,
    width: p.width,
    height: p.height,
  }));

  return (
    <SectionWrapper id="photography" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <SectionHeading
            label="07 — Photography"
            title="A different kind of lens."
            className="mb-0"
          />
          <p className="font-body text-sm text-grey-500 max-w-xs leading-relaxed">
            Photography has sharpened my eye for composition, light, and the decisive moment,
            instincts that carry directly into my engineering work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-2">
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => { setIndex(i); setOpen(true); }}
              className={`${SPANS[i]} relative overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-silver`}
              aria-label={photo.alt}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.category}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Click hint */}
        <p className="mt-6 text-center text-xs tracking-[0.3em] uppercase text-grey-700 font-body">
          Click any image to view full size
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.97)" },
        }}
      />
    </SectionWrapper>
  );
}
