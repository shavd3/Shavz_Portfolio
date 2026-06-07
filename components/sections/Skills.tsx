import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="03 — Skills" title="The tools of the craft." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category} className="border border-grey-800 p-6 hover:border-grey-600 transition-colors duration-500">
              <h3 className="text-xs tracking-[0.3em] uppercase text-silver mb-5 font-body">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-grey-300 font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-grey-600 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
