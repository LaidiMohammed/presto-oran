'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { useLang, pick } from '@/lib/i18n';
import { COLLECTIONS, ORAN, VIDEOS } from '@/lib/data';

export default function CollectionsPage() {
  const { t, lang } = useLang();
  return (
    <div>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden sm:min-h-[60vh]">
        <Image src={ORAN.bay} alt="Baie d'Oran" fill priority sizes="100vw" className="object-cover" />
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster={ORAN.bay}><source src={VIDEOS.runway} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/50 to-black/40" />
        <div className="container-luxe relative z-10 py-10 sm:py-20"><p className="eyebrow">— PRESTO · Oran —</p><h1 className="h-display mt-3 text-4xl sm:text-7xl">{t('col.titleA')}<br /><span className="gold-text italic">{t('col.titleB')}</span></h1></div>
      </section>
      <div className="container-luxe py-10 sm:py-20">
        <SectionHeading eyebrow={t('nav.collections')} title={<>{t('col.titleA')} <span className="gold-text italic">{t('col.titleB')}</span></>} />
        <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug}>
              <Link href={c.slug === 'boutique' ? '/shop' : '/services'} className={`group grid overflow-hidden rounded-3xl border border-white/10 bg-noir-900 transition hover:border-gold-500/40 lg:grid-cols-[1.2fr_1fr] ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative min-h-[200px] overflow-hidden sm:min-h-[280px]"><Image src={c.image} alt={pick(lang, c.fr, c.ar)} fill sizes="55vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" /></div>
                <div className="flex flex-col justify-center p-6 sm:p-12">
                  <p className="eyebrow">{c.pieces} · PRESTO</p>
                  <h2 className="h-display mt-3 text-3xl transition group-hover:text-gold-300 sm:text-5xl">{pick(lang, c.fr, c.ar)}</h2>
                  <p className="mt-4 text-smoke">{pick(lang, c.descFr, c.descAr)}</p>
                  <span className="btn-ghost mt-8 w-fit">{t('btn.all')} <ArrowIcon /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
