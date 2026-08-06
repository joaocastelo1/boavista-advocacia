import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { timelineSteps } from "@/constants/timeline";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-pad relative overflow-hidden bg-muted/40 dark:bg-ink-900/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-10 size-[380px] rounded-full bg-gold-400/[0.05] blur-[120px]"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Um caminho claro e transparente até o resultado"
          description="Você acompanha cada etapa do seu caso. Processo simples, comunicação constante e nenhuma surpresa pelo caminho."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[26px] w-px bg-gradient-to-b from-gold-400/60 via-gold-400/25 to-transparent md:left-1/2"
          />

          <ol className="space-y-10 md:space-y-14">
            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const Icon = step.icon;
              const content = <StepContent step={step} align={isLeft ? "right" : "left"} />;

              return (
                <li key={step.number} className="relative">
                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    className="md:grid md:grid-cols-[1fr_3.5rem_1fr] md:items-center"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-8 left-[26px] z-10 -translate-x-1/2 md:static md:col-start-2 md:row-start-1 md:mx-auto md:translate-x-0"
                    >
                      <span className="flex size-12 items-center justify-center rounded-full border border-gold-400/50 bg-background text-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        <Icon className="size-5" />
                      </span>
                    </span>

                    <div className="ml-16 md:hidden">{content}</div>

                    <div
                      className={cn(
                        "hidden md:row-start-1 md:block",
                        isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-3 md:pl-12"
                      )}
                    >
                      {content}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepContent({
  step,
  align = "left",
}: {
  step: (typeof timelineSteps)[number];
  align?: "left" | "right";
}) {
  return (
    <div className={cn(align === "right" && "md:flex md:flex-col md:items-end")}>
      <span className="font-cinzel text-2xl font-semibold text-gold-400/40">{step.number}</span>
      <h3 className="mt-1.5 font-display text-xl font-semibold md:text-2xl">{step.title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        {step.description}
      </p>
    </div>
  );
}
