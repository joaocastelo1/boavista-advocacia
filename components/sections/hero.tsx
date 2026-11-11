import Image from "next/image";
import { Award, CalendarCheck, Globe2, MessageCircle, Scale, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const highlights = [
  { icon: Award, label: "Atendimento personalizado" },
  { icon: ShieldCheck, label: "Ética e sigilo garantidos" },
  { icon: Globe2, label: "Atendimento em todo o Brasil" },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Apresentação do escritório"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/library-bg.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <Image
          src="/images/justice-statue.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-[68%_center] opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/80" />
      </div>

      <div className="container-max relative z-10 flex flex-1 flex-col justify-center py-28 md:py-36">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo-1.png"
              alt="Cartão de visita Boavista Advocacia"
              width={640}
              height={352}
              priority
              className="h-auto w-full max-w-[280px] rounded-lg object-contain shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] md:max-w-[360px]"
            />
            <p className="mt-4 font-display text-[clamp(1.5rem,3vw,2.3rem)] font-semibold tracking-wide text-gradient-gold">
              Boavista Advocacia
            </p>
            <p className="mt-2 text-[clamp(0.625rem,1vw,0.8rem)] font-medium tracking-[0.28em] text-ivory-100/60 uppercase">
              Codó – MA · Atendimento Nacional
            </p>
          </div>

          <span className="eyebrow mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/[0.08] px-5 py-2 text-gold-400">
            <Scale className="size-4" aria-hidden="true" />
            Escritório de Advocacia · {siteConfig.lawyer.oab}
          </span>

          <h1 className="mt-6 font-display text-[clamp(1.85rem,4.6vw,3.6rem)] leading-[1.14] font-semibold text-ivory-100 text-shadow-hero">
            Seu direito defendido com <span className="text-gradient-gold">zelo</span>,{" "}
            <span className="text-gradient-gold">excelência</span> e{" "}
            <span className="text-gradient-gold">integridade</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.22rem)] leading-relaxed text-ivory-100/75">
            Assessoria jurídica próxima e estratégica em Direito Civil, Previdenciário, do
            Consumidor e Imobiliário. Atendimento presencial em Codó ou online em todo o Brasil.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contato">
                <CalendarCheck />
                Agendar Consulta
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
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
        </div>
      </div>
    </section>
  );
}
