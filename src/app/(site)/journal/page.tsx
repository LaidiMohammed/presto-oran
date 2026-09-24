'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui';
import { useLang, pick } from '@/lib/i18n';
import { POSTS } from '@/lib/data';

export default function JournalPage() {
  const { t, lang } = useLang();
  const [first, ...rest] = POSTS;
  return (
    <div className="container-luxe py-14">
      <Reveal><p className="eyebrow">— {t('sec.journalEyebrow')} —</p><h1 className="h-display mt-3 text-4xl sm:text-7xl">{t('jour.titleA')} <span className="gold-text italic">{t('jour.titleB')}</span></h1></Reveal>
      <Reveal delay={0.1}>
        <Link href={`/journal/${first.slug}`} className="group mt-10 grid overflow-hidden rounded-3xl border border-white/10 bg-noir-900 transition hover:border-gold-500/40 lg:grid-cols-2">
          <div className="relative min-h-[300px]"><Image src={first.image} alt={pick(lang, first.fr, first.ar)} fill sizes="50vw" className="object-cover transition duration-1000 group-hover:scale-105" /></div>
          <div className="flex flex-col justify-center p-10"><p className="eyebrow">{pick(lang, first.categoryFr, first.categoryAr)} · {first.date}</p><h2 className="h-display mt-3 text-4xl transition group-hover:text-gold-300">{pick(lang, first.fr, first.ar)}</h2><p className="mt-4 text-smoke">{pick(lang, first.exFr, first.exAr)}</p></div>
        </Link>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {rest.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.08}>
            <Link href={`/journal/${a.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition hover:border-gold-500/40">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src={a.image} alt={pick(lang, a.fr, a.ar)} fill sizes="33vw" className="object-cover transition duration-1000 group-hover:scale-110" /></div>
              <div className="p-6"><h3 className="font-display text-2xl leading-tight group-hover:text-gold-300">{pick(lang, a.fr, a.ar)}</h3><p className="mt-2 text-sm text-smoke">{pick(lang, a.exFr, a.exAr)}</p></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
