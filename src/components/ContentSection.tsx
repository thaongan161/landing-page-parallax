"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ContentSectionProps {
  bgUrl: string;
  title: string;
}

export default function ContentSection({
  bgUrl,
  title,
}: ContentSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={container}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div className="relative z-10 p-[5vw] mix-blend-difference text-white flex flex-col justify-between h-full w-full">
        <p className="text-[5vw] uppercase mix-blend-difference">{title}</p>
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
      />

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: `url(${bgUrl})`,
        }}
      />
    </section>
  );
}
