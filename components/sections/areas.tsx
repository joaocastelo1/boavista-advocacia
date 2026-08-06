"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, Scale } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { areas } from "@/constants/areas";
import { siteConfig } from "@/lib/site";
import type { Area } from "@/types";

const areaDetails: Record<string, string> = {
  "Direito Civil":
    "Atuação em contratos, responsabilidade civil, indenizações, usucapião e disputas patrimoniais, com análise minuciosa de cada documento e estratégia construída sob medida.",
  "Direito Previdenciário":
    "Auxílios, aposentadorias, pensões e revisões de benefícios do INSS. Atuação completa, da análise documental ao pedido administrativo e à via judicial.",
  "Direito do Consumidor":
    "Defesa contra cobranças indevidas, práticas abusivas, negativação irregular e reparação de danos materiais e morais.",
  "Direito Imobiliário":
    "Compra e venda, locações, incorporação, usucapião e regularização de imóveis com segurança jurídica integral.",
};

export function Areas() {
  const [selected, setSelected] = useState<Area | null>(null);

  return (
    <section id="areas" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-3xl rounded-b-full bg-gold-400/[0.05] blur-3xl"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Áreas de Atuação"
          title="Especialidades jurídicas de alto padrão"
          description="Atuação completa nas áreas do direito que mais impactam pessoas e empresas, sempre com estratégia, técnica e dedicação."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.slug} delay={(index % 3) * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-card hover:shadow-card">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-border/70 transition-colors group-hover:text-gold-400/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold">{area.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelected(area)}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-gold-400 transition-all hover:gap-3"
                    aria-label={`Saiba mais sobre ${area.title}`}
                  >
                    Saiba Mais
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground sm:flex-row">
            <Scale className="size-4 text-gold-400" aria-hidden="true" />
            Não encontrou a sua área? Fale com a nossa equipe para avaliar o seu caso.
          </p>
        </Reveal>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent>
            <DialogHeader>
              <span className="mx-auto flex size-14 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-gold-400 sm:mx-0">
                <selected.icon className="size-6" aria-hidden="true" />
              </span>
              <DialogTitle className="mt-2 text-2xl">{selected.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {areaDetails[selected.title]}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" className="flex-1">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Consultar especialista
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="#contato">Enviar mensagem</a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
