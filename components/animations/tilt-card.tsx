"use client";

import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({ children, className, intensity = 8 }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18, mass: 0.4 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(relX);
    y.set(relY);
    rotateX.set(-relY * intensity);
    rotateY.set(relX * intensity);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
