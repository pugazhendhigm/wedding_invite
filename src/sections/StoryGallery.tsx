import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MangoLeafChain, OrnamentalDivider } from '@/components/Ornaments';

export function StoryGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['-5%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={ref} className="relative bg-ivory-50 py-20 sm:py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            Moments in Time
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Cherished Memories
          </h2>
          <OrnamentalDivider className="my-6" />
          <MangoLeafChain className="h-4 w-48 sm:w-64 text-gold-600/40 mx-auto" />
        </ScrollReveal>

        {/* Layered image composition */}
        <div className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center">
          {/* Left image */}
          <motion.div
            style={{ y: y1, rotate: rotate1 }}
            className="absolute left-0 sm:left-8 top-8 sm:top-12 w-40 sm:w-64 md:w-72 z-10"
          >
            <div className="ornate-frame">
              <ScrollReveal>
                <img
                  src={IMAGES.storyGallery}
                  alt="Couple moment"
                  className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>
          </motion.div>

          {/* Center image (largest) */}
          <motion.div
            style={{ y: y2 }}
            className="relative z-20 w-56 sm:w-80 md:w-96"
          >
            <div className="ornate-frame">
              <ScrollReveal delay={0.2}>
                <img
                  src={IMAGES.coupleGallery}
                  alt="Couple gallery"
                  className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            style={{ y: y1, rotate: rotate2 }}
            className="absolute right-0 sm:right-8 bottom-8 sm:bottom-12 w-40 sm:w-64 md:w-72 z-10"
          >
            <div className="ornate-frame">
              <ScrollReveal delay={0.4}>
                <img
                  src={IMAGES.tamilPortrait}
                  alt="Portrait"
                  className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            style={{ rotate: rotate1 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-32 z-0"
          >
            <div className="w-full h-full rounded-full border border-gold-600/20" />
          </motion.div>
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-8">
          <p className="font-serif text-base sm:text-lg text-maroon-700 italic max-w-2xl mx-auto leading-relaxed">
            "Every photograph is a window to a moment we wish to hold forever —
            the glances, the laughter, the quiet promises spoken in the language
            of love."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
