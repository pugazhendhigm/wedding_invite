import { ScrollReveal } from '@/components/ScrollReveal';
import { OrnamentalDivider, TempleArch } from '@/components/Ornaments';
import { IMAGES, WEDDING } from '@/data/images';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function WeddingDetails() {
  return (
    <section className="relative w-full aspect-[2/3] overflow-hidden bg-maroon-950">
      <img
        src={IMAGES.weddingDetails}
        srcSet="https://framerusercontent.com/images/iciTJeQ6Cx2u0gNdZeuKHPf1I.webp?scale-down-to=1024&width=2048&height=3072 682w, https://framerusercontent.com/images/iciTJeQ6Cx2u0gNdZeuKHPf1I.webp?scale-down-to=2048&width=2048&height=3072 1365w, https://framerusercontent.com/images/iciTJeQ6Cx2u0gNdZeuKHPf1I.webp?width=2048&height=3072 2048w"
        sizes="100vw"
        alt="Wedding ceremony portrait"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="relative z-10 h-full">
        <ScrollReveal className="absolute inset-x-[17%] top-[19%] bottom-[14%] flex flex-col justify-center text-center sm:inset-x-[18%] sm:top-[21%] sm:bottom-[17%] lg:inset-x-[20%] lg:top-[23%] lg:bottom-[20%]">
          <img
        src="https://framerusercontent.com/images/7Jc7F5U6LjAzdX4ypVkjja74nO8.webp?scale-down-to=512&width=2500&height=2500"
        alt="Ganesha"
        className="mx-auto mb-4 w-10 sm:mb-6 sm:w-12 lg:mb-8 lg:w-16"
        loading="lazy"
      />
          <TempleArch className="mx-auto mb-4 h-5 w-20 text-gold-700/80 sm:mb-5 sm:h-7 sm:w-28 lg:mb-6 lg:h-8 lg:w-32" />
          <p className="mb-3 font-sans text-[8px] uppercase tracking-luxe text-maroon-800 sm:mb-4 sm:text-[9px] lg:mb-5 lg:text-[10px]">
            The Wedding Ceremony
          </p>
          <h2 className="font-display text-2xl text-maroon-900 sm:text-3xl md:text-4xl lg:text-5xl">Muhurtham</h2>
          <OrnamentalDivider className="my-4 sm:my-6 lg:my-8" />

          <div className="space-y-4 py-2 text-maroon-900 sm:space-y-6 sm:py-3 lg:space-y-8 lg:py-4">
            <Detail icon={<Calendar className="h-3 w-3 sm:h-4 sm:w-4" />} label="The Date">
              {WEDDING.date}
            </Detail>
            <Detail icon={<Clock className="h-3 w-3 sm:h-4 sm:w-4" />} label="The Time">
              {WEDDING.time}
            </Detail>
            <Detail icon={<MapPin className="h-3 w-3 sm:h-4 sm:w-4" />} label="The Venue">
              {WEDDING.venue}
              <span className="mt-1 block font-serif text-[10px] text-maroon-800/80 sm:mt-2 sm:text-xs lg:text-sm">{WEDDING.venueAddress}</span>
            </Detail>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Detail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-center gap-2 text-gold-700">
        {icon}
        <p className="font-sans text-[8px] uppercase tracking-luxe sm:text-[9px] lg:text-[10px]">{label}</p>
      </div>
      <p className="font-display text-lg leading-snug text-maroon-900 sm:text-xl md:text-2xl lg:text-3xl">{children}</p>
    </div>
  );
}
