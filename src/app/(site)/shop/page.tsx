'use client';
import { useMemo, useState } from 'react';
import { ProductCard, variantFor } from '@/components/ProductCard';
import { Reveal } from '@/components/ui';
import { PRODUCTS } from '@/lib/data';
import { useLang, pick } from '@/lib/i18n';

export default function ShopPage() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('featured');
  const cats = useMemo(() => ['all', ...Array.from(new Set(PRODUCTS.map((p) => p.categoryFr)))], []);
  const list = useMemo(() => {
    let l = PRODUCTS.filter((p) => (cat === 'all' || p.categoryFr === cat) && (p.fr + p.ar).toLowerCase().includes(q.toLowerCase()));
    if (sort === 'low') l = [...l].sort((a, b) => a.price - b.price);
    if (sort === 'high') l = [...l].sort((a, b) => b.price - a.price);
    if (sort === 'rating') l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [cat, q, sort]);
  return (
    <div className="container-luxe py-10 sm:py-14">
      <Reveal><p className="eyebrow">— {t('shop.eyebrow')} · PRESTO Oran —</p>
        <h1 className="h-display mt-3 text-4xl sm:text-7xl">{t('shop.titleA')} <span className="gold-text italic">{t('shop.titleB')}</span></h1></Reveal>
      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-noir-900/70 p-4 backdrop-blur sm:mt-10 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (<button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition sm:px-5 ${cat === c ? 'bg-gold-500 text-black' : 'border border-white/15 text-cream/70 hover:border-gold-400 hover:text-gold-300'}`}>{c === 'all' ? t('shop.all') : (lang === 'ar' ? PRODUCTS.find((p) => p.categoryFr === c)?.categoryAr : c)}</button>))}
        </div>
        <div className="flex flex-wrap gap-2 lg:ms-auto lg:flex-nowrap">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('shop.search')} className="input-luxe w-full sm:max-w-xs" />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-luxe w-full sm:max-w-[160px]"><option value="featured">★</option><option value="low">DA ↑</option><option value="high">DA ↓</option><option value="rating">Top</option></select>
        </div>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.25em] text-smoke">{list.length} {t('shop.pieces')}</p>
      {/* Editorial rhythm: wide feature interleaved with varied cards */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {list.map((p, i) => {
          const v = variantFor(i);
          return v === 'wide'
            ? <div key={p.id} className="md:col-span-2"><ProductCard p={p} index={i} variant="wide" /></div>
            : <ProductCard key={p.id} p={p} index={i} variant={v === 'feature' ? 'standard' : v} />;
        })}
      </div>
      {list.length === 0 && <p className="mt-16 text-center font-display text-3xl text-smoke">—</p>}
      <p className="mt-4 text-center text-sm text-smoke">{pick(lang, '', '')}{t('prod.delivery')} · PRESTO Oran</p>
    </div>
  );
}
