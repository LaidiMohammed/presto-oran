import { ORDERS, money } from '@/lib/data';
const badge = (s: string) => s === 'Delivered' ? 'bg-emerald-500/15 text-emerald-300' : s === 'Shipped' ? 'bg-sky-500/15 text-sky-300' : s === 'Processing' ? 'bg-gold-500/15 text-gold-300' : 'bg-red-500/15 text-red-300';
export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4"><div><h2 className="font-display text-3xl">Orders</h2><p className="text-sm text-smoke">{ORDERS.length} shown · export, refund or track in one click.</p></div>
        <div className="ml-auto flex gap-2"><input placeholder="Search order / client…" className="input-luxe !w-64" /><button className="rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black">Export</button></div></div>
      <div className="grid gap-4 sm:grid-cols-4">{[['Total orders', '2,314'], ['Awaiting ship', '18'], ['Refunded', '12'], ['Revenue Sep', '$398k']].map(([l, v]) => (<div key={l} className="rounded-2xl border border-white/10 bg-[#141417] p-5"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">{l}</p><p className="mt-1 font-display text-3xl">{v}</p></div>))}</div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417]">
        <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm">
          <thead><tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.25em] text-smoke"><th className="px-6 py-4">Order</th><th className="px-6 py-4">Client</th><th className="px-6 py-4">Product</th><th className="px-6 py-4">Payment</th><th className="px-6 py-4">Total</th><th className="px-6 py-4">Status</th></tr></thead>
          <tbody>{ORDERS.map((o) => (
            <tr key={o.id} className="border-b border-white/5 transition hover:bg-white/[0.02]"><td className="px-6 py-4 font-bold text-gold-300">{o.id}<span className="block text-xs font-normal text-smoke">{o.date}</span></td>
              <td className="px-6 py-4"><span className="flex items-center gap-2"><img src={o.avatar} alt="" className="h-8 w-8 rounded-full" />{o.customer}</span></td>
              <td className="px-6 py-4 text-cream/80">{o.product}</td><td className="px-6 py-4 text-smoke">{o.pay}</td>
              <td className="px-6 py-4 font-bold">{money(o.total)}</td>
              <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-[11px] font-bold ${badge(o.status)}`}>{o.status}</span></td></tr>
          ))}</tbody></table></div>
      </div>
    </div>
  );
}
