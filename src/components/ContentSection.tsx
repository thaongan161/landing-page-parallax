"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ContentSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSmoothScroll(scrollYProgress);

  const y = useTransform(smooth, [0, 0.1, 0.9, 1], ["-6%", "-10%", "10%", "6%"]);

  return (
    <section ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      <div className="relative z-10 p-[5vw] w-full h-full flex flex-col">
        {children}
      </div>

      <motion.div
        style={{ y }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        className="absolute inset-0 z-0 will-change-transform"
      />
    </section>
  );
}
