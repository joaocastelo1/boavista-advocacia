import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { diferenciais } from "@/constants/diferenciais";

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="section-pad relative overflow-hidden bg-muted/40 dark:bg-ink-900/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 size-[420px] rounded-full bg-gold-400/[0.06] blur-[130px]"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Por que nos escolher"
          title="Diferenciais que fazem a diferença no seu caso"
          description="Mais do que processos, construímos relações de confiança. Conheça o que torna nosso atendimento único."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 4) * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-card">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/[0.08] text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-ink-950">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.3}>
            <article className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold-400/40 bg-gradient-to-br from-gold-400/15 via-gold-400/5 to-transparent p-6 text-center">
              <p className="font-cinzel text-4xl font-semibold text-gold-400">100%</p>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-foreground/80">
                dos atendimentos conduzidos com compromisso e responsabilidade
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
