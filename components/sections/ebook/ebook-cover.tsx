"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function EbookCover() {
  const { ebook } = siteConfig;

  return (
    <motion.div
      animate={{
        rotateY: [0, -12, 0, 12, 0],
        rotateZ: [0, 0.6, 0, -0.6, 0],
        scale: [1, 1.015, 1, 1.015, 1],
        transformPerspective: 1000,
      }}
      transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      className="relative mx-auto w-fit"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-4 -rotate-6 rounded-2xl bg-gold-400/15"
      />
      <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <Image
          src={ebook.cover}
          alt={`Capa do e-book ${ebook.title}`}
          width={853}
          height={1280}
          priority
          className="h-auto w-64 object-cover sm:w-72"
        />
      </div>
    </motion.div>
  );
}
