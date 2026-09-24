import Image from 'next/image';
import { PRODUCTS, money } from '@/lib/data';
export default function ProductsAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4"><div><h2 className="font-display text-3xl">Products</h2><p className="text-sm text-smoke">{PRODUCTS.length} live pieces · 4 low stock.</p></div>
        <button className="ml-auto rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black">+ Add product</button></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-[#141417] transition hover:border-gold-500/40">
            <div className="relative aspect-[16/10]"><Image src={p.image} alt={p.fr} fill sizes="25vw" className="object-cover" />{p.tag && <span className="absolute left-3 top-3 bg-gold-500 px-2.5 py-1 text-[10px] font-extrabold uppercase text-black">{p.tag}</span>}</div>
            <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">{p.categoryFr} · {p.ar}</p>
              <p className="mt-1 font-display text-lg leading-tight">{p.fr}</p>
              <div className="mt-3 flex items-center justify-between"><b>{money(p.price)}</b><span className="text-xs text-smoke">★ {p.rating} ({p.reviews})</span></div>
              <div className="mt-4 flex gap-2"><button className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-bold uppercase tracking-widest hover:border-gold-400">Edit</button><button className="flex-1 rounded-lg bg-white/5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white/10">Stock: 24</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
