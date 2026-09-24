'use client';
import Image from 'next/image';
import { Reveal } from '@/components/ui';
import { INFO, money } from '@/lib/data';
import { useLang, pick } from '@/lib/i18n';
import { useCart } from '@/components/store';

export default function ServicesPage() {
  const { t, lang } = useLang();
  const { services } = useCart();
  return (
    <div className="container-luxe py-10 sm:py-14">
      <Reveal><p className="eyebrow">— PRESTO · Oran —</p>
        <h1 className="h-display mt-3 text-4xl sm:text-7xl">{t('svc.titleA')} <span className="gold-text italic">{t('svc.titleB')}</span></h1>
        <p className="mt-3 max-w-xl text-sm text-smoke sm:mt-4">{t('svc.sub')}</p></Reveal>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.07}>
            <article className="group flex gap-3 overflow-hidden rounded-2xl border border-white/10 bg-noir-900 p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/50 sm:gap-5 sm:p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                <Image src={s.image} alt={pick(lang, s.fr, s.ar)} fill sizes="15vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-display text-base transition group-hover:text-gold-300 sm:text-xl">{pick(lang, s.fr, s.ar)}</h3>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-smoke sm:text-[11px] sm:tracking-[0.2em]">{t('svc.duration')} · {s.duration}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                  <span className="font-display text-xl text-gold-300 sm:text-2xl">{money(s.price)}</span>
                  <a href={`${INFO.wa1}?text=${encodeURIComponent(pick(lang, s.fr, s.ar) + ' — ' + money(s.price))}`} target="_blank" rel="noreferrer" className="rounded-full bg-gold-500 px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-black transition hover:bg-gold-300 sm:px-4">{t('svc.book')}</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 sm:mt-14">
        <div className="card flex flex-col items-center justify-between gap-4 p-5 text-center sm:gap-6 sm:p-8 sm:text-center lg:flex-row lg:text-start sm:p-10">
          <div><h2 className="font-display text-2xl sm:text-4xl">{lang === 'ar' ? 'شيء خاص؟ خياطة كاملة حسب المقاس.' : 'Un besoin spécial ? Couture entièrement sur mesure.'}</h2>
          <p className="mt-2 text-smoke">{t('contact.hours')} · {INFO.addr1} · {INFO.addr2}</p></div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={INFO.wa1} target="_blank" rel="noreferrer" className="btn-gold">{t('btn.quote')} — {INFO.tel1}</a>
            <a href={INFO.wa2} target="_blank" rel="noreferrer" className="btn-ghost">{INFO.tel2}</a>
          </div>
        </div>
      </Reveal>

    </div>
  );
}
