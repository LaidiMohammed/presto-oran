'use client';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ORDERS, REVENUE, money } from '@/lib/data';

const PIE = [{ n: 'Couture', v: 42 }, { n: 'Retouche', v: 24 }, { n: 'Repassage', v: 18 }, { n: 'Boutique', v: 16 }];
const COLORS = ['#c9a24b', '#8e8e93', '#5b4a2a', '#3f3f45'];
const badge = (s: string) => s === 'Delivered' ? 'bg-emerald-500/15 text-emerald-300' : s === 'Shipped' ? 'bg-sky-500/15 text-sky-300' : s === 'Processing' ? 'bg-gold-500/15 text-gold-300' : 'bg-red-500/15 text-red-300';

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[['CA (Sep)', '398 k DA', '+16,2% vs Aout', '▲'], ['Orders', '861', '+9.4% this week', '❖'], ['Panier moyen', '8 900 DA', '+4,1% sur-mesure', '✦'], ['Reprises gratuites', '1.8%', '−0.6pts · record', '●']].map(([l, v, d, ic]) => (
          <div key={l} className="rounded-2xl border border-white/10 bg-[#141417] p-6 transition hover:border-gold-500/40">
            <div className="flex justify-between"><p className="text-[11px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><span className="text-gold-400">{ic}</span></div>
            <p className="mt-2 font-display text-4xl">{v}</p><p className="mt-2 text-xs font-bold text-emerald-300">{d}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
          <div className="flex items-center justify-between"><div><h2 className="font-display text-2xl">Chiffre d'affaires</h2><p className="text-xs text-smoke">Mar → Sep · en milliers de DA</p></div><span className="rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-bold text-gold-300">● Live</span></div>
          <div className="mt-4 h-72"><ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a24b" stopOpacity={0.5} /><stop offset="100%" stopColor="#c9a24b" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} /><YAxis stroke="#8e8e93" fontSize={12} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} />
              <Area type="monotone" dataKey="revenue" stroke="#c9a24b" strokeWidth={3} fill="url(#g)" /></AreaChart>
          </ResponsiveContainer></div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
          <h2 className="font-display text-2xl">Mix par univers</h2>
          <div className="mt-2 h-56"><ResponsiveContainer width="100%" height="100%">
            <PieChart><Pie data={PIE} dataKey="v" nameKey="n" innerRadius={55} outerRadius={85} paddingAngle={3} strokeWidth={0}>{PIE.map((_, i) => <Cell key={i} fill={COLORS[i % 4]} />)}</Pie><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /></PieChart>
          </ResponsiveContainer></div>
          <div className="mt-2 space-y-2">{PIE.map((p, i) => (<div key={p.n} className="flex items-center gap-3 text-sm"><span className="h-3 w-3 rounded-full" style={{ background: COLORS[i] }} />{p.n}<span className="ml-auto font-bold">{p.v}%</span></div>))}</div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417]">
          <div className="flex items-center justify-between p-6"><h2 className="font-display text-2xl">Dernieres commandes</h2><a href="/admin/orders" className="text-xs font-bold uppercase tracking-widest text-gold-300">View all →</a></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm">
            <thead><tr className="border-y border-white/10 text-[10px] uppercase tracking-[0.25em] text-smoke"><th className="px-6 py-3">Order</th><th className="px-6 py-3">Client</th><th className="px-6 py-3">Total</th><th className="px-6 py-3">Status</th></tr></thead>
            <tbody>{ORDERS.slice(0, 5).map((o) => (
              <tr key={o.id} className="border-b border-white/5 transition hover:bg-white/[0.02]"><td className="px-6 py-4 font-bold text-gold-300">{o.id}</td>
                <td className="px-6 py-4"><span className="flex items-center gap-2"><img src={o.avatar} alt="" className="h-8 w-8 rounded-full" />{o.customer}</span></td>
                <td className="px-6 py-4 font-bold">{money(o.total)}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-[11px] font-bold ${badge(o.status)}`}>{o.status}</span></td></tr>
            ))}</tbody></table></div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6">
          <h2 className="font-display text-2xl">Commandes / mois</h2>
          <div className="mt-4 h-64"><ResponsiveContainer width="100%" height="100%">
            <BarChart data={REVENUE}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} /><YAxis stroke="#8e8e93" fontSize={12} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Bar dataKey="orders" fill="#c9a24b" radius={[8, 8, 0, 0]} /></BarChart>
          </ResponsiveContainer></div>
        </div>
      </div>
    </div>
  );
}
