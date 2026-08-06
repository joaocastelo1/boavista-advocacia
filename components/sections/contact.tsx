import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact/contact-form";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: siteConfig.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.mapsQuery)}`,
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: siteConfig.phone.display,
    href: siteConfig.telUrl,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: siteConfig.emailUrl,
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: siteConfig.openHours,
  },
];

export function Contact() {
  return (
    <section id="contato" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 size-[420px] rounded-full bg-gold-400/[0.05] blur-[130px]"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre o seu caso?"
          description="Preencha o formulário e retornaremos em até 1 hora útil. Ou, se preferir, fale agora pelo WhatsApp."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <Reveal direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex size-11 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-gold-400">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-gold-400/40"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-5 text-center transition-colors hover:bg-[#25D366] hover:text-ink-950"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                <span className="text-sm font-medium">
                  Prefere atendimento imediato? Chame no WhatsApp agora.
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <div className="relative h-full rounded-2xl border border-border bg-card/60 p-6 shadow-card backdrop-blur sm:p-10">
              <span
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
              />
              <h3 className="font-display text-2xl font-semibold">Envie sua mensagem</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Resposta garantida em até 1 hora útil em dias de semana.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
