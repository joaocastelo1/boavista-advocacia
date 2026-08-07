"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/constants/gallery";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

export function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

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
    <section id="galeria" className="section-pad relative overflow-hidden bg-background">
      <div className="container-max">
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça o ambiente onde a justiça acontece"
          description="Estrutura, tecnologia e um time dedicado a construir o melhor resultado para o seu caso."
        />

        <Reveal delay={0.2}>
          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[130px]"
            />

            <div className="relative z-10 -mx-4 overflow-hidden py-10 sm:-mx-6" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.src}
                    className="min-w-0 shrink-0 grow-0 basis-[80%] pl-4 sm:basis-[56%] sm:pl-6 lg:basis-[40%]"
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(image)}
                      aria-label={`Ampliar imagem: ${image.title}`}
                      className={cn(
                        "group relative block w-full overflow-hidden rounded-2xl transition-all duration-500 ease-out",
                        index === selectedIndex
                          ? "z-10 scale-100 border border-gold-400/40 opacity-100 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.7)]"
                          : "scale-[0.88] border border-border opacity-40 blur-[1px]"
                      )}
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 56vw, 80vw"
                          quality={88}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="text-left">
                            <span className="block font-display text-base font-semibold text-ivory-100">
                              {image.title}
                            </span>
                            <span className="block text-xs tracking-wide text-gold-400 uppercase">
                              {image.category}
                            </span>
                          </span>
                          <span className="flex size-9 items-center justify-center rounded-full border border-gold-400/50 bg-ink-950/70 text-gold-400 backdrop-blur">
                            <Expand className="size-4" aria-hidden="true" />
                          </span>
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-2 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Foto anterior"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Selecionar foto"
              >
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-label={`Ir para a foto ${index + 1}`}
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
                aria-label="Próxima foto"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-w-4xl border-white/10 bg-ink-950 p-3 sm:p-4">
            <DialogTitle className="sr-only">{selected.title}</DialogTitle>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="px-2 pt-1 pb-2">
              <p className="font-display text-lg font-semibold text-ivory-100">{selected.title}</p>
              <p className="text-xs tracking-wide text-gold-400 uppercase">{selected.category}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
