import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { TempleArch } from '@/components/Ornaments';

export function TamilTypography() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={IMAGES.tamilPortrait}
          alt="Tamil wedding portrait"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/60 via-maroon-950/40 to-maroon-950/70" />
      </motion.div>

      <motion.div style={{ opacity: textOpacity, y: textY }} className="relative z-10 text-center px-4">
        <TempleArch className="h-10 w-40 text-gold-400/60 mx-auto mb-8" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="font-tamil text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-50 leading-tight"
        >
          திருமணம்
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-display text-lg sm:text-2xl md:text-3xl text-gold-300 mt-6 tracking-wide-luxe"
        >
          Thirumanam
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="font-serif text-sm sm:text-lg text-ivory-200/70 mt-4 italic max-w-md mx-auto"
        >
          The sacred bond — two souls united in the eternal embrace of tradition and love
        </motion.p>

        <TempleArch className="h-10 w-40 text-gold-400/60 mx-auto mt-8 rotate-180" />
      </motion.div>
    </section>
  );
}
