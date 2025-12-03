"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", `-${(children.length - 1) * 100}%`]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x, willChange: "transform" }}
          className="flex h-full"
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="w-screen h-screen flex-shrink-0"
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
