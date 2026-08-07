"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CalendarCheck, MessageCircle, ShieldCheck, Globe2, Award } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { LawyerPhoto } from "./hero/lawyer-photo";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const statueRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statueRef.current) {
        gsap.to(statueRef.current, {
          y: -16,
          duration: 4.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
      if (scrollLineRef.current) {
        gsap.fromTo(
          scrollLineRef.current,
          { height: "0%" },
          {
            height: "100%",
            duration: 1.7,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            repeatDelay: 0.5,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      aria-label="Apresentação do escritório"
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/library-bg.svg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-50 blur-[2px]"
          sizes="100vw"
        />
        <div ref={statueRef} className="absolute inset-0">
          <Image
            src="/images/justice-statue.svg"
            alt=""
            fill
            priority
            className="object-cover object-[62%_center] opacity-90"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
        <div className="absolute top-1/3 -left-40 size-[520px] rounded-full bg-gold-400/10 blur-[140px]" />
        <div className="absolute -right-24 bottom-1/4 size-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="container-max relative z-10 flex flex-1 flex-col justify-center pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal blur>
              <div className="mb-10 flex items-center gap-5">
                <Image
                  src="/images/logo-1.png"
                  alt="Boavista Advocacia"
                  width={515}
                  height={288}
                  priority
                  className="h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] md:h-32"
                />
                <div>
                  <p className="font-display text-xl font-semibold tracking-wide text-ivory-100 md:text-2xl">
                    Boavista Advocacia
                  </p>
                  <p className="mt-1 text-[11px] font-medium tracking-[0.25em] text-gold-400 uppercase md:text-xs">
                    Advocacia em Codó – MA · Atendimento Nacional
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal blur>
              <p className="eyebrow flex items-center gap-3 text-gold-400">
                <span className="inline-block h-px w-10 bg-gold-400/60" aria-hidden="true" />
                Escritório de Advocacia · {siteConfig.lawyer.oab}
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              delay={0.15}
              className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.1] font-semibold text-ivory-100 text-shadow-hero"
              text="Guiado por princípios de zelo, excelência e integridade, o Boavista Advocacia preza pela satisfação máxima de seus clientes."
            />

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-100/70 md:text-xl">
                Atendimento jurídico especializado nas áreas Cível, Previdenciária, do Consumidor e
                Imobiliária, com estratégia, discrição e compromisso absoluto com o melhor resultado
                para você — em todo o Brasil.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.25}>
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle />
                      Fale Conosco
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild variant="goldOutline" size="lg">
                  <a href="#sobre">
                    <CalendarCheck />
                    Saiba Mais
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
                <li className="flex items-center gap-2.5">
                  <Award className="size-5 text-gold-400" aria-hidden="true" />
                  <span className="text-sm text-ivory-100/70">Atendimento personalizado</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="size-5 text-gold-400" aria-hidden="true" />
                  <span className="text-sm text-ivory-100/70">Ética e sigilo garantidos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe2 className="size-5 text-gold-400" aria-hidden="true" />
                  <span className="text-sm text-ivory-100/70">Atendimento em todo o Brasil</span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.3}>
            <LawyerPhoto />
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-[0.4em] text-ivory-100/50 uppercase">
          Role para explorar
        </span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/10">
          <span
            ref={scrollLineRef}
            className="absolute top-0 left-0 block w-full bg-gradient-to-b from-gold-400 to-transparent"
          />
        </span>
      </div>
    </section>
  );
}
