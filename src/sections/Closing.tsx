import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES, WEDDING } from '@/data/images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { OrnateFrame, TempleArch, MangoLeafChain, JasmineVine } from '@/components/Ornaments';

export function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative bg-ivory-50 py-20 sm:py-32 overflow-hidden">
      <JasmineVine className="absolute left-2 top-10 h-32 w-32 text-gold-500/15" />
      <JasmineVine className="absolute right-2 bottom-10 h-32 w-32 text-gold-500/15 rotate-180" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Framed closing portrait */}
        <ScrollReveal>
          <OrnateFrame className="max-w-xs mx-auto mb-12">
            <motion.div style={{ scale, y }} className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.closingPortrait}
                alt="Karthi and Varuna"
                className="w-full aspect-[3/4] object-cover shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </OrnateFrame>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <TempleArch className="h-10 w-40 text-gold-600/50 mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-4">
            With Love &amp; Gratitude
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-maroon-800 leading-tight">
            {WEDDING.groom}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="font-display text-2xl sm:text-3xl text-gold-600 italic my-2">
            &amp;
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-maroon-800 leading-tight mb-8">
            {WEDDING.bride}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <MangoLeafChain className="h-4 w-48 sm:w-64 text-gold-600/40 mx-auto mb-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <p className="font-tamil text-xl sm:text-2xl text-gold-700 mb-4">
            நன்றி
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.9}>
          <p className="font-serif text-base sm:text-lg text-maroon-700/80 italic max-w-xl mx-auto leading-relaxed">
            "Thank you for being part of our story. Your blessings and presence
            will make our wedding day truly unforgettable. We look forward to
            celebrating with you."
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="font-display text-sm tracking-wide-luxe text-gold-700 uppercase">
              {WEDDING.date}
            </p>
            <p className="font-tamil text-sm text-maroon-600">
              {WEDDING.venue}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1.1}>
          <TempleArch className="h-10 w-40 text-gold-600/50 mx-auto mt-8 rotate-180" />
        </ScrollReveal>
      </div>
    </section>
  );
}
