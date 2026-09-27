'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ORDERS, REVENUE, PRODUCTS, money } from '@/lib/data';

const PIE = [{ n: 'Couture', v: 42 }, { n: 'Retouche', v: 24 }, { n: 'Repassage', v: 18 }, { n: 'Boutique', v: 16 }];
const COLORS = ['#c9a24b', '#8e8e93', '#7a5c2e', '#3f3f45'];
const badge = (s: string) => s === 'Delivered' ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' : s === 'Shipped' ? 'bg-sky-500/15 text-sky-300 border-sky-500/20' : s === 'Processing' ? 'bg-gold-500/15 text-gold-300 border-gold-500/20' : 'bg-red-500/15 text-red-300 border-red-500/20';

const STATS = [
  { l: 'CA Septembre', v: '398 k DA', d: '+16,2% vs Août', ic: '◈', up: true, grad: 'from-gold-500/20 to-transparent' },
  { l: 'Commandes', v: '861', d: '+9,4% cette semaine', ic: '❖', up: true, grad: 'from-emerald-500/15 to-transparent' },
  { l: 'Panier moyen', v: '8 900 DA', d: '+4,1% sur-mesure', ic: '✦', up: true, grad: 'from-sky-500/15 to-transparent' },
  { l: 'Alertes stock', v: '4 SKUs', d: '2 critiques · réassort', ic: '●', up: false, grad: 'from-red-500/15 to-transparent' },
];

const ACTIVITY = [
  { t: 'Nouvelle commande #PS-90412 — Costume sur mesure', time: 'il y a 12 min', ic: '❖', c: 'text-emerald-300 bg-emerald-500/10' },
  { t: 'Retouche robe soirée terminée — Yasmine K.', time: 'il y a 48 min', ic: '✦', c: 'text-gold-300 bg-gold-500/10' },
  { t: 'Photo produit ajoutée — /products/qamis-brodi.jpg', time: 'il y a 2 h', ic: '◈', c: 'text-sky-300 bg-sky-500/10' },
  { t: 'Client VIP — Mohamed Cherif (21 pièces)', time: 'il y a 5 h', ic: '●', c: 'text-cream bg-white/5' },
];

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* header row */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">PRESTO · Oran — Live</p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">Bonjour, voici la maison ✦</h2>
          <p className="mt-1 text-sm text-smoke">Centre-Ville 0661 200 829 · Akid-Lotfi 0661 597 598 · {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/products" className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:border-gold-400">+ Produit</Link>
          <Link href="/admin/orders" className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_8px_24px_rgba(201,162,75,0.35)]">Voir commandes</Link>
        </div>
      </div>

      {/* stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#141417] bg-gradient-to-b ${s.grad} p-6 transition hover:border-gold-500/40 hover:-translate-y-0.5`}>
            <div className="flex items-start justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-smoke">{s.l}</p>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-gold-400">{s.ic}</span>
            </div>
            <p className="mt-3 font-display text-4xl">{s.v}</p>
            <p className={`mt-2 text-xs font-bold ${s.up ? 'text-emerald-300' : 'text-amber-300'}`}>{s.d}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><h2 className="font-display text-2xl">Chiffre d’affaires</h2><p className="text-xs text-smoke">Mar → Sep · en milliers de DA · temps réel</p></div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live</span>
              <Link href="/admin/analytics" className="text-xs font-bold uppercase tracking-widest text-gold-300 hover:underline">Analytics →</Link>
            </div>
          </div>
          <div className="mt-4 h-72"><ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a24b" stopOpacity={0.55} /><stop offset="100%" stopColor="#c9a24b" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><YAxis stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12, color: '#fff' }} />
              <Area type="monotone" dataKey="revenue" stroke="#c9a24b" strokeWidth={3} fill="url(#g)" /></AreaChart>
          </ResponsiveContainer></div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
            <h2 className="font-display text-2xl">Mix par univers</h2>
            <div className="mt-1 h-52"><ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={PIE} dataKey="v" nameKey="n" innerRadius={58} outerRadius={86} paddingAngle={3} strokeWidth={0}>{PIE.map((_, i) => <Cell key={i} fill={COLORS[i % 4]} />)}</Pie><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /></PieChart>
            </ResponsiveContainer></div>
            <div className="mt-1 space-y-2">{PIE.map((p, i) => (<div key={p.n} className="flex items-center gap-3 text-sm"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} /><span className="text-cream/80">{p.n}</span><span className="ml-auto font-bold">{p.v}%</span></div>))}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
            <div className="flex items-center justify-between"><h3 className="font-display text-xl">Activité récente</h3><span className="text-[11px] text-smoke">auto</span></div>
            <div className="mt-4 space-y-3">{ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${a.c}`}>{a.ic}</span><div className="min-w-0"><p className="truncate text-sm text-cream/90">{a.t}</p><p className="text-xs text-smoke">{a.time}</p></div></div>
            ))}</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417]">
          <div className="flex items-center justify-between p-6"><h2 className="font-display text-2xl">Dernières commandes</h2><Link href="/admin/orders" className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-300 hover:border-gold-400">View all →</Link></div>
          <div className="overflow-x-auto"><table className="w-full table-auto text-left text-sm">
            <thead><tr className="border-y border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.25em] text-smoke"><th className="whitespace-nowrap px-4 py-3 sm:px-6">Order</th><th className="whitespace-nowrap px-4 py-3 sm:px-6">Client</th><th className="whitespace-nowrap px-4 py-3 sm:px-6">Total</th><th className="whitespace-nowrap px-4 py-3 sm:px-6">Status</th></tr></thead>
            <tbody>{ORDERS.slice(0, 5).map((o) => (
              <tr key={o.id} className="border-b border-white/5 transition hover:bg-white/[0.03]"><td className="whitespace-nowrap px-4 py-4 font-bold text-gold-300 sm:px-6">{o.id}<span className="block text-xs font-normal text-smoke">{o.date}</span></td>
                <td className="whitespace-nowrap px-4 py-4 sm:px-6"><span className="flex items-center gap-2.5"><img src={o.avatar} alt="" className="h-8 w-8 shrink-0 rounded-full ring-1 ring-white/10" /><span className="max-w-[110px] truncate sm:max-w-none">{o.customer}</span></span></td>
                <td className="whitespace-nowrap px-4 py-4 font-bold sm:px-6">{money(o.total)}</td>
                <td className="whitespace-nowrap px-4 py-4 sm:px-6"><span className={`whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-bold ${badge(o.status)}`}>{o.status}</span></td></tr>
            ))}</tbody></table></div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
            <h2 className="font-display text-2xl">Top produits</h2>
            <div className="mt-4 space-y-3">{PRODUCTS.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/admin/products`} className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/[0.03] transition">
                <span className="font-display text-lg text-smoke w-6">0{i + 1}</span>
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl"><Image src={p.image} alt={p.fr} fill className="object-cover" sizes="44px" /></span>
                <span className="min-w-0 flex-1"><b className="block truncate text-sm">{p.fr}</b><span className="text-xs text-smoke">★ {p.rating} · {p.reviews} avis</span></span>
                <b className="text-sm text-gold-300">{money(p.price)}</b>
              </Link>
            ))}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
            <h2 className="font-display text-2xl">Commandes / mois</h2>
            <div className="mt-4 h-48"><ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} /><XAxis dataKey="m" stroke="#8e8e93" fontSize={11} tickLine={false} axisLine={false} /><YAxis stroke="#8e8e93" fontSize={11} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Bar dataKey="orders" fill="#c9a24b" radius={[8, 8, 0, 0]} /></BarChart>
            </ResponsiveContainer></div>
          </div>
        </div>
      </div>
    </div>
  );
}
