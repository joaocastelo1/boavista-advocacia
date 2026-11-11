"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/constants/gallery";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      const total = galleryImages.length;
      if (event.key === "ArrowLeft") {
        setLightboxIndex((index) =>
          index === null ? index : (index - 1 + total) % total
        );
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((index) => (index === null ? index : (index + 1) % total));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const selected: GalleryImage | null =
    lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section id="galeria" className="section-pad relative overflow-hidden bg-background">
      <div className="container-max">
        <SectionHeading
          align="left"
          eyebrow="Galeria"
          title="Conheça o ambiente onde a justiça acontece"
          description="Estrutura, tecnologia e um atendimento próximo. Presencial em Codó e online em todo o Brasil."
        />

        <Reveal delay={0.2}>
          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.08] blur-[120px]"
            />

            <div
              className="relative z-10 -mx-4 overflow-hidden py-8 sm:-mx-6"
              ref={emblaRef}
            >
              <div className="flex touch-pan-y">
                {galleryImages.map((image, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={image.src}
                      className="min-w-0 shrink-0 grow-0 basis-[86%] pl-4 sm:basis-[58%] sm:pl-6 lg:basis-[40%]"
                    >
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(index)}
                        aria-label={`Ampliar imagem: ${image.title}`}
                        className={cn(
                          "group relative block w-full overflow-hidden rounded-2xl transition-all duration-500 ease-out",
                          isActive
                            ? "z-10 scale-100 border border-gold-400/40 opacity-100 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.7)]"
                            : "scale-[0.9] border border-border opacity-45 blur-[1px] hover:opacity-70"
                        )}
                      >
                        <span className="relative block aspect-[4/5]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 58vw, 86vw"
                            quality={85}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent"
                          />
                          <span
                            className={cn(
                              "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 transition-all duration-500",
                              isActive
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                            )}
                          >
                            <span className="text-left">
                              <span className="block font-display text-base font-semibold text-ivory-100">
                                {image.title}
                              </span>
                              <span className="block text-[11px] tracking-[0.18em] text-gold-400 uppercase">
                                {image.category}
                              </span>
                            </span>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-ink-950/70 text-gold-400 backdrop-blur">
                              <Expand className="size-4" aria-hidden="true" />
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  );
                })}
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

              <span className="min-w-20 text-center text-sm font-medium tracking-wide text-muted-foreground">
                <span className="text-gold-400">
                  {String(Math.min(activeIndex + 1, count || 1)).padStart(2, "0")}
                </span>
                <span className="mx-1.5 text-foreground/30">/</span>
                {String(count || galleryImages.length).padStart(2, "0")}
              </span>

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

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        {selected && (
          <DialogContent className="max-w-5xl gap-0 border-white/10 bg-ink-950 p-2 sm:p-3">
            <DialogTitle className="sr-only">{selected.title}</DialogTitle>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink-900 sm:aspect-[16/10]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((index) =>
                    index === null
                      ? index
                      : (index - 1 + galleryImages.length) % galleryImages.length
                  )
                }
                aria-label="Foto anterior"
                className="absolute top-1/2 left-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/70 text-ivory-100 backdrop-blur transition-colors hover:border-gold-400/60 hover:text-gold-400 sm:left-4"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((index) =>
                    index === null ? index : (index + 1) % galleryImages.length
                  )
                }
                aria-label="Próxima foto"
                className="absolute top-1/2 right-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/70 text-ivory-100 backdrop-blur transition-colors hover:border-gold-400/60 hover:text-gold-400 sm:right-4"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar galeria"
                className="absolute top-2 right-2 flex size-9 items-center justify-center rounded-full border border-white/15 bg-ink-950/70 text-ivory-100 backdrop-blur transition-colors hover:border-gold-400/60 hover:text-gold-400 sm:top-3 sm:right-3"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center justify-between px-2 py-3">
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-ivory-100 sm:text-base">
                  {selected.title}
                </p>
                <p className="text-[11px] tracking-wide text-gold-400 uppercase">
                  {selected.category}
                </p>
              </div>
              <span className="shrink-0 text-xs text-ivory-100/50">
                {(lightboxIndex ?? 0) + 1} / {galleryImages.length}
              </span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
