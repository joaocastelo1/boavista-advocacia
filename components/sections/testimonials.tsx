"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 4800, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="depoimentos"
      className="section-pad relative overflow-hidden bg-muted/40 dark:bg-ink-900/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full bg-gold-400/[0.05] blur-[130px]"
      />

      <div className="container-max">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confiou, recomenda"
          description="A satisfação de quem atendemos é o nosso maior patrimônio. Veja o que dizem nossos clientes."
        />

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="min-w-0 shrink-0 grow-0 basis-full px-1">
                    <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card/70 p-8 text-center shadow-card backdrop-blur sm:p-10">
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                      />
                      <Quote
                        className="mx-auto size-9 rotate-180 text-gold-400/70"
                        aria-hidden="true"
                      />

                      <div
                        className="mt-4 flex justify-center gap-1"
                        aria-label="Avaliação: 5 de 5 estrelas"
                      >
                        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="size-4 fill-gold-400 text-gold-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      <blockquote className="mt-6 flex-1 font-serif-alt text-lg leading-relaxed text-foreground/90 italic md:text-2xl">
                        “{testimonial.quote}”
                      </blockquote>

                      <figcaption className="mt-8 flex items-center justify-center gap-4">
                        <span
                          aria-hidden="true"
                          className="flex size-12 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 font-cinzel text-sm font-semibold text-gold-400"
                        >
                          {testimonial.initials}
                        </span>
                        <span className="text-left">
                          <span className="block font-display text-base font-semibold">
                            {testimonial.name}
                          </span>
                          <span className="block text-sm text-muted-foreground">
                            {testimonial.role} · {testimonial.location}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Depoimento anterior"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Selecionar depoimento"
              >
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-label={`Ir para o depoimento ${index + 1}`}
                    aria-selected={index === selectedIndex}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === selectedIndex
                        ? "w-8 bg-gold-400"
                        : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próximo depoimento"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
