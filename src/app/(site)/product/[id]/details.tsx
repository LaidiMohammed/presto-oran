'use client';
import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@/components/icons';
import { PRODUCTS, INFO, money } from '@/lib/data';
import { useCart } from '@/components/store';
import { useLang, pick } from '@/lib/i18n';

export function ProductDetails({ id }: { id: string }) {
  const p = PRODUCTS.find((x) => x.id === id)!;
  const { add, toggleWish, wishlist } = useCart();
  const { t, lang } = useLang();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('M');
  const [added, setAdded] = useState(false);
  const name = pick(lang, p.fr, p.ar);
  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-3xl border border-white/10">
        <Image src={p.image} alt={name} fill priority sizes="50vw" className="object-cover" />
        {p.tag && <span className="absolute start-5 top-5 bg-gold-500 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-black">{p.tag}</span>}
        <span className="absolute bottom-5 end-5 rounded-full bg-black/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">PRESTO · Oran</span>
      </div>
      <div>
        <p className="eyebrow">— {pick(lang, p.categoryFr, p.categoryAr)} —</p>
        <h1 className="h-display mt-3 text-5xl">{name}</h1>
        <div className="mt-4 flex items-center gap-2 text-gold-400">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} cls={i < Math.round(p.rating) ? '' : 'opacity-25'} />)}<span className="ms-2 text-sm text-smoke">{p.rating} · {p.reviews}</span></div>
        <div className="mt-5 flex items-center gap-4"><span className="font-display text-5xl text-gold-300">{money(p.price)}</span>{p.oldPrice && <span className="text-xl text-smoke line-through">{money(p.oldPrice)}</span>}</div>
        <p className="mt-5 leading-relaxed text-cream/80">{pick(lang, p.descFr, p.descAr)}</p>
        <div className="mt-7"><p className="label-luxe">{t('prod.size')}</p>
          <div className="flex gap-2">{['XS', 'S', 'M', 'L', 'XL'].map((s) => (<button key={s} onClick={() => setSize(s)} className={`h-12 w-12 rounded-xl border text-sm font-bold transition ${size === s ? 'border-gold-400 bg-gold-500/15 text-gold-300' : 'border-white/15 text-smoke hover:border-gold-400'}`}>{s}</button>))}</div></div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-xl border border-white/15">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-xl">−</button>
            <span className="w-8 text-center font-bold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-xl">+</button>
          </div>
          <button onClick={() => { add(p, qty, size); setAdded(true); setTimeout(() => setAdded(false), 2000); }} className="btn-gold flex-1">{added ? t('prod.added') : `${t('prod.add')} — ${money(p.price * qty)}`}</button>
          <button onClick={() => toggleWish(p.id)} className={`rounded-xl border px-5 py-3.5 transition ${wishlist.includes(p.id) ? 'border-gold-400 text-gold-300' : 'border-white/15'}`}>♡</button>
        </div>
        <a href={`${INFO.wa1}?text=${encodeURIComponent(name + ' — ' + money(p.price))}`} target="_blank" rel="noreferrer" className="btn-ghost mt-3 w-full">{t('prod.wa')}</a>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-smoke">{t('prod.delivery')}</p>
      </div>
    </div>
  );
}
