"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function HorizontalWrapper({
  children,
}: {
  children: React.ReactNode[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSmoothScroll(scrollYProgress);

  const totalWidth = (children.length - 1) * 100;
  const x = useTransform(
    smooth,
    [0, 0.18, 0.82, 1],
    ["0%", "0%", `-${totalWidth}%`, `-${totalWidth}%`]
  );

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          className="flex h-full will-change-transform"
        >
          {children.map((child, idx) => (
            <div key={idx} className="w-screen h-screen flex-shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
