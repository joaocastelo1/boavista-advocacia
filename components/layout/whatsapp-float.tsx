"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { useScrolled } from "@/hooks/use-scrolled";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  const scrolled = useScrolled(120);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{
        opacity: scrolled ? 1 : 0,
        scale: scrolled ? 1 : 0.5,
        y: scrolled ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 bottom-5 z-40 md:right-8 md:bottom-8"
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um advogado pelo WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-ink-950 shadow-[0_12px_36px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 md:size-16"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]"
        />
        <MessageCircle className="relative size-6 md:size-7" />
        <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-ivory-100 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
          Fale com um advogado
        </span>
      </a>
    </motion.div>
  );
}
