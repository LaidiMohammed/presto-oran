'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/ui';
import { useLang } from '@/lib/i18n';
import { ORAN, INFO, VIDEOS } from '@/lib/data';

export default function AboutPage() {
  const { t, ar } = useLang();
  return (
    <div>
      <section className="relative flex min-h-[46vh] sm:min-h-[62vh] items-end overflow-hidden">
        <Image src={ORAN.theatre} alt="Théâtre d'Oran" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/50 to-black/30" />
        <div className="container-luxe relative z-10 py-10 sm:py-20"><p className="eyebrow">— PRESTO · {ar ? 'وهران' : 'Oran'} —</p><h1 className="h-display mt-3 max-w-3xl text-4xl sm:text-7xl">{t('about.titleA')} <span className="gold-text italic">{t('about.titleB')}</span></h1></div>
      </section>
      <div className="container-luxe grid gap-8 py-10 sm:gap-12 sm:py-20 lg:grid-cols-2">
        <Reveal><h2 className="h-display text-3xl sm:text-5xl">{ar ? 'محلّان، فريق واحد، ووعد واحد.' : 'Deux adresses, une équipe, une promesse.'}</h2>
          <p className="mt-4 leading-relaxed text-sm text-smoke sm:mt-6 sm:text-base">{ar ? 'من وسط المدينة إلى عكيد لطفي، برستو تصلح وتخيط وتكوي آلاف القطع كل شهر. كل زبون يخرج بابتسامة — أو نعيد العمل مجاناً.' : 'Du Centre-Ville à Akid-Lotfi, PRESTO répare, coud et repasse des milliers de pièces chaque mois. Chaque client repart souriant — ou le travail est repris gratuitement.'}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-4">{[['12+', ar ? 'خياط' : 'Tailleurs'], ['8k+', t('stats.clients')], ['24h', ar ? 'تسليم سريع' : 'Délai express']].map(([n, l]) => (<div key={l} className="card p-4 text-center sm:p-5"><p className="font-display text-2xl text-gold-300 sm:text-3xl">{n}</p><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-smoke sm:text-[10px] sm:tracking-[0.25em]">{l}</p></div>))}</div>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"><Link href="/services" className="btn-gold flex-1 justify-center sm:flex-none">{t('hero.cta1')}</Link><Link href="/contact" className="btn-ghost flex-1 justify-center sm:flex-none">{t('nav.contact')}</Link></div></Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl"><video autoPlay muted loop playsInline className="aspect-[4/4.4] w-full object-cover" poster={ORAN.minaret}><source src={VIDEOS.atelier} type="video/mp4" /></video></div>
        </Reveal>
      </div>
      <section className="border-y border-white/10 bg-[#0d0d0f]"><div className="container-luxe py-10 sm:py-20">
        <SectionHeading eyebrow="PRESTO" title={<>{INFO.addr1} <span className="gold-text italic">· {INFO.addr2}</span></>} />
        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
          {[{ tel: INFO.tel1, addr: INFO.addr1, img: ORAN.gare }, { tel: INFO.tel2, addr: INFO.addr2, img: ORAN.bay }].map((s) => (
            <Reveal key={s.addr}><div className="card flex gap-4 p-4 sm:gap-5 sm:p-5"><img src={s.img} alt={s.addr} className="h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28" /><div><b className="font-display text-xl text-gold-300 sm:text-2xl">{s.addr}</b><a href={`tel:${s.tel.replace(/\s/g, '')}`} className="mt-1 block font-bold">📞 {s.tel}</a><p className="text-xs text-smoke">{t('contact.hours')}</p></div></div></Reveal>
          ))}
        </div>
      </div></section>
    </div>
  );
}
