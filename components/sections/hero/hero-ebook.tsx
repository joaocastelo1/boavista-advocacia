"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HeroEbook() {
  const { ebook } = siteConfig;

  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]">
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, -1.2, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative"
      >
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="absolute -inset-5 -rotate-6 rounded-3xl bg-gold-400/20 blur-2xl"
        />
        <motion.div
          animate={{
            boxShadow: [
              "0 25px 70px -25px rgba(0,0,0,0.7)",
              "0 40px 90px -20px rgba(0,0,0,0.8)",
              "0 25px 70px -25px rgba(0,0,0,0.7)",
            ],
          }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold-400/25 bg-ink-900"
        >
          <Image
            src={ebook.cover}
            alt={`Capa do e-book ${ebook.title}`}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            quality={92}
            priority
            draggable={false}
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold-400 uppercase">
              <BookOpen className="size-4" aria-hidden="true" />
              E-book em Destaque
            </p>
            <p className="mt-2 font-display text-lg leading-snug font-semibold text-ivory-100 md:text-xl">
              {ebook.title}
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-gold-400">{ebook.price}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
