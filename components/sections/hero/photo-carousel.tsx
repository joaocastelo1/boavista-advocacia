"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const photos = [
  {
    src: "/images/adv4.png",
    caption: "Advogado",
    alt: "Retrato do advogado Bruno Boavista Castelo Branco",
  },
  {
    src: "/images/foto1.png",
    caption: "Atendimento",
    alt: "Atendimento no escritório Boavista Advocacia",
  },
  {
    src: "/images/foto2.png",
    caption: "Escritório",
    alt: "Ambiente do escritório Boavista Advocacia",
  },
  {
    src: "/images/foto3.png",
    caption: "Reunião",
    alt: "Reunião com clientes na Boavista Advocacia",
  },
  {
    src: "/images/foto4.png",
    caption: "Dedicação",
    alt: "Advogado dedicado ao trabalho na Boavista Advocacia",
  },
];

export function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, [paused]);

  const goTo = useCallback((next: number) => {
    setActive((next + photos.length) % photos.length);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]">
      <div
        className="relative overflow-hidden rounded-2xl border border-gold-400/25 bg-ink-900 shadow-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-square">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={photos[active].src}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="(min-width: 1024px) 32vw, 90vw"
                quality={92}
                className="object-contain [filter:contrast(1.04)_saturate(1.08)]"
                priority
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
          />

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/60 text-ivory-100/90 backdrop-blur transition-colors hover:border-gold-400/50 hover:text-gold-400"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/60 text-ivory-100/90 backdrop-blur transition-colors hover:border-gold-400/50 hover:text-gold-400"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          <span className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 font-cinzel text-xs tracking-widest text-gold-400 backdrop-blur">
            {active + 1} / {photos.length}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={photos[active].caption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.25em] text-gold-400 uppercase"
          >
            <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-400/60" />
            {photos[active].caption}
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Fotos do escritório">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-label={`Foto ${index + 1}: ${photo.caption}`}
              aria-selected={index === active}
              onClick={() => goTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-7 bg-gold-400" : "w-2.5 bg-foreground/25 hover:bg-foreground/45"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
