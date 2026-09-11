import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';

export function CinematicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.3]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={IMAGES.cinematic}
          alt="Cinematic wedding moment"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-maroon-950/50 via-maroon-950/30 to-maroon-950/60"
        />
      </motion.div>

      {/* Overlapping typography */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.15em' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-50 leading-tight"
        >
          A Love That
          <br />
          <span className="text-gold-gradient italic">Transcends</span>
          <br />
          Time
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="h-px w-16 bg-gold-400/60" />
          <p className="font-tamil text-base sm:text-lg text-ivory-200/90">
            காலம் கடந்த காதல்
          </p>
          <div className="h-px w-16 bg-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
