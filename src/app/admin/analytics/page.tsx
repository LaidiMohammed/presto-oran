'use client';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { REVENUE } from '@/lib/data';
const CHANNELS = [['Instagram & TikTok', '46%', 'w-[46%]'], ['Private appointments', '24%', 'w-[24%]'], ['Google & press', '18%', 'w-[18%]'], ['Returning clients', '12%', 'w-[12%]']];
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="font-display text-3xl">Analytics</h2><p className="text-sm text-smoke">Acquisition, conversion and lifetime value.</p></div>
      <div className="grid gap-4 sm:grid-cols-4">{[['Conversion', '3.8%'], ['Avg. session', '6m 12s'], ['Return visitors', '41%'], ['LTV / client', '$4,820']].map(([l, v]) => (<div key={l} className="rounded-2xl border border-white/10 bg-[#141417] p-5"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><p className="mt-1 font-display text-3xl text-gold-300">{v}</p></div>))}</div>
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">Revenue vs orders</h3>
          <div className="mt-4 h-72"><ResponsiveContainer width="100%" height="100%">
            <LineChart data={REVENUE}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" /><XAxis dataKey="m" stroke="#8e8e93" fontSize={12} /><YAxis stroke="#8e8e93" fontSize={12} /><Tooltip contentStyle={{ background: '#1c1c1f', border: '1px solid #c9a24b55', borderRadius: 12 }} /><Legend />
              <Line type="monotone" dataKey="revenue" stroke="#c9a24b" strokeWidth={3} dot={false} /><Line type="monotone" dataKey="orders" stroke="#8e8e93" strokeWidth={2} dot={false} /></LineChart>
          </ResponsiveContainer></div></div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-6"><h3 className="font-display text-2xl">Where clients come from</h3>
          <div className="mt-5 space-y-5">{CHANNELS.map(([l, v, w]) => (<div key={l}><div className="flex justify-between text-sm"><span className="text-cream/80">{l}</span><b className="text-gold-300">{v}</b></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-300 ${w}`} /></div></div>))}</div>
          <div className="mt-6 rounded-xl bg-gold-500/10 p-4 text-sm text-gold-300">✦ Insight: video-led product pages convert 2.3× better. Add film to all couture SKUs.</div></div>
      </div>
    </div>
  );
}
