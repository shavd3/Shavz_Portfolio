import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATION } from "@/lib/data";
import { Award, BookOpen } from "lucide-react";

export default function Research() {
  return (
    <SectionWrapper id="research" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="05 — Research" title="Published work." />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
          {/* Award callout */}
          <div className="space-y-6">
            <div className="border border-grey-700 p-8 relative">
              <div className="absolute -top-3 left-6 bg-grey-950 px-2">
                <Award size={14} className="text-silver" />
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-grey-500 font-body mb-3">
                Recognition
              </p>
              <p className="font-display text-xl font-light text-white leading-snug">
                {PUBLICATION.award}
              </p>
            </div>

            <div className="border border-grey-800 p-8">
              <p className="text-xs tracking-[0.3em] uppercase text-grey-500 font-body mb-3">
                Conference
              </p>
              <p className="font-body text-sm text-grey-300 leading-relaxed">
                {PUBLICATION.conference}
              </p>
              <p className="font-display text-3xl font-light text-grey-700 mt-3">
                {PUBLICATION.year}
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

            <div className="flex flex-wrap gap-3">
              {["Deep Learning", "ResNet50", "LSTM", "CNN", "Grad-CAM", "Explainable AI", "Cryptocurrency"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase text-grey-600 border border-grey-800 px-3 py-1 font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
