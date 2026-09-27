'use client';
import { useMemo, useState } from 'react';
import { ORDERS as SEED, money } from '@/lib/data';

type O = (typeof SEED)[number] & { status: string };
const badge = (s: string) => s === 'Delivered' ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' : s === 'Shipped' ? 'bg-sky-500/15 text-sky-300 border-sky-500/20' : s === 'Processing' ? 'bg-gold-500/15 text-gold-300 border-gold-500/20' : 'bg-red-500/15 text-red-300 border-red-500/20';
const NEXT: Record<string, string> = { Processing: 'Shipped', Shipped: 'Delivered', Delivered: 'Delivered' };

export default function OrdersPage() {
  const [list, setList] = useState<O[]>(SEED as O[]);
  const [q, setQ] = useState('');
  const [f, setF] = useState('all');
  const [sel, setSel] = useState<O | null>(null);

  const filtered = useMemo(() => list.filter((o) => (f === 'all' || o.status === f) && (o.id + o.customer + o.product).toLowerCase().includes(q.toLowerCase())), [list, q, f]);
  const total = filtered.reduce((a, o) => a + o.total, 0);

  const advance = (id: string) => setList(list.map((o) => o.id === id ? { ...o, status: NEXT[o.status] ?? o.status } : o));
  const refund = (id: string) => setList(list.map((o) => o.id === id ? { ...o, status: 'Refunded' } : o));
  const del = (id: string) => { if (confirm('Supprimer ' + id + ' ?')) setList(list.filter((o) => o.id !== id)); };
  const exportCSV = () => {
    const csv = ['id,customer,product,date,total,status,pay', ...filtered.map((o) => [o.id, `"${o.customer}"`, `"${o.product}"`, o.date, o.total, o.status, o.pay].join(','))].join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'presto-orders.csv'; a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">{filtered.length} commandes · {money(total)}</p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">Commandes</h2></div>
        <div className="flex gap-2"><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search order / client…" className="input-luxe !w-64" /><button onClick={exportCSV} className="rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black">Export CSV</button></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[['Total volume', money(list.reduce((a, o) => a + o.total, 0)), 'text-gold-300'], ['En préparation', String(list.filter((o) => o.status === 'Processing').length), ''], ['Expédiées', String(list.filter((o) => o.status === 'Shipped').length), 'text-sky-300'], ['Remboursées', String(list.filter((o) => o.status === 'Refunded').length), 'text-red-300']].map(([l, v, c]) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-[#141417] p-5"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><p className={`mt-1 font-display text-3xl ${c}`}>{v}</p></div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">{['all', 'Processing', 'Shipped', 'Delivered', 'Refunded'].map((s) => (<button key={s} onClick={() => setF(s)} className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest ${f === s ? 'bg-gold-500 text-black' : 'border border-white/15 text-cream/60 hover:border-gold-400'}`}>{s === 'all' ? 'Toutes' : s}</button>))}</div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417]">
        <div className="overflow-x-auto"><table className="w-full table-auto text-left text-sm">
          <thead><tr className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] text-smoke"><th className="whitespace-nowrap px-4 py-4 sm:px-6">Order</th><th className="whitespace-nowrap px-4 py-4 sm:px-6">Client</th><th className="px-4 py-4 sm:px-6">Product</th><th className="hidden whitespace-nowrap px-4 py-4 md:table-cell lg:px-6">Payment</th><th className="whitespace-nowrap px-4 py-4 sm:px-6">Total</th><th className="whitespace-nowrap px-4 py-4 sm:px-6">Status</th><th className="px-4 py-4 sm:px-6">Actions</th></tr></thead>
          <tbody>{filtered.map((o) => (
            <tr key={o.id} className="border-b border-white/5 transition hover:bg-white/[0.03]">
              <td className="whitespace-nowrap px-4 py-4 sm:px-6"><button onClick={() => setSel(o)} className="font-bold text-gold-300 hover:underline">{o.id}</button><span className="block text-xs font-normal text-smoke">{o.date}</span></td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6"><span className="flex items-center gap-2"><img src={o.avatar} alt="" className="h-8 w-8 shrink-0 rounded-full ring-1 ring-white/10" /><span className="max-w-[120px] truncate sm:max-w-none">{o.customer}</span></span></td>
              <td className="min-w-[140px] px-4 py-4 text-cream/80 sm:px-6">{o.product}</td><td className="hidden whitespace-nowrap px-4 py-4 text-smoke md:table-cell lg:px-6">{o.pay}</td>
              <td className="whitespace-nowrap px-4 py-4 font-bold sm:px-6">{money(o.total)}</td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6"><span className={`whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-bold ${badge(o.status)}`}>{o.status}</span></td>
              <td className="px-4 py-4 sm:px-6"><div className="flex flex-wrap gap-1.5">
                <button onClick={() => setSel(o)} className="whitespace-nowrap rounded-lg border border-white/15 px-2.5 py-1.5 text-[11px] hover:border-gold-400">Détail</button>
                {o.status !== 'Delivered' && o.status !== 'Refunded' && <button onClick={() => advance(o.id)} className="whitespace-nowrap rounded-lg bg-gold-500/15 border border-gold-500/30 px-2.5 py-1.5 text-[11px] font-bold text-gold-300">→ {NEXT[o.status]}</button>}
                {o.status !== 'Refunded' && <button onClick={() => refund(o.id)} className="whitespace-nowrap rounded-lg border border-red-500/20 px-2.5 py-1.5 text-[11px] text-red-300">Remb.</button>}
                <button onClick={() => del(o.id)} className="px-1.5 text-smoke hover:text-red-400">✕</button>
              </div></td></tr>
          ))}</tbody></table></div>
        {filtered.length === 0 && <p className="p-10 text-center text-smoke">Aucune commande trouvée.</p>}
      </div>

      {sel && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur" onClick={() => setSel(null)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#141417] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between"><div><p className="text-[11px] uppercase tracking-[0.25em] text-smoke">Commande</p><h3 className="font-display text-3xl text-gold-300">{sel.id}</h3></div><span className={`rounded-full border px-3 py-1 text-xs font-bold ${badge(sel.status)}`}>{sel.status}</span></div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/[0.03] p-4"><img src={sel.avatar} alt="" className="h-12 w-12 rounded-full" /><div><b>{sel.customer}</b><p className="text-xs text-smoke">{sel.date} · {sel.pay}</p></div><b className="ms-auto text-gold-300">{money(sel.total)}</b></div>
            <div className="mt-4 rounded-xl border border-white/10 p-4 text-sm"><p className="text-smoke text-xs uppercase tracking-widest">Article</p><p className="mt-1">{sel.product}</p></div>
            <div className="mt-4 flex gap-2">
              <a href={`https://wa.me/213661200829?text=${encodeURIComponent('Bonjour ' + sel.customer + ' — commande ' + sel.id + ' (' + sel.status + ')')}`} target="_blank" rel="noreferrer" className="flex-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 py-3 text-center text-xs font-bold uppercase tracking-widest text-emerald-300">WhatsApp client</a>
              {sel.status !== 'Delivered' && sel.status !== 'Refunded' && <button onClick={() => { advance(sel.id); setSel({ ...sel, status: NEXT[sel.status] }); }} className="flex-1 rounded-xl bg-gold-500 py-3 text-xs font-extrabold uppercase tracking-widest text-black">→ {NEXT[sel.status]}</button>}
            </div>
            <button onClick={() => setSel(null)} className="mt-3 w-full rounded-xl border border-white/15 py-3 text-xs font-bold uppercase tracking-widest">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
