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

  // move background slightly on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      {/* Instead of dangerouslySetInnerHTML we set style inline to use bg image */}
      <motion.div
        style={{ y } as any}
        className="absolute inset-0 bg-cover bg-center"
        // tailwind class for override - we use inline style to ensure url applied
        // eslint-disable-next-line react/no-unknown-property
        aria-hidden
        // inline style for background-image
        // Using style object so TS is happy
        // eslint-disable-next-line react/style-prop-object
        // @ts-ignore
        style={{ backgroundImage: `url(${bgUrl})`, y }}
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
