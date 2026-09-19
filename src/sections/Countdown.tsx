import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TempleArch, OrnamentalDivider } from '@/components/Ornaments';
import { WEDDING } from '@/data/images';

const targetDate = new Date(WEDDING.dateTime);

function calculateTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', tamil: 'நாட்கள்', value: timeLeft.days },
    { label: 'Hours', tamil: 'மணி', value: timeLeft.hours },
    { label: 'Minutes', tamil: 'நிமிடம்', value: timeLeft.minutes },
    { label: 'Seconds', tamil: 'விநாடி', value: timeLeft.seconds },
  ];

  return (
    <section className="relative bg-maroon-950 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 kolam-bg opacity-5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <TempleArch className="h-8 w-32 text-gold-400/50 mx-auto mb-4" />
          <p className="font-sans text-xs tracking-luxe text-gold-400 uppercase mb-3">
            Counting Down
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 mb-4">
            The Sacred Moment Awaits
          </h2>
          <OrnamentalDivider className="my-6" />
          <p className="font-tamil text-lg sm:text-xl text-gold-400 mb-12">
            திருமண நாள் வருகிறது
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {units.map((unit, i) => (
            <ScrollReveal key={unit.label} delay={0.1 * i}>
              <div className="relative">
                <div className="bg-gradient-to-b from-maroon-800/50 to-maroon-900/50 border border-gold-700/30 rounded-sm px-2 py-6 sm:py-8">
                  <div className="font-display text-4xl sm:text-6xl text-gold-400 tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <p className="font-sans text-[10px] tracking-luxe text-ivory-200/70 uppercase mt-2">
                    {unit.label}
                  </p>
                  <p className="font-tamil text-xs text-gold-300/60 mt-1">
                    {unit.tamil}
                  </p>
                </div>
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold-500/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-500/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold-500/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-500/40" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-8">
          <p className="font-serif text-sm sm:text-base text-ivory-200/60 italic">
            {WEDDING.date} at {WEDDING.time}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
