import { ScrollReveal } from '@/components/ScrollReveal';
import { TempleArch, KolamMandala, OrnamentalDivider } from '@/components/Ornaments';
import { WEDDING } from '@/data/images';
import { MapPin, MessageCircle, CalendarCheck, Navigation } from 'lucide-react';

export function VenueRSVP() {
  return (
    <section className="relative bg-ivory-50 py-20 sm:py-32 overflow-hidden">
      <KolamMandala className="absolute -left-16 top-10 h-48 w-48 text-gold-600/10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <TempleArch className="h-8 w-32 text-gold-600/50 mx-auto mb-4" />
          <p className="font-sans text-xs tracking-luxe text-gold-700 uppercase mb-3">
            Join Us
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-maroon-800 mb-4">
            Venue &amp; RSVP
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-700">
            வரவேற்கிறோம்
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Venue with map */}
          <ScrollReveal delay={0.2}>
            <div className="bg-ivory-100 rounded-sm p-6 sm:p-8 border border-gold-600/15 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full border border-gold-600/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase">
                    The Venue
                  </p>
                  <h3 className="font-display text-xl text-maroon-800">
                    {WEDDING.venue}
                  </h3>
                </div>
              </div>

              <p className="font-serif text-sm text-maroon-700/80 mb-4 leading-relaxed">
                {WEDDING.venueAddress}
              </p>

              {/* Map embed */}
              <div className="relative rounded-sm overflow-hidden border border-gold-600/20 mb-4 h-48">
                <iframe
                  title="Wedding venue map"
                  src={WEDDING.mapEmbedUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={WEDDING.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full bg-maroon-800 hover:bg-maroon-700 text-ivory-50 font-sans text-xs tracking-wide-luxe uppercase px-6 py-4 rounded-sm transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </ScrollReveal>

          {/* RSVP + WhatsApp */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-6 h-full">
              {/* RSVP card */}
              <div className="bg-ivory-100 rounded-sm p-6 sm:p-8 border border-gold-600/15 shadow-sm flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full border border-gold-600/30 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-luxe text-gold-700 uppercase">
                      RSVP
                    </p>
                    <h3 className="font-display text-xl text-maroon-800">
                      Confirm Your Attendance
                    </h3>
                  </div>
                </div>

                <p className="font-serif text-sm text-maroon-700/80 mb-2 leading-relaxed">
                  Please confirm your presence by
                </p>
                <p className="font-display text-lg text-gold-700 mb-6">
                  {WEDDING.rsvpDeadline}
                </p>

                <a
                  href={WEDDING.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full bg-gold-600 hover:bg-gold-500 text-ivory-50 font-sans text-xs tracking-wide-luxe uppercase px-6 py-4 rounded-sm transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  RSVP via WhatsApp
                </a>
              </div>

              {/* WhatsApp quick contact */}
              <div className="bg-maroon-800 rounded-sm p-6 border border-gold-600/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gold-400" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[10px] tracking-luxe text-gold-400 uppercase mb-1">
                    Questions?
                  </p>
                  <p className="font-serif text-sm text-ivory-100">
                    Message us on WhatsApp for any queries about the ceremony
                  </p>
                </div>
                <a
                  href={WEDDING.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Navigation className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
