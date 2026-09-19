import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { OrnateFrame, KolamMandala, OrnamentalDivider } from '@/components/Ornaments';

export function CoupleGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative bg-ivory-100 py-20 sm:py-32 overflow-hidden">
      <KolamMandala className="absolute left-0 top-0 h-48 w-48 text-gold-600/10" />
      <KolamMandala className="absolute right-0 bottom-0 h-48 w-48 text-gold-600/10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            The Couple
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Bound by Tradition
          </h2>
          <OrnamentalDivider className="my-6" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div style={{ y: y1 }}>
            <ScrollReveal>
              <OrnateFrame className="max-w-sm mx-auto">
                <img
                  src={IMAGES.coupleGallery}
                  alt="Karthi and Varuna"
                  className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl"
                  loading="lazy"
                />
              </OrnateFrame>
            </ScrollReveal>
          </motion.div>

          <motion.div style={{ y: y2 }} className="space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="font-tamil text-2xl sm:text-3xl text-gold-700 leading-relaxed">
                கார்த்தி மற்றும் வருணா
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-serif text-base sm:text-lg text-maroon-800 leading-relaxed">
                In the golden glow of tradition, they stand together —
                the groom in his silk veshti, the bride in her Kanjeevaram
                saree, adorned with jasmine in her hair and the sacred
                thaali that binds their destinies.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="font-serif text-base sm:text-lg text-maroon-800/80 leading-relaxed italic">
                "We are not just two individuals coming together, but two
                families, two histories, two lineages woven into one
                beautiful tapestry."
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-px w-12 bg-gold-600" />
                <p className="font-tamil text-sm text-gold-700">
                  இரு குடும்பங்கள் ஒன்றாக
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
