interface OrnamentProps {
  className?: string;
}

// Lotus / temple arch ornament
export function TempleArch({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 L10 20 Q60 -5 110 20 L110 40" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M20 40 L20 22 Q60 2 100 22 L100 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="15" r="3" fill="currentColor" opacity="0.7" />
      <path d="M60 18 L60 40" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M48 40 L48 28 L52 25 L56 28 L60 25 L64 28 L68 25 L72 28 L72 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}

// Mango leaf chain
export function MangoLeafChain({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12 L40 12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path d="M160 12 L200 12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {[40, 70, 100, 130, 160].map((x, i) => (
        <g key={i}>
          <path
            d={`M${x} 12 Q${x - 6} 4 ${x} 0 Q${x + 6} 4 ${x} 12 Z`}
            fill="currentColor"
            opacity={0.3 + (i % 2) * 0.15}
          />
          <path
            d={`M${x} 12 Q${x - 6} 20 ${x} 24 Q${x + 6} 20 ${x} 12 Z`}
            fill="currentColor"
            opacity={0.3 + (i % 2) * 0.15}
          />
        </g>
      ))}
      <circle cx="100" cy="12" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Kolam lotus mandala
export function KolamMandala({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + 15 * Math.cos(rad);
        const y1 = 50 + 15 * Math.sin(rad);
        const x2 = 50 + 45 * Math.cos(rad);
        const y2 = 50 + 45 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.2" />;
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 35 * Math.cos(rad);
        const y = 50 + 35 * Math.sin(rad);
        return <circle key={`d-${angle}`} cx={x} cy={y} r="2" fill="currentColor" opacity="0.4" />;
      })}
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// Jasmine vine
export function JasmineVine({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0 Q50 30 60 60 Q70 90 60 120" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {[15, 35, 55, 75, 95].map((y, i) => (
        <g key={i}>
          <circle cx={i % 2 === 0 ? 50 : 70} cy={y} r="3" fill="currentColor" opacity="0.3" />
          <circle cx={i % 2 === 0 ? 50 : 70} cy={y} r="1.5" fill="currentColor" opacity="0.5" />
        </g>
      ))}
      <path d="M55 15 Q45 12 42 18 Q45 22 55 20" fill="currentColor" opacity="0.2" />
      <path d="M65 35 Q75 32 78 38 Q75 42 65 40" fill="currentColor" opacity="0.2" />
      <path d="M55 55 Q45 52 42 58 Q45 62 55 60" fill="currentColor" opacity="0.2" />
      <path d="M65 75 Q75 72 78 78 Q75 82 65 80" fill="currentColor" opacity="0.2" />
      <path d="M55 95 Q45 92 42 98 Q45 102 55 100" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// Ornamental divider with center motif
export function OrnamentalDivider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-600 sm:w-20" />
      <svg viewBox="0 0 40 40" className="h-8 w-8 text-gold-600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4 L20 36" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <path d="M8 20 L32 20" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
        <path d="M20 8 Q24 12 20 16 Q16 12 20 8 Z" fill="currentColor" opacity="0.3" />
        <path d="M20 24 Q24 28 20 32 Q16 28 20 24 Z" fill="currentColor" opacity="0.3" />
        <path d="M8 20 Q12 24 16 20 Q12 16 8 20 Z" fill="currentColor" opacity="0.3" />
        <path d="M24 20 Q28 24 32 20 Q28 16 24 20 Z" fill="currentColor" opacity="0.3" />
      </svg>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-600 sm:w-20" />
    </div>
  );
}

// Corner flourish
export function CornerFlourish({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 L40 0" stroke="currentColor" strokeWidth="1" />
      <path d="M0 0 L0 40" stroke="currentColor" strokeWidth="1" />
      <path d="M5 5 L30 5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d="M5 5 L5 30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d="M10 10 Q20 5 25 10 Q20 15 10 10" fill="currentColor" opacity="0.3" />
      <path d="M10 10 Q5 20 10 25 Q15 20 10 10" fill="currentColor" opacity="0.3" />
      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// Decorative frame wrapper component
export function OrnateFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="corner-ornament tl" />
      <div className="corner-ornament tr" />
      <div className="corner-ornament bl" />
      <div className="corner-ornament br" />
      <div className="relative">{children}</div>
    </div>
  );
}
