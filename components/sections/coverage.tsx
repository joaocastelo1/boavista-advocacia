import { Globe2, Laptop2, MessageCircle, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Parallax } from "@/components/animations/parallax";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BrazilMap } from "./coverage/brazil-map";
import { siteConfig } from "@/lib/site";

const coveragePoints = [
  {
    icon: Globe2,
    title: "27 estados brasileiros",
    description:
      "Atendimento jurídico em todo o território nacional, de Roraima ao Rio Grande do Sul.",
  },
  {
    icon: Laptop2,
    title: "Atendimento 100% online",
    description:
      "Consultas por videoconferência, documentos digitais e acompanhamento pelo WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica total",
    description:
      "Petições, prazos e atos processuais conduzidos com rigor e conformidade em todo o país.",
  },
];

export function Coverage() {
  return (
    <section id="cobertura" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.05] blur-[140px]"
      />

      <div className="container-max grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Cobertura Nacional"
            title="Atendemos em todo o Brasil, de norte a sul"
            description="Sediado em Codó – MA, o Boavista Advocacia está preparado para atuar em qualquer estado, de forma totalmente digital e segura."
          />

          <div className="mt-10 space-y-6">
            {coveragePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={index * 0.1}>
                  <div className="flex items-start gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-gold-400">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{point.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10">
              <Button asChild variant="whatsapp" size="lg">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Falar com o advogado
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Parallax offset={30}>
          <Reveal direction="left" delay={0.15}>
            <BrazilMap />
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
