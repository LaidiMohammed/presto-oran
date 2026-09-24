'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowIcon, StarIcon } from '@/components/icons';
import { ProductCard, variantFor } from '@/components/ProductCard';
import { Reveal, SectionHeading } from '@/components/ui';
import { PRODUCTS, COLLECTIONS, POSTS, VIDEOS, ORAN, SHOP, INFO, money } from '@/lib/data';
import { useLang, pick } from '@/lib/i18n';
import { useCart } from '@/components/store';

export default function HomePage() {
  const { t, lang, ar } = useLang();
  const { services } = useCart();

  return (
    <div className="overflow-x-hidden">
      {/* HERO — Vêtement shop (boutique luxe) + floating atelier pip */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden sm:min-h-[86vh] lg:min-h-[94vh]">
        <Image src={SHOP.hero} alt="Boutique vêtements PRESTO Oran" fill priority sizes="100vw" className="animate-kenburns object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/55 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/85 via-noir-950/30 to-transparent" />
        <div className="container-luxe relative z-10 grid items-end gap-8 pb-10 pt-28 sm:gap-10 sm:pb-16 sm:pt-36 lg:grid-cols-[1.5fr_1fr] lg:pb-20 lg:pt-40">
          <div>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="eyebrow">— {t('hero.eyebrow')} —</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="h-display mt-4 text-4xl sm:text-6xl lg:text-[5.8rem]">
              {t('hero.titleA')}<br /><span className="gold-text italic">{t('hero.titleB')}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="mt-4 max-w-xl text-[14px] leading-relaxed text-cream/85 sm:mt-6 sm:text-[15px]">
              {t('hero.sub')}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link href="/services" className="btn-gold flex-1 justify-center sm:flex-none">{t('hero.cta1')} <ArrowIcon /></Link>
              <Link href="/shop" className="btn-ghost flex-1 justify-center sm:flex-none">{t('hero.cta2')}</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 rtl:divide-x-reverse sm:mt-12">
              {[['12+', t('stats.artisans')], ['8k+', t('stats.clients')], ['4.9★', t('stats.note')]].map(([n, l]) => (
                <div key={l} className="px-2 py-4 sm:px-6 sm:py-5"><p className="font-display text-2xl text-gold-300 sm:text-3xl">{n}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-smoke sm:text-[10px] sm:tracking-[0.25em]">{l}</p></div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: ar ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 1 }} className="hidden lg:block">
            <div className="glass relative overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src={SHOP.tailor} alt="Atelier PRESTO" fill sizes="30vw" className="object-cover" />
                <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster={SHOP.tailor}>
                  <source src={VIDEOS.atelier} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl italic text-gold-300">Atelier PRESTO ✦</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-cream/70">{INFO.addr1} · {INFO.addr2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-gold-500/20 bg-[#0d0d0f] py-3 sm:py-4" dir="ltr">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap sm:gap-10">
          {Array.from({ length: 2 }).flatMap((_, k) => (ar
            ? ['تعديل خلال 24 ساعة', 'وسط المدينة · عكيد لطفي', 'تقدير مجاني', 'خياطة يدوية', 'الدار الوهرانية']
            : ['RETOUCHE 24H', 'CENTRE-VILLE · AKID LOTFI', 'DEVIS GRATUIT', 'FINITIONS MAIN', 'LA MAISON ORANAISE']).map((txt, i) => (
            <span key={`${k}-${i}`} className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.28em] text-cream/70 sm:gap-10 sm:text-[12px] sm:tracking-[0.35em]"><span className="text-gold-400">✦</span>{txt}</span>
          )))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="container-luxe py-14 sm:py-20 lg:py-24">
        <SectionHeading eyebrow={t('sec.servicesEyebrow')} title={<>{t('sec.servicesTitleA')} <span className="gold-text italic">{t('sec.servicesTitleB')}</span></>} copy={t('sec.servicesCopy')} />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40">
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <Image src={s.image} alt={pick(lang, s.fr, s.ar)} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-transparent" />
                  <span className="absolute end-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-extrabold text-black shadow-lg sm:end-4 sm:px-4 sm:py-1.5 sm:text-sm">{money(s.price)}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0"><h3 className="truncate font-display text-lg transition group-hover:text-gold-300 sm:text-2xl">{pick(lang, s.fr, s.ar)}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-smoke sm:text-[11px] sm:tracking-[0.25em]">{t('svc.duration')} : {s.duration}</p></div>
                  <a href={`${INFO.wa1}?text=${encodeURIComponent(pick(lang, s.fr, s.ar))}`} target="_blank" rel="noreferrer" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/50 text-gold-300 transition hover:bg-gold-500 hover:text-black sm:h-12 sm:w-12" aria-label="book"><ArrowIcon /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center sm:mt-10"><Link href="/services" className="btn-gold w-full justify-center sm:w-auto">{t('hero.cta1')} <ArrowIcon /></Link></Reveal>
      </section>

      {/* ATELIER BAND — Vêtement workshop */}
      <section className="relative overflow-hidden">
        <Image src={SHOP.atelier} alt="Atelier couture PRESTO" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-noir-950/70" />
        <div className="container-luxe relative z-10 grid items-center gap-8 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="eyebrow">— {t('sec.craftEyebrow')} · Oran —</p>
            <h2 className="h-display mt-3 text-3xl sm:mt-4 sm:text-5xl lg:text-6xl">{ar ? 'من الإبرة إلى الأناقة،' : 'De l’aiguille'} <span className="gold-text italic">{ar ? 'نفس الإتقان.' : 'à votre vestiaire.'}</span></h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/80 sm:mt-5 sm:text-base">{ar ? 'ورشة خياطة في قلب وهران: ماكينات دقيقة، أيدٍ خبيرة، وتسليم في الموعد. تابعوا أعمالنا على إنستغرام.' : 'Atelier vêtement au cœur d’Oran : couture, retouche et repassage — finitions main, délais tenus. Suivez nos réalisations sur Instagram.'}</p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a href={INFO.instagram} target="_blank" rel="noreferrer" className="btn-gold flex-1 justify-center sm:flex-none">📸 @presto.dz</a>
              <Link href="/about" className="btn-ghost flex-1 justify-center sm:flex-none">{t('nav.about')}</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[[t('stats.artisans'), '12+'], [t('stats.clients'), '8k+'], [INFO.addr1, '📍'], [INFO.addr2, '📍']].map(([l, n]) => (
                <div key={l} className="glass rounded-2xl p-4 text-center transition hover:border-gold-500/50 sm:p-7"><p className="font-display text-3xl text-gold-300 sm:text-4xl">{n}</p><p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-smoke sm:text-[10px] sm:tracking-[0.25em]">{l}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOUTIQUE */}
      <section className="border-b border-white/10 bg-[#0d0d0f]">
        <div className="container-luxe py-14 sm:py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
            <div><p className="eyebrow">— {t('sec.boutiqueEyebrow')} —</p><h2 className="h-display mt-2 text-3xl sm:mt-3 sm:text-5xl lg:text-6xl">{t('sec.boutiqueTitleA')} <span className="gold-text italic">{t('sec.boutiqueTitleB')}</span></h2></div>
            <Link href="/shop" className="btn-ghost hidden sm:inline-flex">{t('btn.all')} <ArrowIcon /></Link>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            <div className="md:col-span-2"><ProductCard p={PRODUCTS[0]} index={0} variant="wide" /></div>
            <ProductCard p={PRODUCTS[1]} index={1} variant="tall" />
            <div className="grid content-start gap-4 sm:gap-5"><ProductCard p={PRODUCTS[2]} index={2} /><ProductCard p={PRODUCTS[3]} index={3} /></div>
          </div>
          <Link href="/shop" className="btn-ghost mt-6 w-full justify-center sm:hidden">{t('btn.all')} <ArrowIcon /></Link>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="container-luxe py-14 sm:py-20 lg:py-24">
        <SectionHeading eyebrow={t('nav.collections')} title={<>{t('col.titleA')} <span className="gold-text italic">{t('col.titleB')}</span></>} />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.1}>
              <Link href={c.slug === 'boutique' ? '/shop' : '/services'} className="group relative block overflow-hidden rounded-2xl aspect-[16/11] sm:aspect-[16/10]">
                <Image src={c.image} alt={pick(lang, c.fr, c.ar)} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:gap-4 sm:p-7">
                  <div className="min-w-0"><p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold-300 sm:text-[10px] sm:tracking-[0.3em]">{c.pieces} · PRESTO</p>
                  <h3 className="mt-1 truncate font-display text-2xl transition group-hover:text-gold-300 sm:text-4xl">{pick(lang, c.fr, c.ar)}</h3>
                  <p className="mt-1 line-clamp-1 text-xs text-cream/70 sm:text-sm">{pick(lang, c.descFr, c.descAr)}</p></div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/60 text-gold-300 transition group-hover:bg-gold-500 group-hover:text-black sm:h-12 sm:w-12"><ArrowIcon /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCATIONS — Gare + Minaret (varied) */}
      <section className="border-y border-white/10 bg-[#0d0d0f]">
        <div className="container-luxe py-14 sm:py-20 lg:py-24">
          <SectionHeading eyebrow={t('sec.locEyebrow')} title={<>{t('sec.locTitleA')} <span className="gold-text italic">{t('sec.locTitleB')}</span></>} />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
            {[{ img: ORAN.gare, addr: INFO.addr1, tel: INFO.tel1, wa: INFO.wa1, label: 'Gare · Centre' }, { img: ORAN.minaret, addr: INFO.addr2, tel: INFO.tel2, wa: INFO.wa2, label: 'Minaret · Akid Lotfi' }].map((s, i) => (
              <Reveal key={s.addr} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 transition hover:border-gold-500/40">
                  <div className="relative h-64 overflow-hidden sm:h-72"><Image src={s.img} alt={s.addr} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur sm:left-5 sm:top-5">{s.label}</span></div>
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4 sm:p-6">
                    <div><p className="eyebrow">PRESTO · Oran</p><h3 className="mt-1 font-display text-2xl sm:text-3xl">{s.addr}</h3>
                    <a href={`tel:${s.tel.replace(/\s/g, '')}`} className="mt-1 block text-lg font-bold text-gold-300 sm:text-xl">📞 {s.tel}</a>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/60 sm:text-xs">{t('contact.hours')}</p></div>
                    <div className="flex gap-2"><a href={`tel:${s.tel.replace(/\s/g, '')}`} className="btn-ghost min-h-[44px] flex-1 justify-center !px-4 !py-3 text-xs sm:flex-none">{t('btn.call')}</a><a href={s.wa} target="_blank" rel="noreferrer" className="btn-gold min-h-[44px] flex-1 justify-center !px-4 !py-3 text-xs sm:flex-none">WhatsApp</a></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-luxe py-14 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="Oran ★★★★★" title={<>{ar ? 'قالوا عن ' : 'Ils portent'} <span className="gold-text italic">PRESTO.</span></>} />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {[
            { n: 'Amine B.', r: INFO.addr1, t: ar ? 'بدلة العرس عدّلوها في يومين. القصّة مثالية، السعر معلن وواضح.' : 'Mon costume de mariage ajusté en 48h. Coupe parfaite, prix affiché et respecté.', img: 'https://i.pravatar.cc/100?img=12' },
            { n: 'Yasmine K.', r: INFO.addr2, t: ar ? 'فستان السهرة رجع كأنه جديد. الاستقبال راقٍ والموعد محترم.' : 'Ma robe de soirée retouchée comme neuve. Accueil adorable, délai tenu.', img: 'https://i.pravatar.cc/100?img=32' },
            { n: 'Mohamed C.', r: 'Oran', t: ar ? 'كيّ القمصان كل أسبوع. دقة سويسرية بأسعار وهرانية.' : 'Repassage hebdo de mes chemises. Précision suisse, prix oranais.', img: 'https://i.pravatar.cc/100?img=53' }
          ].map((x, i) => (
            <Reveal key={x.n} delay={i * 0.1}>
              <figure className="card h-full p-5 sm:p-7 transition hover:border-gold-500/40">
                <div className="flex gap-1 text-gold-400">{Array.from({ length: 5 }).map((_, k) => <StarIcon key={k} />)}</div>
                <blockquote className="mt-3 text-base italic leading-snug text-cream/90 sm:mt-4 sm:text-lg">“{x.t}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 sm:mt-6"><Image src={x.img} alt={x.n} width={40} height={40} className="h-10 w-10 rounded-full border border-gold-500/40 sm:h-11 sm:w-11" /><span><b className="block text-sm">{x.n}</b><span className="text-xs uppercase tracking-[0.2em] text-smoke">{x.r}</span></span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-white/10 bg-[#0d0d0f]">
        <div className="container-luxe py-14 sm:py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">— {t('sec.journalEyebrow')} —</p><h2 className="h-display mt-2 text-3xl sm:mt-3 sm:text-5xl">{t('jour.titleA')} <span className="gold-text italic">{t('jour.titleB')}</span></h2></div>
            <Link href="/journal" className="btn-ghost hidden sm:inline-flex">{t('btn.all')} <ArrowIcon /></Link>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link href={`/journal/${a.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition hover:border-gold-500/40">
                  <div className="relative aspect-[16/10] overflow-hidden"><Image src={a.image} alt={pick(lang, a.fr, a.ar)} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" /></div>
                  <div className="p-5 sm:p-6"><p className="text-[11px] uppercase tracking-[0.25em] text-smoke">{pick(lang, a.categoryFr, a.categoryAr)} · {a.read}</p><h3 className="mt-2 font-display text-xl leading-tight group-hover:text-gold-300 sm:text-2xl">{pick(lang, a.fr, a.ar)}</h3><p className="mt-2 text-sm text-smoke">{pick(lang, a.exFr, a.exAr)}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link href="/journal" className="btn-ghost mt-6 w-full justify-center sm:hidden">{t('btn.all')} <ArrowIcon /></Link>
        </div>
      </section>

      {/* CTA — Boutique rack */}
      <section className="container-luxe py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <Image src={SHOP.cta} alt="Collection vêtements PRESTO" fill sizes="100vw" className="object-cover" />
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster={SHOP.cta}><source src={VIDEOS.campaign} type="video/mp4" /></video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-transparent" />
            <div className="relative z-10 max-w-xl p-6 sm:p-10 lg:p-16">
              <p className="eyebrow">— PRESTO · Oran —</p>
              <h2 className="h-display mt-3 text-3xl sm:mt-4 sm:text-6xl">{ar ? 'ملابسكم تستحق ' : 'Vos vêtements méritent '} <span className="gold-text italic">{ar ? 'الأفضل.' : 'mieux.'}</span></h2>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a href={INFO.wa1} target="_blank" rel="noreferrer" className="btn-gold justify-center">{t('btn.book')}</a>
                <Link href="/admin" className="btn-ghost justify-center">Admin →</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
