"use client";

import { useEffect } from "react";
import { motion, type Easing } from "framer-motion";
import { CalendarCheck, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { navigation } from "@/constants/navigation";
import { siteConfig } from "@/lib/site";

const easing: Easing = [0.22, 1, 0.36, 1];

type MobileMenuProps = {
  onClose: () => void;
  whatsappUrl: string;
};

export function MobileMenu({ onClose, whatsappUrl }: MobileMenuProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.45, ease: easing }}
        className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l border-white/[0.06] bg-ink-900/95 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory-100 transition-colors hover:border-gold-400/50 hover:text-gold-400"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Navegação móvel"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6"
        >
          {navigation.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.06, duration: 0.4, ease: easing }}
              className="flex items-center justify-between rounded-lg px-3 py-3.5 text-lg font-medium text-ivory-100/90 transition-colors hover:bg-white/5 hover:text-gold-400"
            >
              {item.label}
              <span aria-hidden="true" className="text-xs text-gold-400/60">
                0{index + 1}
              </span>
            </motion.a>
          ))}
        </nav>

        <div className="space-y-3 border-t border-white/[0.06] px-6 py-6">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: easing }}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="size-4" />
            Agendar Consulta
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs text-ivory-100/50"
          >
            {siteConfig.phone.display} · Atendimento em todo o Brasil
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
