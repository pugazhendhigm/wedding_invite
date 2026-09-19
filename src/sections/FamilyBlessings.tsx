import { ScrollReveal } from '@/components/ScrollReveal';
import { TempleArch, KolamMandala, OrnamentalDivider } from '@/components/Ornaments';
import { BLESSINGS } from '@/data/images';
import { Heart } from 'lucide-react';

export function FamilyBlessings() {
  return (
    <section className="relative bg-ivory-100 py-20 sm:py-32 overflow-hidden">
      <KolamMandala className="absolute right-0 top-0 h-48 w-48 text-gold-600/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <TempleArch className="h-8 w-32 text-gold-600/50 mx-auto mb-4" />
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            With Blessings From
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Our Families
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-700">
            குடும்ப ஆசீர்வாதம்
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {BLESSINGS.map((blessing, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="flex items-center gap-4 sm:gap-6 bg-ivory-50/80 rounded-sm px-6 py-6 shadow-sm border border-gold-600/10">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-gold-600/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gold-600/60" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase mb-1">
                    {blessing.relation}
                  </p>
                  <div className="space-y-1 font-display text-lg text-maroon-800 sm:text-xl">
                    {blessing.names.map((name) => <p key={name}>{name}</p>)}
                  </div>
                  <p className="font-tamil text-sm text-gold-600 mt-1">
                    {blessing.tamil}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-12">
          <p className="font-serif text-base sm:text-lg text-maroon-700 italic max-w-2xl mx-auto leading-relaxed">
            "We seek the blessings of our elders, the love of our family, and the
            presence of our friends as we embark on this sacred journey of
            togetherness."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
