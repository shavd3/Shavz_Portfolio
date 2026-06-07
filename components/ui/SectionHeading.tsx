import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <p className="text-xs tracking-[0.3em] uppercase text-grey-400 mb-4 font-body">
        {label}
      </p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
        {title}
      </h2>
      <div className="mt-6 h-px w-16 bg-silver opacity-40" />
    </div>
  );
}
