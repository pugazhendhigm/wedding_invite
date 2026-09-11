import { ScrollReveal } from '@/components/ScrollReveal';
import { TempleArch, JasmineVine, OrnamentalDivider } from '@/components/Ornaments';
import { TAMIL_QUOTE, TAMIL_QUOTE_TRANSLATION } from '@/data/images';

export function TamilQuote() {
  return (
    <section className="relative bg-ivory-50 py-20 sm:py-32 overflow-hidden">
      <JasmineVine className="absolute left-2 top-10 h-32 w-32 text-gold-500/15" />
      <JasmineVine className="absolute right-2 bottom-10 h-32 w-32 text-gold-500/15 rotate-180" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <TempleArch className="h-10 w-40 text-gold-600/50 mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-tamil text-3xl sm:text-4xl md:text-5xl text-maroon-800 leading-relaxed mb-8">
            {TAMIL_QUOTE}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <OrnamentalDivider className="my-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="font-display text-lg sm:text-xl md:text-2xl text-gold-700 italic leading-relaxed">
            {TAMIL_QUOTE_TRANSLATION}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="font-serif text-sm sm:text-base text-maroon-600/70 mt-6 max-w-xl mx-auto leading-relaxed">
            In Tamil culture, a wedding is not merely the union of two people,
            but the sacred coming together of two families — a moment blessed
            by generations past and celebrated by generations to come.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
