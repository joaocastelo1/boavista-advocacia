"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CalendarCheck, MessageCircle, ShieldCheck, Globe2, Award, Scale } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
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
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <Reveal blur>
            <div className="relative mb-8 flex flex-col items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/25 blur-[100px] md:size-96"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/20 md:size-[21rem]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[22rem] -translate-x-1/2 -translate-y-1/2 animate-[spin_45s_linear_infinite] rounded-full border border-dashed border-gold-400/15 md:size-[26rem]"
              />
              <Image
                src="/images/logo-1.png"
                alt="Boavista Advocacia"
                width={515}
                height={288}
                priority
                className="h-32 w-auto object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.45)] md:h-44"
              />
              <p className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold tracking-wide text-gradient-gold">
                Boavista Advocacia
              </p>
              <p className="mt-1.5 text-[clamp(0.625rem,1vw,0.8rem)] font-medium tracking-[0.3em] text-ivory-100/60 uppercase">
                Advocacia em Codó – MA · Atendimento Nacional
              </p>
            </div>
          </Reveal>

          <Reveal blur>
            <span className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/[0.08] px-5 py-2 text-gold-400">
              <Scale className="size-4" aria-hidden="true" />
              Escritório de Advocacia · {siteConfig.lawyer.oab}
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            delay={0.15}
            className="mt-6 font-display text-[clamp(1.85rem,4.8vw,3.7rem)] leading-[1.12] font-semibold text-ivory-100 text-shadow-hero"
            highlightWords={["zelo", "excelência", "integridade"]}
            text="Guiado por princípios de zelo, excelência e integridade, o Boavista Advocacia preza pela satisfação máxima de seus clientes."
          />

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-ivory-100/70">
              Atendimento jurídico especializado nas áreas Cível, Previdenciária, do Consumidor e
              Imobiliária, com estratégia, discrição e compromisso absoluto com o melhor resultado
              para você — em todo o Brasil.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Award, label: "Atendimento personalizado" },
                { icon: ShieldCheck, label: "Ética e sigilo garantidos" },
                { icon: Globe2, label: "Atendimento em todo o Brasil" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-gold-400/20 bg-ink-900/60 px-4 py-3.5 backdrop-blur"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-[clamp(0.8125rem,1vw,0.9375rem)] text-ivory-100/75">
                    {label}
                  </span>
                </div>
              ))}
            </div>
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
