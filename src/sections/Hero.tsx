import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES, WEDDING } from '@/data/images';
import { TempleArch, MangoLeafChain } from '@/components/Ornaments';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Finish the story animation as the sticky frame releases. Using `end end`
  // prevents the final viewport-height of this tall section from scrolling by
  // after the story portrait has already left the frame.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Let the portrait settle into the final hero frame. It must not move out of
  // view before this section releases, otherwise the base layer reads as an
  // empty gap before the following section.
  const storyY = useTransform(scrollYProgress, [0, 1], ['115%', '0%']);
  const storyScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.3]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[360vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Opening image recedes as the story image takes over. */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Karthi and Varuna wedding"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/40 via-maroon-950/20 to-maroon-950/60" />
        </div>

        {/* The second half of the hero becomes a slow, full-screen story portrait. */}
        <motion.div
          style={{ y: storyY, scale: storyScale }}
          className="absolute inset-0 z-20"
        >
          <img
            src={IMAGES.coupleStory}
            alt={`${WEDDING.groom} and ${WEDDING.bride}`}
            className="h-full w-full object-contain object-center"
          />
        </motion.div>

        {/* Top ornament */}
        {/* <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ opacity: heroTextOpacity }}
          className="absolute top-6 left-0 right-0 flex flex-col items-center gap-2 z-10"
        >
          <TempleArch className="h-8 w-32 text-gold-400/70" />
          <p className="font-sans text-[10px] tracking-luxe text-ivory-100/80 uppercase">
            Tamil Wedding Invitation
          </p>
        </motion.div> */}

        {/* Center content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        >
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-xs sm:text-sm tracking-luxe text-ivory-200/90 text-center mb-4 uppercase">
            Together with their families
          </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory-50 leading-none tracking-wide">
            {WEDDING.groom}
          </h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="flex items-center justify-center my-3 sm:my-4"
          >
            <span className="text-gold-400 text-2xl sm:text-3xl font-display italic">&</span>
          </motion.div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory-50 leading-none tracking-wide">
            {WEDDING.bride}
          </h1>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <MangoLeafChain className="h-4 w-40 sm:w-56 text-gold-400/60" />
          <p className="font-tamil text-base sm:text-lg text-ivory-200/90 tracking-wide">
            கார்த்திக் &amp; வருணா
          </p>
          <p className="font-display text-sm sm:text-base tracking-wide-luxe text-ivory-200/80">
            {WEDDING.dateShort}
          </p>
          </motion.div>
        </motion.div>

        {/* Bottom scroll indicator */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-10"
        >
          <p className="font-sans text-[10px] tracking-luxe text-ivory-200/60 uppercase">
            Scroll to begin
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-gold-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
