'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/store';
import { useLang, pick } from '@/lib/i18n';
import { INFO, money } from '@/lib/data';

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const { t, lang } = useLang();
  const [done, setDone] = useState(false);
  const [place, setPlace] = useState(INFO.addr1);
  if (done) return (
    <div className="container-luxe flex min-h-[65vh] max-w-2xl flex-col items-center justify-center text-center">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-500 text-4xl text-black">✓</span>
      <h1 className="h-display mt-6 text-5xl">{t('co.done')}</h1>
      <p className="mt-4 text-smoke">{t('co.doneSub')} <b className="text-gold-300">#PS-{Math.floor(90000 + Math.random() * 9999)}</b> · {place}</p>
      <div className="mt-8 flex gap-4"><Link href="/shop" className="btn-gold">{t('co.back')}</Link></div>
    </div>
  );
  return (
    <div className="container-luxe grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr]">
      <form onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); }} className="space-y-6">
        <h1 className="h-display text-5xl">{t('co.title')}</h1>
        <div className="card p-7">
          <h2 className="font-display text-2xl">{t('co.contact')}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><label className="label-luxe">{t('co.name')}</label><input required className="input-luxe" /></div>
            <div><label className="label-luxe">{t('co.phone')}</label><input required className="input-luxe" placeholder="0661…" /></div>
            <div><label className="label-luxe">{t('co.city')}</label><input required className="input-luxe" placeholder="Oran" /></div>
            <div><label className="label-luxe">{t('co.pickup')}</label><select value={place} onChange={(e) => setPlace(e.target.value)} className="input-luxe"><option>{INFO.addr1} — {INFO.tel1}</option><option>{INFO.addr2} — {INFO.tel2}</option></select></div>
            <div className="sm:col-span-2"><label className="label-luxe">{t('co.note')}</label><input className="input-luxe" /></div>
          </div>
        </div>
        <div className="card p-7"><h2 className="font-display text-2xl">{t('co.pay')}</h2><p className="mt-3 text-sm text-smoke">{t('co.cash')}</p></div>
        <button className="btn-gold w-full !py-5">{t('co.payBtn')} — {money(subtotal)}</button>
      </form>
      <aside className="card h-fit p-7">
        <h2 className="font-display text-2xl">{t('cart.title')} ({items.length})</h2>
        <div className="mt-4 space-y-3">{items.map(({ product: p, qty }) => (<div key={p.id} className="flex justify-between text-sm"><span className="text-cream/80">{pick(lang, p.fr, p.ar)} × {qty}</span><span>{money(p.price * qty)}</span></div>))}</div>
        <div className="hairline my-4" />
        <div className="flex justify-between font-display text-2xl"><span>{t('cart.total')}</span><span className="text-gold-300">{money(subtotal)}</span></div>
      </aside>
    </div>
  );
}
