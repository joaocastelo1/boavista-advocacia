"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useMounted } from "@/hooks/use-mounted";

export function Preloader() {
  const mounted = useMounted();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mounted) return;

    const duration = 1200;
    const start = performance.now();

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - start;
      const value = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setVisible(false), 350);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [mounted]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex size-16 items-center justify-center rounded-xl border border-gold-400/70 bg-gradient-to-br from-gold-400/20 to-transparent font-cinzel text-2xl font-semibold text-gold-400">
              B
            </div>
            <p className="mt-5 font-cinzel text-lg tracking-[0.35em] text-ivory-100 uppercase">
              Boavista <span className="text-gold-400">Advocacia</span>
            </p>
          </motion.div>

          <div className="mt-10 h-px w-52 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          <p className="mt-4 font-cinzel text-xs tracking-[0.3em] text-ivory-100/50">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
