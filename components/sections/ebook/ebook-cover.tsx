"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function EbookCover() {
  const { ebook } = siteConfig;

  return (
    <div className="relative mx-auto w-fit">
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, -1.5, 0],
        }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative"
      >
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="absolute -inset-4 -rotate-6 rounded-2xl bg-gold-400"
        />
        <motion.div
          animate={{
            boxShadow: [
              "0 20px 60px -20px rgba(0,0,0,0.6)",
              "0 30px 80px -18px rgba(0,0,0,0.7)",
              "0 20px 60px -20px rgba(0,0,0,0.6)",
            ],
          }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="relative overflow-hidden rounded-2xl"
        >
          <Image
            src={ebook.cover}
            alt={`Capa do e-book ${ebook.title}`}
            width={853}
            height={1280}
            priority
            className="h-auto w-64 object-cover sm:w-72"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
