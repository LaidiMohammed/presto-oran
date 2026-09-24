'use client';
import Link from 'next/link';
import { ArrowIcon } from './icons';
import { Logo } from './Logo';
import { useLang } from '@/lib/i18n';
import { INFO } from '@/lib/data';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08080a]">
      <div className="container-luxe grid gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-smoke">{t('foot.tag')}</p>
          <div className="mt-5 space-y-1.5 text-sm text-cream/80">
            <p>📞 {INFO.addr1} : <a className="text-gold-300" href={`tel:${INFO.tel1.replace(/\s/g, '')}`}>{INFO.tel1}</a></p>
            <p>📞 {INFO.addr2} : <a className="text-gold-300" href={`tel:${INFO.tel2.replace(/\s/g, '')}`}>{INFO.tel2}</a></p>
            <p>📧 <a className="text-gold-300" href={`mailto:${INFO.email}`}>{INFO.email}</a></p>
          </div>
          <a href={INFO.instagram} target="_blank" rel="noreferrer" className="btn-ghost mt-6 !px-5 !py-2.5">📸 Instagram — presto.dz</a>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">{t('foot.maison')}</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {[[t('nav.shop'), '/shop'], [t('nav.services'), '/services'], [t('nav.collections'), '/collections'], [t('nav.about'), '/about'], [t('nav.journal'), '/journal']].map(([l, h]) => (
              <li key={h}><Link href={h} className="transition hover:ps-1 hover:text-gold-300">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">{t('foot.care')}</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {[[t('nav.contact'), '/contact'], [t('faq.titleA') + ' ' + t('faq.titleB'), '/faq'], [t('cart.title'), '/cart'], ['Admin', '/admin']].map(([l, h]) => (
              <li key={h}><Link href={h} className="transition hover:ps-1 hover:text-gold-300">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h4 className="font-display text-2xl">{t('contact.form')}</h4>
          <p className="mt-2 text-sm text-smoke">{t('contact.hours')}</p>
          <div className="mt-4 grid gap-2">
            <a href={INFO.wa1} target="_blank" rel="noreferrer" className="btn-gold w-full !py-3">WhatsApp {INFO.addr1}</a>
            <a href={INFO.wa2} target="_blank" rel="noreferrer" className="btn-ghost w-full !py-3">WhatsApp {INFO.addr2}</a>
          </div>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="input-luxe" placeholder="Email" type="email" required />
            <button className="shrink-0 bg-gold-500 px-4 text-black transition hover:bg-gold-300" aria-label="subscribe"><ArrowIcon /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-[11px] uppercase tracking-[0.25em] text-smoke sm:flex-row">
          <span>{t('foot.rights')}</span>
          <a href={INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-gold-300">📸 @presto.dz</a>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[18vw] leading-none text-white/[0.025]">PRESTO</div>
    </footer>
  );
}
