'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/store';
import { useLang, pick } from '@/lib/i18n';
import { money } from '@/lib/data';

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  const { t, lang } = useLang();
  if (items.length === 0) return (
    <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl">🧵</p>
      <h1 className="h-display mt-4 text-5xl">{t('cart.empty')}</h1>
      <p className="mt-3 text-smoke">{t('cart.emptySub')}</p>
      <Link href="/shop" className="btn-gold mt-8">{t('cart.shop')}</Link>
    </div>
  );
  return (
    <div className="container-luxe grid gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <h1 className="h-display text-4xl sm:text-5xl">{t('cart.title')} <span className="gold-text italic">({items.length})</span></h1>
        <div className="mt-6 space-y-4 sm:mt-8">
          {items.map(({ product: p, qty }) => (
            <div key={p.id} className="card flex gap-3 p-3 sm:gap-5 sm:p-4">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-28"><Image src={p.image} alt={pick(lang, p.fr, p.ar)} fill sizes="15vw" className="object-cover" /></div>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-2 sm:gap-3"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 sm:tracking-[0.25em]">{pick(lang, p.categoryFr, p.categoryAr)}</p><Link href={`/product/${p.id}`} className="font-display text-base hover:text-gold-300 sm:text-xl">{pick(lang, p.fr, p.ar)}</Link></div>
                <button onClick={() => remove(p.id)} className="shrink-0 rounded-lg px-2 py-2 text-xs uppercase tracking-widest text-smoke hover:bg-white/5 hover:text-red-400">{t('cart.remove')}</button></div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-lg border border-white/15"><button onClick={() => setQty(p.id, qty - 1)} className="min-h-[40px] min-w-[40px] px-3 py-2">−</button><span className="w-8 text-center text-sm font-bold">{qty}</span><button onClick={() => setQty(p.id, qty + 1)} className="min-h-[40px] min-w-[40px] px-3 py-2">+</button></div>
                  <p className="font-extrabold text-gold-300">{money(p.price * qty)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="card h-fit space-y-4 p-5 sm:p-7">
        <h2 className="font-display text-2xl">{t('cart.summary')}</h2>
        <div className="flex justify-between text-sm text-smoke"><span>{t('cart.subtotal')}</span><span className="text-cream">{money(subtotal)}</span></div>
        <div className="flex justify-between text-sm text-smoke"><span>{t('cart.pickup')}</span><span className="text-gold-300">{t('cart.free')}</span></div>
        <div className="hairline" />
        <div className="flex justify-between font-display text-2xl"><span>{t('cart.total')}</span><span className="text-gold-300">{money(subtotal)}</span></div>
        <Link href="/checkout" className="btn-gold w-full">{t('cart.checkout')}</Link>
        <Link href="/shop" className="btn-ghost w-full">{t('cart.continue')}</Link>
      </aside>
    </div>
  );
}
