import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  bgUrl: string;
}

const HeroTitle: React.FC<Props> = ({ title, subtitle, bgUrl }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white/90">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTitle;
