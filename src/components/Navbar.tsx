'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BagIcon, HeartIcon, MenuIcon, CloseIcon, UserIcon } from './icons';
import { Logo } from './Logo';
import { useCart } from './store';
import { useLang } from '@/lib/i18n';
import { INFO } from '@/lib/data';

export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const { t, lang, setLang } = useLang();

  const LINKS = [
    { href: '/', label: t('nav.home') }, { href: '/services', label: t('nav.services') },
    { href: '/shop', label: t('nav.shop') }, { href: '/collections', label: t('nav.collections') },
    { href: '/about', label: t('nav.about') }, { href: '/journal', label: t('nav.journal') },
    { href: '/contact', label: t('nav.contact') }
  ];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-gold-500/25 bg-gradient-to-r from-[#141005] via-noir-950 to-[#141005]">
        <div className="container-luxe flex items-center justify-between gap-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] sm:gap-4 sm:tracking-[0.18em]">
          <span className="hidden text-gold-300 sm:block">✦ {t('top.visit')} — {t('top.ship')}</span>
          <span className="flex items-center gap-3 text-cream/85 sm:gap-4">
            <a href={`tel:${INFO.tel1.replace(/\s/g, '')}`} className="transition hover:text-gold-300">📞 {INFO.addr1} : {INFO.tel1}</a>
            <a href={`tel:${INFO.tel2.replace(/\s/g, '')}`} className="hidden transition hover:text-gold-300 md:block">📞 {INFO.addr2} : {INFO.tel2}</a>
          </span>
        </div>
      </div>

      <header className={`fixed inset-x-0 top-[26px] z-[60] transition-all duration-500 sm:top-[28px] ${scrolled ? 'bg-noir-950/90 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
        <div className="container-luxe flex h-[60px] items-center justify-between gap-2 sm:h-[76px] sm:gap-4">
          <button onClick={() => setOpen(true)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-cream transition hover:border-gold-400 lg:hidden" aria-label="menu"><MenuIcon /></button>
          <Link href="/" aria-label="PRESTO home" className="shrink-0"><Logo /></Link>
          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={`group relative whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] transition ${path === l.href ? 'text-gold-300' : 'text-cream/80 hover:text-cream'}`}>
                {l.label}
                <span className={`absolute -bottom-2 start-0 h-px bg-gold-400 transition-all duration-300 ${path === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span className="flex overflow-hidden rounded-full border border-gold-500/50 text-[11px] font-extrabold">
              <button onClick={() => setLang('fr')} className={`min-h-[36px] px-2.5 py-1.5 transition sm:min-h-[38px] sm:px-3 ${lang === 'fr' ? 'bg-gold-500 text-black' : 'text-gold-300 hover:bg-gold-500/10'}`}>FR</button>
              <button onClick={() => setLang('ar')} className={`min-h-[36px] px-2.5 py-1.5 transition sm:min-h-[38px] sm:px-3 ${lang === 'ar' ? 'bg-gold-500 text-black' : 'text-gold-300 hover:bg-gold-500/10'}`}>عربي</button>
            </span>
            <Link href="/login" className="hidden h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-gold-400 sm:grid" aria-label="account"><UserIcon /></Link>
            <Link href="/wishlist" className="hidden h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-gold-400 sm:grid" aria-label="wishlist"><HeartIcon /></Link>
            <Link href="/cart" className="relative grid h-11 w-11 place-items-center rounded-full bg-cream text-black transition hover:bg-gold-300" aria-label="cart">
              <BagIcon />
              {count > 0 && <span className="absolute -end-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-500 px-1 text-[10px] font-extrabold text-black ring-2 ring-noir-950">{count}</span>}
            </Link>
            <a href={INFO.wa1} target="_blank" rel="noreferrer" className="btn-gold hidden !px-5 !py-2.5 md:inline-flex">Devis ✦</a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
            <motion.aside
              initial={{ x: lang === 'ar' ? '100%' : '-100%' }} animate={{ x: 0 }} exit={{ x: lang === 'ar' ? '100%' : '-100%' }} transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="flex h-[100dvh] w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-noir-900 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo size={40} />
                <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15" aria-label="close"><CloseIcon /></button>
              </div>
              <nav className="mt-8 flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3.5 font-display text-2xl transition hover:ps-3 hover:text-gold-300">{l.label}</Link>
                  </motion.div>
                ))}
                <Link href="/admin" onClick={() => setOpen(false)} className="mt-4 block border border-gold-500/50 py-3.5 text-center text-xs font-bold uppercase tracking-[0.25em] text-gold-300">Admin</Link>
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm">
                <a href={`tel:${INFO.tel1.replace(/\s/g, '')}`} className="rounded-xl border border-white/15 py-3.5">📞 {INFO.tel1}</a>
                <a href={`tel:${INFO.tel2.replace(/\s/g, '')}`} className="rounded-xl border border-white/15 py-3.5">📞 {INFO.tel2}</a>
              </div>
              <a href={INFO.wa1} target="_blank" rel="noreferrer" className="btn-gold mt-3 justify-center">WhatsApp ✦</a>
              <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-smoke">{INFO.addr1} · {INFO.addr2}</p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
