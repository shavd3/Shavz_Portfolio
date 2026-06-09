import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEACHING_MODULES, TEACHING_STATS } from "@/lib/data";

export default function Teaching() {
  return (
    <SectionWrapper id="teaching">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="06 — Teaching" title="Shaping the next generation." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — context */}
          <div>
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-grey-500 font-body mb-2">
                Institution
              </p>
              <p className="font-display text-2xl font-light text-white">
                {TEACHING_STATS.institution}
              </p>
              <p className="font-body text-sm text-grey-500 mt-1">
                {TEACHING_STATS.affiliation}
              </p>
            </div>

            <p className="font-body text-grey-300 text-sm leading-relaxed mb-10">
              As a Visiting Lecturer, I teach across five modules to students from first year through
              to final year. My approach combines rigorous fundamentals with real-world context,
              drawing directly from my professional experience to make enterprise-level concepts
              accessible and relevant.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 border-t border-grey-800 pt-8">
              <div>
                <p className="font-display text-4xl font-light text-white">
                  {TEACHING_STATS.students}
                </p>
                <p className="text-xs tracking-[0.1em] uppercase text-grey-500 font-body mt-1">
                  Students
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-white">
                  {TEACHING_STATS.classesPerWeek}
                </p>
                <p className="text-xs tracking-[0.1em] uppercase text-grey-500 font-body mt-1">
                  Classes / week
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-white">
                  {TEACHING_STATS.modules}
                </p>
                <p className="text-xs tracking-[0.1em] uppercase text-grey-500 font-body mt-1">
                  Modules
                </p>
              </div>
            </div>
          </div>

          {/* Right — modules */}
          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] uppercase text-grey-500 font-body mb-6">
              Modules Taught
            </p>
            {TEACHING_MODULES.map((mod, i) => (
              <div
                key={mod.name}
                className="flex items-center justify-between border border-grey-800 px-6 py-4 hover:border-grey-600 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-lg font-light text-grey-700 group-hover:text-grey-600 transition-colors w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-grey-200 group-hover:text-white transition-colors duration-300">
                    {mod.name}
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-grey-600 font-body">
                  {mod.level}
                </span>
              </div>
            ))}

            {/* Additional activities */}
            <div className="mt-6 border border-grey-800 px-6 py-5 bg-grey-900">
              <p className="text-xs tracking-[0.3em] uppercase text-silver font-body mb-3">
                Beyond the Classroom
              </p>
              <ul className="space-y-2">
                {[
                  "Final-year dissertation evaluation & viva assessment",
                  "Project mentorship for final-year students",
                  "Mock interviews for career preparation",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-grey-400 font-body">
                    <span className="text-grey-700 mt-1.5 flex-shrink-0 text-[8px]">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
