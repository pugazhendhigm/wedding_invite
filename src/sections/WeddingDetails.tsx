import { ScrollReveal, ParallaxImage } from '@/components/ScrollReveal';
import { OrnateFrame, TempleArch, KolamMandala, OrnamentalDivider } from '@/components/Ornaments';
import { IMAGES, WEDDING } from '@/data/images';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function WeddingDetails() {
  return (
    <section className="relative bg-ivory-100 py-20 sm:py-32 overflow-hidden">
      {/* Background mandala */}
      <KolamMandala className="absolute -right-20 top-10 h-64 w-64 text-gold-600/10" />
      <KolamMandala className="absolute -left-20 bottom-10 h-64 w-64 text-gold-600/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <TempleArch className="h-8 w-32 text-gold-600/50 mx-auto mb-4" />
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            The Wedding Ceremony
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Muhurtham
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-700">
            முகூர்த்த நாள்
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Framed portrait */}
          <ScrollReveal delay={0.2} className="order-2 md:order-1">
            <OrnateFrame className="max-w-sm mx-auto">
              <ParallaxImage
                src={IMAGES.weddingDetails}
                alt="Wedding ceremony portrait"
                className="aspect-[2/3] rounded-sm shadow-2xl"
              />
            </OrnateFrame>
          </ScrollReveal>

          {/* Details */}
          <div className="space-y-8 order-1 md:order-2">
            <ScrollReveal delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase mb-1">
                    The Date
                  </p>
                  <p className="font-display text-xl sm:text-2xl text-maroon-800">
                    {WEDDING.date}
                  </p>
                  <p className="font-tamil text-sm text-maroon-600 mt-1">
                    டிசம்பர் 14, 2026
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase mb-1">
                    The Time
                  </p>
                  <p className="font-display text-xl sm:text-2xl text-maroon-800">
                    {WEDDING.time}
                  </p>
                  <p className="font-tamil text-sm text-maroon-600 mt-1">
                    காலை 7:00 மணி
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-600/40 flex items justify-center">
                  <MapPin className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase mb-1">
                    The Venue
                  </p>
                  <p className="font-display text-xl sm:text-2xl text-maroon-800">
                    {WEDDING.venue}
                  </p>
                  <p className="font-serif text-sm text-maroon-600 mt-1">
                    {WEDDING.venueAddress}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="pt-4 border-t border-gold-600/20">
                <p className="font-serif text-base sm:text-lg text-maroon-700 italic leading-relaxed">
                  "With the blessings of our ancestors and the grace of the divine,
                  we invite you to witness the sacred union of our children."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
