import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES, WEDDING } from '@/data/images';
import { ScrollReveal, ParallaxImage } from '@/components/ScrollReveal';
import { OrnateFrame, JasmineVine, OrnamentalDivider } from '@/components/Ornaments';

export function CoupleStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xText = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative bg-ivory-50 py-20 sm:py-32 overflow-hidden">
      {/* Background kolam dots */}
      <div className="absolute inset-0 kolam-bg opacity-40" />

      {/* Decorative vine */}
      <JasmineVine className="absolute left-4 top-20 h-40 w-40 text-gold-500/20 hidden sm:block" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Two Hearts, One Journey
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-700">
            இரு இதயங்கள் ஒரே பயணம்
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Framed portrait */}
          <ScrollReveal delay={0.2}>
            <OrnateFrame className="max-w-sm mx-auto">
              <ParallaxImage
                src={IMAGES.coupleStory}
                alt="Karthi and Varuna"
                className="aspect-[3/4] rounded-sm shadow-2xl"
                imgClassName="shadow-xl"
              />
            </OrnateFrame>
          </ScrollReveal>

          {/* Story text */}
          <div className="space-y-6">
            <ScrollReveal delay={0.3}>
              <motion.p
                style={{ x: xText }}
                className="font-serif text-lg sm:text-xl text-maroon-900 leading-relaxed italic"
              >
                "In the gentle warmth of a Chennai morning, beneath the temple bells
                and the scent of jasmine, our paths first crossed."
              </motion.p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-serif text-base sm:text-lg text-maroon-800/80 leading-relaxed">
                What began as a chance meeting at a family gathering blossomed
                into a love nurtured by shared laughter, quiet conversations, and
                the timeless traditions that bind our families. Through seasons
                of courtship, Karthi and Varuna discovered in each other a
                kindred spirit — a partner with whom to walk through life's
                sacred journey.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="font-serif text-base sm:text-lg text-maroon-800/80 leading-relaxed">
                With the blessings of their elders and the joy of their loved
                ones, they now step forward to unite their lives in the presence
                of the divine — beginning a new chapter as husband and wife.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-px w-12 bg-gold-600" />
                <p className="font-display text-sm tracking-wide-luxe text-gold-700 uppercase">
                  {WEDDING.groom} &amp; {WEDDING.bride}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
