import { Check, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/constants/services";
import { siteConfig } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 max-w-2xl rounded-t-full bg-blue-600/[0.04] blur-3xl"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções jurídicas completas para cada necessidade"
          description="Da consultoria preventiva à atuação em tribunais superiores, oferecemos um leque completo de serviços jurídicos."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappHref = `https://wa.me/${siteConfig.phone.raw}?text=${encodeURIComponent(
              `Olá! Tenho interesse no serviço de ${service.title}. Poderia me atender?`
            )}`;

            return (
              <Reveal key={service.title} delay={(index % 3) * 0.1}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-card hover:shadow-card">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-7 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-center justify-between">
                    <span className="flex size-13 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-5xl font-display font-semibold text-border/60 transition-colors group-hover:text-gold-400/15">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <Check className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-gold-400 transition-all hover:gap-3"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Solicitar orçamento
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
