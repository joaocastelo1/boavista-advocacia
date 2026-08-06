"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/constants/gallery";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

const aspectBySpan: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  normal: "aspect-square",
};

export function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="section-pad relative overflow-hidden bg-background">
      <div className="container-max">
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça o ambiente onde a justiça acontece"
          description="Estrutura, tecnologia e um time dedicado a construir o melhor resultado para o seu caso."
        />

        <div className="mt-16 columns-2 gap-4 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 0.08} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelected(image)}
                aria-label={`Ampliar imagem: ${image.title}`}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-2xl border border-border",
                  aspectBySpan[image.span ?? "normal"]
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
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
              </button>
            </Reveal>
          ))}
        </div>
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
