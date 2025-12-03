import Image, { StaticImageData } from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ContentSectionProps {
  bgUrl: string;
  title: string;
  description: string;
}

export default function ContentSection({ bgUrl, title, description }: ContentSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
          {description}
        </p>
        <p className="text-[5vw] uppercase mix-blend-difference">{title}</p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        
        <motion.div
                style={{ y }}
                className="absolute inset-0 bg-cover bg-center"
                dangerouslySetInnerHTML={{ __html: "" }}
              />
              {/* Instead of dangerouslySetInnerHTML we set style inline to use bg image */}
              <motion.div
                style={{ y } as any}
                className="absolute inset-0 bg-cover bg-center"
                aria-hidden
                // @ts-ignore
                style={{ backgroundImage: `url(${bgUrl})`, y }}
              />
      </div>
    </div>
  );
}
