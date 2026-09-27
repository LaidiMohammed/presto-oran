'use client';
import { useMemo, useState } from 'react';

const CLIENTS = [
  { n: 'Amine Benali', c: 'Centre-Ville', life: '84 500 DA', tier: 'VIP · 14 retouches', img: 12, phone: '0661 200 829', last: 'Costume sur mesure — Sep 20' },
  { n: 'Yasmine Kaci', c: 'Akid-Lotfi', life: '52 300 DA', tier: 'VIP · 9 commandes', img: 32, phone: '0661 597 598', last: 'Robe soirée + ourlet — Sep 20' },
  { n: 'Mohamed Cherif', c: 'Oran', life: '96 000 DA', tier: 'Marié · 21 pièces', img: 53, phone: '0661 200 830', last: '3 chemises — Sep 19' },
  { n: 'Lina Boumediene', c: 'Bir El Djir', life: '41 200 DA', tier: 'Gold · 7 visites', img: 45, phone: '0661 597 599', last: 'Qamis ×2 — Sep 19' },
  { n: 'Sara Haddad', c: 'Centre-Ville', life: '28 900 DA', tier: 'Gold · 5 visites', img: 26, phone: '0661 200 831', last: 'Jupe plissée — Sep 18' },
  { n: 'Karim Ziani', c: 'Es Sénia', life: '33 400 DA', tier: 'Gold · 6 visites', img: 59, phone: '0661 597 600', last: 'Repassage — Sep 18' },
  { n: 'Nour Elhouda', c: 'Akid-Lotfi', life: '19 800 DA', tier: 'Silver · 4 visites', img: 41, phone: '0661 200 832', last: 'Ensemble enfant ×2 — Sep 17' },
  { n: 'Walid Mansouri', c: 'Oran', life: '61 700 DA', tier: 'VIP · 11 visites', img: 68, phone: '0661 597 601', last: 'Costume mariage — Sep 15' },
];
const tierColor = (t: string) => t.startsWith('VIP') ? 'bg-gold-500/15 text-gold-300 border-gold-500/30' : t.startsWith('Gold') ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' : 'bg-white/5 text-cream/70 border-white/10';

export default function CustomersPage() {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState<(typeof CLIENTS)[number] | null>(null);
  const filtered = useMemo(() => CLIENTS.filter((c) => (c.n + c.c + c.tier).toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">8 412 clients · 640 fidèles</p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">Clients</h2></div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher client…" className="input-luxe !w-72" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((c) => (
          <div key={c.n} className="rounded-2xl border border-white/10 bg-[#141417] p-6 text-center transition hover:border-gold-500/40 hover:-translate-y-1">
            <div className="relative mx-auto h-16 w-16"><img src={`https://i.pravatar.cc/120?img=${c.img}`} alt={c.n} className="h-16 w-16 rounded-full border-2 border-gold-500/50 object-cover" /><span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#141417] bg-emerald-400" /></div>
            <b className="mt-3 block">{c.n}</b><p className="text-xs uppercase tracking-widest text-smoke">{c.c} · {c.phone}</p>
            <p className="mt-2 font-display text-xl text-gold-300">{c.life}</p>
            <span className={`mt-2 inline-block rounded-full border px-3 py-1 text-[11px] font-bold ${tierColor(c.tier)}`}>{c.tier}</span>
            <p className="mt-2 truncate text-xs text-smoke">{c.last}</p>
            <div className="mt-4 flex gap-2">
              <a href={`https://wa.me/213${c.phone.replace(/\s/g, '').slice(1)}?text=${encodeURIComponent('Bonjour ' + c.n + ' — PRESTO Oran ✦')}`} target="_blank" rel="noreferrer" className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-bold hover:border-gold-400">Message</a>
              <button onClick={() => setSel(c)} className="flex-1 rounded-lg bg-gold-500 py-2 text-xs font-extrabold text-black">Fiche</button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-smoke">Aucun client trouvé.</p>}
      {sel && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur" onClick={() => setSel(null)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#141417] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4"><img src={`https://i.pravatar.cc/120?img=${sel.img}`} alt="" className="h-16 w-16 rounded-full border-2 border-gold-500/50" /><div><h3 className="font-display text-2xl">{sel.n}</h3><p className="text-xs text-smoke uppercase tracking-widest">{sel.c} · {sel.phone}</p><span className={`mt-1 inline-block rounded-full border px-3 py-0.5 text-[11px] font-bold ${tierColor(sel.tier)}`}>{sel.tier}</span></div></div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.03] p-4"><p className="text-[10px] uppercase tracking-widest text-smoke">Lifetime</p><b className="font-display text-xl text-gold-300">{sel.life}</b></div>
              <div className="rounded-xl bg-white/[0.03] p-4"><p className="text-[10px] uppercase tracking-widest text-smoke">Dernier achat</p><b className="text-sm">{sel.last}</b></div>
            </div>
            <div className="mt-4 flex gap-2"><a href={`tel:${sel.phone.replace(/\s/g, '')}`} className="flex-1 rounded-xl border border-white/15 py-3 text-center text-xs font-bold uppercase tracking-widest">Appeler</a><a href={`https://wa.me/213${sel.phone.replace(/\s/g, '').slice(1)}`} target="_blank" rel="noreferrer" className="flex-1 rounded-xl bg-gold-500 py-3 text-center text-xs font-extrabold uppercase tracking-widest text-black">WhatsApp</a></div>
            <button onClick={() => setSel(null)} className="mt-3 w-full rounded-xl border border-white/15 py-3 text-xs font-bold uppercase tracking-widest">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
