"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  eyebrowAccent?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleClassName,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <p className="eyebrow flex items-center gap-3 text-gold-400">
          <span className="inline-block h-px w-8 bg-gold-400/60" aria-hidden="true" />
          {eyebrow}
          {align === "center" && (
            <span className="inline-block h-px w-8 bg-gold-400/60" aria-hidden="true" />
          )}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "mt-5 font-display text-3xl leading-tight font-semibold text-foreground md:text-4xl lg:text-[2.75rem]",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
