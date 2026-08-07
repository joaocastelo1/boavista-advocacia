"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.05, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  highlightWords?: string[];
};

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  highlightWords,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion.create(Tag);
  const words = text.split(" ");

  return (
    <MotionTag
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
      aria-label={text}
    >
      {words.map((wordItem, index) => {
        const clean = wordItem.replace(/[^\p{L}\p{N}]/gu, "").toLocaleLowerCase("pt-BR");
        const highlighted = highlightWords?.some(
          (highlight) => highlight.toLocaleLowerCase("pt-BR") === clean
        );
        return (
          <span key={index} className="inline-block whitespace-pre">
            <motion.span
              variants={word}
              className={cn("inline-block", highlighted && "text-gradient-gold")}
            >
              {wordItem}
            </motion.span>
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </MotionTag>
  );
}
