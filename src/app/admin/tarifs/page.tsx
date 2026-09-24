'use client';
import { useState } from 'react';
import { useCart } from '@/components/store';
import { money } from '@/lib/data';

export default function TarifsPage() {
  const { services, updatePrice, addService, removeService, resetServices } = useCart();
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [nfr, setNfr] = useState('');
  const [nar, setNar] = useState('');
  const [nprice, setNprice] = useState('');
  const [ndur, setNdur] = useState('24h');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div><h2 className="font-display text-3xl">Tarifs & Services <span className="text-gold-300">✎</span></h2>
        <p className="text-sm text-smoke">Prix démo en DA — chaque modification s’affiche <b className="text-gold-300">instantanément</b> sur le site (Accueil + page Services).</p></div>
        <button onClick={resetServices} className="ms-auto rounded-xl border border-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:border-gold-400">Réinitialiser démo</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[['Services actifs', String(services.length)], ['Prix moyen', money(Math.round(services.reduce((a, s) => a + s.price, 0) / Math.max(1, services.length)))], ['Moins cher', money(Math.min(...services.map((s) => s.price)))], ['Sur-mesure max', money(Math.max(...services.map((s) => s.price)))]].map(([l, v]) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-[#141417] p-5"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><p className="mt-1 font-display text-3xl text-gold-300">{v}</p></div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417]">
        <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm">
          <thead><tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.25em] text-smoke"><th className="px-6 py-4">Service</th><th className="px-6 py-4">Arabe</th><th className="px-6 py-4">Délai</th><th className="px-6 py-4">Prix (DA)</th><th className="px-6 py-4">Actions</th></tr></thead>
          <tbody>{services.map((s) => (
            <tr key={s.id} className="border-b border-white/5 transition hover:bg-white/[0.02]">
              <td className="px-6 py-4 font-bold">{s.fr}</td>
              <td className="px-6 py-4 text-cream/70" dir="rtl">{s.ar}</td>
              <td className="px-6 py-4 text-smoke">{s.duration}</td>
              <td className="px-6 py-4">
                {editing === s.id ? (
                  <span className="flex items-center gap-2">
                    <input autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} type="number" className="input-luxe !w-32 !py-2" />
                    <button onClick={() => { updatePrice(s.id, Number(draft) || 0); setEditing(null); }} className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-extrabold text-black">✓</button>
                    <button onClick={() => setEditing(null)} className="rounded-lg border border-white/15 px-3 py-2 text-xs">✕</button>
                  </span>
                ) : (
                  <button onClick={() => { setEditing(s.id); setDraft(String(s.price)); }} className="font-display text-xl text-gold-300 hover:underline" title="Cliquer pour modifier">{money(s.price)} ✎</button>
                )}
              </td>
              <td className="px-6 py-4"><button onClick={() => removeService(s.id)} className="text-xs uppercase tracking-widest text-smoke hover:text-red-400">Supprimer</button></td>
            </tr>
          ))}</tbody></table></div>
      </div>

      <div className="rounded-2xl border border-gold-500/30 bg-gold-500/[0.04] p-6">
        <h3 className="font-display text-2xl">+ Ajouter un service (démo)</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <input value={nfr} onChange={(e) => setNfr(e.target.value)} placeholder="Nom FR (ex : Ourlet rideau)" className="input-luxe" />
          <input value={nar} onChange={(e) => setNar(e.target.value)} placeholder="Nom AR" className="input-luxe" dir="rtl" />
          <input value={nprice} onChange={(e) => setNprice(e.target.value)} placeholder="Prix DA" type="number" className="input-luxe" />
          <input value={ndur} onChange={(e) => setNdur(e.target.value)} placeholder="Délai (24h)" className="input-luxe" />
          <button onClick={() => { if (!nfr || !nprice) return; addService({ id: 'svc-' + Date.now(), fr: nfr, ar: nar || nfr, price: Number(nprice), duration: ndur, image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop' }); setNfr(''); setNar(''); setNprice(''); }} className="rounded-xl bg-gold-500 py-3 text-xs font-extrabold uppercase tracking-widest text-black">Ajouter</button>
        </div>
      </div>
    </div>
  );
}
