"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { useScrolled } from "@/hooks/use-scrolled";

export function BackToTop() {
  const scrolled = useScrolled(480);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{
        opacity: scrolled ? 1 : 0,
        scale: scrolled ? 1 : 0.5,
        y: scrolled ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 bottom-24 z-40 md:right-8 md:bottom-28"
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo da página"
        className="group flex size-11 items-center justify-center rounded-full border border-gold-400/40 bg-ink-900/85 text-gold-400 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] backdrop-blur transition-colors hover:bg-gold-400 hover:text-ink-950 md:size-12"
      >
        <ArrowUp className="size-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </motion.div>
  );
}
