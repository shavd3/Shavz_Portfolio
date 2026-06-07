import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-grey-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <SectionHeading label="01 — About" title="The person behind the code." />

            <div className="space-y-6 font-body text-grey-300 leading-relaxed">
              <p>
                I&apos;m a Senior Software Engineer at{" "}
                <span className="text-white">IFS R&D International</span>, where I build
                enterprise-grade features across the full IFS Cloud stack — from Aurena client
                pages and projection APIs to PL/SQL business logic, AI/ML integrations, and
                report pipelines. Three years in, I&apos;ve shipped across five components and
                presented to engineering teams spanning the US, Germany, and Sweden.
              </p>
              <p>
                Alongside engineering, I teach as a{" "}
                <span className="text-white">Visiting Lecturer at IIT</span> — an institution
                affiliated with the University of Westminster, UK. I run 4–6 classes a week
                across Database Systems, Java, Python, Web Development, and Client-Server
                Architecture, and mentor final-year students through dissertations and mock
                interviews.
              </p>
              <p>
                I hold a{" "}
                <span className="text-white">BEng in Software Engineering with First Class Honours</span>{" "}
                and have published research in IEEE on explainable deep learning applied to
                cryptocurrency trend prediction — work recognised with a Bronze Research
                Excellence Award.
              </p>
              <p>
                Away from screens, I&apos;m a photographer and event planner — disciplines that
                have sharpened how I think about composition, attention to detail, and
                delivering experiences that feel considered.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-grey-800 pt-10">
              {[
                { value: "3+", label: "Years at IFS R&D" },
                { value: "160+", label: "Students taught" },
                { value: "5", label: "IFS components shipped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-light text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.1em] uppercase text-grey-500 font-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] relative overflow-hidden border border-grey-800">
              <Image
                src="/images/profile.jpg"
                alt="Shavin Fernando"
                fill
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover object-top grayscale contrast-110 brightness-90"
                priority
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-silver opacity-40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-silver opacity-40" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-black border border-grey-700 px-6 py-4">
              <p className="text-xs tracking-[0.2em] uppercase text-grey-400 font-body mb-1">Currently</p>
              <p className="text-sm text-white font-body">IFS R&D International</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
