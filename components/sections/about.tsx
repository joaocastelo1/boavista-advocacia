import Image from "next/image";
import { ArrowRight, Brain, CheckCircle2, Globe2, HeartHandshake, Target } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Parallax } from "@/components/animations/parallax";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Sigilo e confidencialidade absolutos",
  "Honorários transparentes e contratados",
  "Atualização constante do andamento do caso",
  "Atendimento presencial e online",
];

const qualifiers = [
  {
    icon: HeartHandshake,
    label: "Atendimento humanizado",
    description: "Escuta atenta e acolhimento em cada contato.",
  },
  {
    icon: Brain,
    label: "Inteligência jurídica",
    description: "Raciocínio estratégico aplicado a cada caso.",
  },
  {
    icon: Target,
    label: "Foco em resultados",
    description: "Compromisso real com o melhor desfecho possível.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[420px] rounded-full bg-gold-400/5 blur-[120px]"
      />

      <div className="container-max grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <Parallax offset={40}>
            <Reveal direction="right">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-5 -left-5 h-28 w-28 rounded-tl-3xl border-t-2 border-l-2 border-gold-400/50"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-5 -bottom-5 h-28 w-28 rounded-br-3xl border-r-2 border-b-2 border-gold-400/50"
                />
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
                  <Image
                    src="/images/adv.jpg"
                    alt="Foto do escritório Boavista Advocacia"
                    width={880}
                    height={1040}
                    className="h-[520px] w-full object-cover md:h-[620px]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
                  />
                </div>

                <div className="absolute right-4 bottom-6 left-4 flex items-center justify-between rounded-xl border border-gold-400/30 bg-ink-950/80 px-5 py-4 backdrop-blur-xl sm:left-auto sm:right-6 sm:bottom-8 sm:w-[360px]">
                  <div>
                    <p className="font-display text-xl font-semibold text-gold-400">
                      Atendimento
                    </p>
                    <p className="text-xs tracking-wide text-ivory-100/70">
                      próximo e humanizado
                    </p>
                  </div>
                  <span aria-hidden="true" className="h-12 w-px bg-white/10" />
                  <div>
                    <p className="font-display text-xl font-semibold text-gold-400">Estratégia</p>
                    <p className="text-xs tracking-wide text-ivory-100/70">técnica e ousada</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre o Escritório"
            title="Excelência jurídica com atendimento verdadeiramente humanizado"
            description="Com atuação em Codó – MA e em todo o Brasil, o Boavista Advocacia une rigor técnico e atendimento humanizado em cada caso, do primeiro contato à decisão final."
          />

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-gold-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {qualifiers.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                    <span className="flex size-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/[0.08] text-gold-400">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="text-xs leading-snug font-medium text-foreground md:text-sm">
                      {item.label}
                    </p>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
              <div className="col-span-3 flex items-center gap-4 rounded-xl border border-gold-400/25 bg-gold-400/[0.06] px-5 py-4">
                <Globe2 className="size-6 shrink-0 text-gold-400" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground">
                  Atendimento Nacional — presencial e online em todo o Brasil
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10">
              <Button asChild variant="outline" size="lg">
                <a href="#perfil">
                  Conhecer o perfil profissional
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
