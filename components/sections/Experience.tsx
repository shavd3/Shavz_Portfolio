import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <SectionHeading label="02 — Experience" title={`Where I've\nbeen building.`} />

          <div className="pt-2">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                isLast={i === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
