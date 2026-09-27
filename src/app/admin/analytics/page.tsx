'use client';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, Funnel, FunnelChart, LabelList } from 'recharts';
import { REVENUE } from '@/lib/data';
const CHANNELS = [['Instagram & TikTok', '46%', 'w-[46%]'], ['Rendez-vous privés', '24%', 'w-[24%]'], ['Google & presse', '18%', 'w-[18%]'], ['Clients fidèles', '12%', 'w-[12%]']];
const FUNNEL = [{ n: 'Visites', v: 12400 }, { n: 'Boutique', v: 4820 }, { n: 'Panier', v: 1240 }, { n: 'Commande', v: 861 }];
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">Acquisition · Conversion · LTV</p><h2 className="mt-1 font-display text-3xl sm:text-4xl">Analytics</h2></div>
        <div className="flex gap-2">{['7j', '30j', '90j'].map((p, i) => (<button key={p} className={`rounded-full px-4 py-2 text-xs font-bold ${i === 1 ? 'bg-gold-500 text-black' : 'border border-white/15 text-cream/60'}`}>{p}</button>))}</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[['Conversion', '3.8%', '+0.4pt'], ['Session moy.', '6m 12s', '+48s'], ['Visiteurs retour', '41%', '+3pts'], ['LTV / client', '48 200 DA', '+6,1%']].map(([l, v, d]) => (
          <div key={l as string} className="rounded-2xl border border-white/10 bg-[#141417] p-5 transition hover:border-gold-500/40"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><p className="mt-1 font-display text-3xl text-gold-300">{v}</p><p className="mt-1 text-xs font-bold text-emerald-300">{d}</p></div>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">Revenu vs commandes</h3>
          <div className="mt-4 h-72"><ResponsiveContainer width="100%" height="100%">
            <LineChart data={REVENUE}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><YAxis stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Legend />
              <Line type="monotone" dataKey="revenue" name="CA (k DA)" stroke="#c9a24b" strokeWidth={3} dot={false} /><Line type="monotone" dataKey="orders" name="Commandes" stroke="#8e8e93" strokeWidth={2} dot={false} /></LineChart>
          </ResponsiveContainer></div></div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">Tunnel de conversion</h3>
            <div className="mt-2 h-56"><ResponsiveContainer width="100%" height="100%"><FunnelChart><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Funnel dataKey="v" data={FUNNEL} isAnimationActive fill="#c9a24b"><LabelList position="center" fill="#000" stroke="none" dataKey="n" fontSize={11} fontWeight={700} /></Funnel></FunnelChart></ResponsiveContainer></div>
            <div className="mt-1 space-y-1.5">{FUNNEL.map((f) => (<div key={f.n} className="flex text-sm"><span className="text-cream/70">{f.n}</span><b className="ms-auto">{f.v.toLocaleString()}</b></div>))}</div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">Commandes / mois</h3>
          <div className="mt-4 h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={REVENUE}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><YAxis stroke="#8e8e93" fontSize={12} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Bar dataKey="orders" fill="#c9a24b" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div></div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">D’où viennent les clients</h3>
          <div className="mt-5 space-y-5">{CHANNELS.map(([l, v, w]) => (<div key={l}><div className="flex justify-between text-sm"><span className="text-cream/80">{l}</span><b className="text-gold-300">{v}</b></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300 ${w}`} /></div></div>))}</div>
          <div className="mt-6 rounded-xl border border-gold-500/20 bg-gold-500/10 p-4 text-sm text-gold-300">✦ Insight : les pages produit avec photo réelle <code>/products/*.jpg</code> convertissent 2,3× mieux. Ajoutez vos 8 photos.</div></div>
      </div>
    </div>
  );
}
