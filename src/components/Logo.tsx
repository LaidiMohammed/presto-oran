'use client';
import { useState } from 'react';

/** PRESTO roundel: uses /logo-presto.png when the owner drops it in /public, else crafted SVG fallback */
export function Logo({ size = 44 }: { size?: number }) {
  const [png, setPng] = useState(true);
  return (
    <span className="flex items-center gap-3">
      {png ? (
        <img
          src="/logo-presto.png"
          alt="PRESTO"
          width={size}
          height={size}
          onError={() => setPng(false)}
          className="rounded-full bg-cream object-cover ring-1 ring-gold-500/60"
        />
      ) : (
        <span
          className="grid shrink-0 place-items-center rounded-full border-2 border-gold-500/70 bg-noir-950 text-gold-400"
          style={{ width: size, height: size }}
          aria-label="PRESTO"
        >
          <svg viewBox="0 0 48 48" width={size * 0.72} height={size * 0.72} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 34h32" />
            <path d="M14 34V22c0-3 2-5 5-5h11c4 0 7-3 7-7V7" />
            <path d="M37 7h-4M14 22H9m5 0v12" />
            <circle cx="28" cy="20" r="2.4" fill="currentColor" stroke="none" />
            <path d="M11 34v-6" />
          </svg>
        </span>
      )}
      <span className="leading-none">
        <span className="block font-display text-[26px] font-bold tracking-[0.14em]">PRESTO</span>
        <span className="block text-[9px] font-bold uppercase tracking-mega text-smoke">Retouche · Couture · Oran</span>
      </span>
    </span>
  );
}
