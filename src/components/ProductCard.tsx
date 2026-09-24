'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeartIcon, StarIcon } from './icons';
import { Product, money } from '@/lib/data';
import { useCart } from './store';
import { useLang, pick } from '@/lib/i18n';

export type CardVariant = 'feature' | 'wide' | 'standard' | 'tall';

/** Editorial card: never a uniform grid — feature spans big, wide runs horizontal, tall runs vertical */
export function ProductCard({ p, index = 0, variant = 'standard' }: { p: Product; index?: number; variant?: CardVariant }) {
  const { add, wishlist, toggleWish } = useCart();
  const { lang, t } = useLang();
  const wished = wishlist.includes(p.id);
  const name = pick(lang, p.fr, p.ar);
  const cat = pick(lang, p.categoryFr, p.categoryAr);

  if (variant === 'wide') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
        className="group relative grid overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition-all duration-500 hover:border-gold-500/40 sm:grid-cols-2"
      >
        <Link href={`/product/${p.id}`} className="relative block min-h-[220px] overflow-hidden sm:min-h-[260px]">
          <Image src={p.image} alt={name} fill sizes="40vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-108 group-hover:scale-110" />
          {p.tag && <span className="absolute start-4 top-4 bg-gold-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-black">{p.tag}</span>}
        </Link>
        <div className="flex flex-col justify-center p-5 sm:p-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400 sm:text-[10px] sm:tracking-[0.3em]">{cat}</p>
          <Link href={`/product/${p.id}`}><h3 className="mt-2 font-display text-2xl leading-tight transition group-hover:text-gold-300 sm:text-4xl">{name}</h3></Link>
          <p className="mt-2 line-clamp-2 text-sm text-smoke sm:mt-3">{pick(lang, p.descFr, p.descAr)}</p>
          <div className="mt-3 flex items-center gap-3 sm:mt-4">
            <span className="font-display text-2xl sm:text-3xl">{money(p.price)}</span>
            {p.oldPrice && <span className="text-sm text-smoke line-through">{money(p.oldPrice)}</span>}
          </div>
          <div className="mt-4 flex gap-2 sm:mt-5">
            <button onClick={() => add(p)} className="btn-gold min-h-[44px] flex-1 !px-4 !py-3 text-xs">{t('card.order')} +</button>
            <button onClick={() => toggleWish(p.id)} aria-label="wishlist" className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition sm:h-12 sm:w-12 ${wished ? 'border-gold-400 bg-gold-500/15 text-gold-300' : 'border-white/15 hover:border-gold-400'}`}><HeartIcon /></button>
          </div>
        </div>
      </motion.article>
    );
  }

  const aspect = variant === 'tall' ? 'aspect-[3/4.6]' : variant === 'feature' ? 'aspect-[16/12]' : 'aspect-[3/3.8]';
  const title = variant === 'feature' ? 'text-3xl sm:text-4xl' : 'text-xl';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-[0_30px_80px_-20px_rgba(201,162,75,0.25)]"
    >
      <Link href={`/product/${p.id}`} className={`relative block overflow-hidden ${aspect}`}>
        <Image src={p.image} alt={name} fill sizes="(max-width:768px) 50vw, 30vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
        {p.tag && <span className="absolute start-3 top-3 bg-gold-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-black">{p.tag}</span>}
        <button
          onClick={(e) => { e.preventDefault(); toggleWish(p.id); }}
          aria-label="wishlist"
          className={`absolute end-3 top-3 grid h-11 w-11 place-items-center rounded-full backdrop-blur transition ${wished ? 'bg-gold-500 text-black' : 'bg-black/50 text-white hover:bg-gold-500 hover:text-black'}`}
        ><HeartIcon /></button>
        <span className="absolute inset-x-3 bottom-3 translate-y-0 opacity-100 transition-all duration-500 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <span onClick={(e) => { e.preventDefault(); add(p); }} className="block cursor-pointer bg-cream/95 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.25em] text-black backdrop-blur transition hover:bg-gold-400">{t('prod.add')}</span>
        </span>
      </Link>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400 sm:text-[10px] sm:tracking-[0.3em]">{cat}</p>
        <Link href={`/product/${p.id}`}><h3 className={`mt-1 font-display leading-snug transition group-hover:text-gold-300 ${title}`}>{name}</h3></Link>
        <div className="mt-2 flex items-center gap-1 text-gold-400">
          {Array.from({ length: 5 }).map((_, i) => (<StarIcon key={i} cls={i < Math.round(p.rating) ? '' : 'opacity-25'} />))}
          <span className="ms-2 text-xs text-smoke">({p.reviews})</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-extrabold text-gold-300">{money(p.price)}</span>
          {p.oldPrice && <span className="text-sm text-smoke line-through">{money(p.oldPrice)}</span>}
        </div>
      </div>
    </motion.article>
  );
}

/** Editorial rhythm: feature, standards, tall, wide… never card-next-to-identical-card */
export function variantFor(i: number): CardVariant {
  const m = i % 7;
  if (m === 0) return 'feature';
  if (m === 4) return 'wide';
  if (m === 5) return 'tall';
  return 'standard';
}
