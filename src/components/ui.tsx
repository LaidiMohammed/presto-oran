'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Reveal({ children, delay = 0, y = 36, className = '' }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = 'center' }: { eyebrow: string; title: React.ReactNode; copy?: string; align?: 'center' | 'left' }) {
  const a = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-4 ${a}`}>
      <Reveal><span className="eyebrow">— {eyebrow} —</span></Reveal>
      <Reveal delay={0.08}><h2 className="h-display max-w-3xl text-3xl sm:text-5xl lg:text-6xl">{title}</h2></Reveal>
      {copy && <Reveal delay={0.16}><p className="max-w-2xl text-sm leading-relaxed text-smoke sm:text-[15px]">{copy}</p></Reveal>}
      <Reveal delay={0.2}><div className="hairline w-40" /></Reveal>
    </div>
  );
}
