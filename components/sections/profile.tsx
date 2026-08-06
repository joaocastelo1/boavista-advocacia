import Image from "next/image";
import { BadgeCheck, GraduationCap, Target, Gem, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { badges } from "@/constants/badges";

const values = ["Ética", "Excelência", "Transparência", "Dedicação", "Inovação", "Respeito"];

export function Profile() {
  return (
    <section
      id="perfil"
      className="section-pad relative overflow-hidden bg-muted/40 dark:bg-ink-900/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 size-[480px] rounded-full bg-blue-600/[0.06] blur-[140px]"
      />

      <div className="container-max grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 h-fit space-y-8">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-2xl border border-gold-400/25 shadow-card">
              <div className="relative">
                <Image
                  src={siteConfig.lawyer.photo}
                  alt={`Retrato profissional de ${siteConfig.lawyer.name}`}
                  width={590}
                  height={641}
                  quality={92}
                  className="h-[440px] w-full object-cover md:h-[520px]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl font-semibold text-ivory-100 md:text-3xl">
                    {siteConfig.lawyer.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-400">
                    {siteConfig.lawyer.role} · {siteConfig.lawyer.oab}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.lawyer.specialities.map((speciality) => (
                      <li
                        key={speciality}
                        className="rounded-md border border-white/10 bg-ink-950/60 px-3 py-1 text-[11px] text-ivory-100/80 backdrop-blur"
                      >
                        {speciality}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Target className="size-5 text-gold-400" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold">Missão</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Defender os direitos e interesses de cada cliente com técnica, ética e dedicação,
                transformando segurança jurídica em tranquilidade e resultados reais.
              </p>
              <Button asChild variant="whatsapp" className="mt-6 w-full">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Conversar com o advogado
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Perfil Profissional"
            title={`${siteConfig.lawyer.firstName}: uma trajetória construída sobre confiança`}
            description="Atuação dedicada nas áreas cível, previdenciária, do consumidor e imobiliária, guiada por zelo, excelência e integridade."
          />

          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              {siteConfig.lawyer.bio.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.title}
                    className="flex items-center gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/[0.06] p-5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-400">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold">{badge.title}</p>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-gold-400" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold">
                  Formação Acadêmica
                </h3>
              </div>
            </Reveal>

            <ol className="relative mt-8 space-y-8 border-l border-gold-400/30 pl-8">
              {siteConfig.lawyer.formation.map((item, index) => (
                <li key={item} className="relative">
                  <Reveal delay={index * 0.1}>
                    <span
                      aria-hidden="true"
                      className="absolute -left-[41px] top-1 flex size-4 items-center justify-center rounded-full border border-gold-400 bg-background"
                    >
                      <span className="size-1.5 rounded-full bg-gold-400" />
                    </span>
                    <p className="flex items-start gap-2 text-foreground">
                      <BadgeCheck
                        className="mt-0.5 size-4 shrink-0 text-gold-400"
                        aria-hidden="true"
                      />
                      <span className="font-medium">{item}</span>
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <Gem className="size-5 text-gold-400" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold">Valores</h3>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-wrap gap-3">
                {values.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-gold-400/30 bg-gold-400/[0.06] px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold-400/60 hover:bg-gold-400/10"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
