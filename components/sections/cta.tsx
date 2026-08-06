import { MessageCircle, PhoneCall } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Magnetic } from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Cta() {
  return (
    <section
      aria-label="Contato rápido"
      className="section-pad relative overflow-hidden bg-background"
    >
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-600 via-gold-400 to-gold-600 px-8 py-16 text-center shadow-glow sm:px-14 md:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 size-72 rounded-full bg-ink-950/10 blur-2xl"
            />

            <div className="relative">
              <p className="eyebrow flex items-center justify-center gap-3 text-ink-950/70">
                <span className="inline-block h-px w-8 bg-ink-950/40" aria-hidden="true" />
                Atendimento imediato
                <span className="inline-block h-px w-8 bg-ink-950/40" aria-hidden="true" />
              </p>

              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-tight font-bold text-ink-950 md:text-5xl">
                Precisando de um advogado?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base text-ink-950/80 md:text-lg">
                Não deixe o seu direito para depois. Converse agora com um especialista e receba uma
                avaliação inicial do seu caso.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Magnetic strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-ink-950 text-ivory-100 shadow-2xl hover:bg-ink-800"
                  >
                    <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle />
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-ink-950/30 bg-transparent text-ink-950 shadow-none hover:border-ink-950 hover:bg-ink-950/5 hover:-translate-y-0.5"
                >
                  <a href={siteConfig.telUrl}>
                    <PhoneCall />
                    {siteConfig.phone.display}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
