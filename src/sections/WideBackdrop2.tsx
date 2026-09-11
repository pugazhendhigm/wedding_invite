import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';

export function WideBackdrop2() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={IMAGES.wideBackdrop2}
          alt="Wedding celebration"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-maroon-950/50 via-transparent to-maroon-950/50" />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-tamil text-2xl sm:text-4xl text-ivory-50/90 mb-4"
        >
          இன்பம் பகிர்வோம்
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xl sm:text-3xl md:text-4xl text-ivory-50/80 italic"
        >
          Let us share in the joy
        </motion.p>
      </motion.div>
    </section>
  );
}
