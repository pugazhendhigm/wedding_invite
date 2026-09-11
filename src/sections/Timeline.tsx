import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE } from '@/data/images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TempleArch, OrnamentalDivider } from '@/components/Ornaments';

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative bg-maroon-950 py-20 sm:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 kolam-bg opacity-5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <TempleArch className="h-8 w-32 text-gold-400/50 mx-auto mb-4" />
          <p className="font-sans text-xs tracking-luxe text-gold-400 uppercase mb-3">
            The Sacred Rituals
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 mb-4">
            A Day of Ceremony
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-400">
            திருமண வாழ்வின் புனித நிகழ்வுகள்
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gold-700/20 -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-1/2 top-0 w-px bg-gradient-to-b from-gold-400 to-gold-600 -translate-x-1/2"
          />

          {TIMELINE.map((event, i) => (
            <ScrollReveal
              key={i}
              delay={0.1 * (i % 2)}
              className={`relative flex ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start gap-4 sm:gap-0 mb-12 last:mb-0`}
            >
              {/* Dot */}
              <div className="absolute left-6 sm:left-1/2 top-2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-4 h-4 rounded-full bg-gold-500 border-2 border-maroon-950 flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-maroon-950" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`pl-16 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-display text-sm text-gold-400 tracking-wide-luxe mb-1">
                    {event.time}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl text-ivory-50 mb-1">
                    {event.title}
                  </h3>
                  <p className="font-tamil text-base text-gold-300/80 mb-2">
                    {event.tamil}
                  </p>
                  <p className="font-serif text-sm sm:text-base text-ivory-200/70 leading-relaxed">
                    {event.desc}
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
