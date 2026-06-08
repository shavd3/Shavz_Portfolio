import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATION } from "@/lib/data";
import { Award, BookOpen, ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <SectionWrapper id="research" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="05 — Research" title="Published work." />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
          {/* Award callout */}
          <div className="space-y-5">
            {/* Award — silver accent treatment */}
            <div className="relative border border-silver/20 bg-grey-900/60 p-8 overflow-hidden group hover:border-silver/40 transition-colors duration-500">
              {/* Shimmer line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/60 to-transparent" />
              <div className="flex items-start gap-3 mb-4">
                <Award size={14} className="text-silver mt-0.5 flex-shrink-0" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-silver/70 font-body">
                  Recognition
                </p>
              </div>
              <p className="font-display text-xl font-light text-white leading-snug">
                {PUBLICATION.award}
              </p>
            </div>

            {/* Conference */}
            <div className="border border-grey-800 p-8 hover:border-grey-700 transition-colors duration-300">
              <p className="text-[10px] tracking-[0.35em] uppercase text-grey-600 font-body mb-3">
                Venue
              </p>
              <p className="font-body text-sm text-grey-400 leading-relaxed mb-4">
                {PUBLICATION.conference}
              </p>
              <p className="font-display text-4xl font-light text-grey-700">
                IEEE · {PUBLICATION.year}
              </p>
            </div>
          </div>

          {/* Publication detail */}
          <div className="border border-grey-800 p-10 relative">
            <div className="absolute -top-3 left-6 bg-grey-950 px-2">
              <BookOpen size={14} className="text-grey-500" />
            </div>

            <p className="text-xs tracking-[0.3em] uppercase text-grey-500 font-body mb-6">
              Publication
            </p>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight mb-8">
              {PUBLICATION.title}
            </h3>

            <div className="h-px bg-grey-800 mb-8" />

            <p className="font-body text-sm text-grey-400 leading-relaxed mb-8">
              {PUBLICATION.abstract}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Deep Learning", "ResNet50", "LSTM", "CNN", "Grad-CAM", "Explainable AI", "Cryptocurrency"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-grey-400 bg-grey-900 border border-grey-800 px-2.5 py-1 font-body rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {PUBLICATION.url && (
              <a
                href={PUBLICATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-body border border-grey-700 text-grey-300 px-6 py-3 hover:border-silver hover:text-white transition-all duration-300 group"
              >
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                View on IEEE Xplore
              </a>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
