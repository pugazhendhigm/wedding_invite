import { WEDDING } from '@/data/images';
import { KolamMandala } from '@/components/Ornaments';

export function Footer() {
  return (
    <footer className="relative bg-maroon-950 py-12 overflow-hidden">
      <KolamMandala className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 text-gold-600/5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold-700/40" />
          <p className="font-tamil text-base text-gold-400/80">
            கார்த்தி &amp; வருணா
          </p>
          <div className="h-px w-12 bg-gold-700/40" />
        </div>

        <p className="font-display text-sm text-ivory-200/50 tracking-wide-luxe uppercase mb-2">
          {WEDDING.groom} &amp; {WEDDING.bride}
        </p>
        <p className="font-serif text-xs text-ivory-200/40">
          {WEDDING.date} · {WEDDING.venue}
        </p>

        <div className="mt-6 pt-6 border-t border-gold-700/15">
          <p className="font-sans text-[10px] tracking-luxe text-ivory-200/30 uppercase">
            Made with love · Tamil Wedding Invitation
          </p>
        </div>
      </div>
    </footer>
  );
}
