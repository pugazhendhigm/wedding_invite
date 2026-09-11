import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MangoLeafChain } from '@/components/Ornaments';

export function FinalGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={IMAGES.finalGallery}
          alt="Wedding celebration gallery"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/40 via-maroon-950/30 to-maroon-950/60" />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <ScrollReveal>
          <MangoLeafChain className="h-4 w-48 sm:w-64 text-gold-400/50 mx-auto mb-6" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-tamil text-2xl sm:text-4xl md:text-5xl text-ivory-50 mb-4">
            கொண்டாடுவோம்
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl text-ivory-50 italic leading-relaxed">
            Celebrate With Us
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="font-serif text-sm sm:text-lg text-ivory-200/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Your presence is the greatest blessing we could ask for.
            Join us as we begin this sacred journey together.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <MangoLeafChain className="h-4 w-48 sm:w-64 text-gold-400/50 mx-auto mt-6 rotate-180" />
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
