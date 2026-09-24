'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { CartProvider } from '@/components/store';

const NAV = [
  ['Overview', '/admin', '◈'], ['Commandes', '/admin/orders', '❖'], ['Tarifs & Services', '/admin/tarifs', '✎'],
  ['Boutique', '/admin/products', '✦'], ['Clients', '/admin/customers', '●'], ['Analytics', '/admin/analytics', '▲'], ['Réglages', '/admin/settings', '⚙']
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <CartProvider>
    <div className="flex min-h-screen bg-[#0b0b0d] text-cream">
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#101013] transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-white/10 p-5"><Logo size={40} /></div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">Gérer — PRESTO Oran</p>
          {NAV.map(([l, h, ic]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${path === h ? 'bg-gold-500 text-black shadow-[0_0_30px_rgba(201,162,75,0.3)]' : 'text-cream/70 hover:bg-white/5 hover:text-cream'}`}>
              <span className="w-5 text-center">{ic}</span>{l}
              {l === 'Commandes' && <span className="ms-auto rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">7 new</span>}
            </Link>
          ))}
          <p className="px-3 pb-2 pt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">Site</p>
          <Link href="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-cream/70 hover:bg-white/5">← Voir le site</Link>
          <Link href="/services" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-cream/70 hover:bg-white/5">Voir les tarifs</Link>
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
            <img src="https://i.pravatar.cc/80?img=12" alt="admin" className="h-10 w-10 rounded-full border border-gold-500/40" />
            <div><b className="block text-sm">Gérant PRESTO</b><span className="text-xs text-smoke">Oran · Admin</span></div>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-white/10 bg-[#0b0b0d]/90 px-5 py-4 backdrop-blur lg:px-8">
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 px-3 py-2 lg:hidden">☰</button>
          <div><h1 className="font-display text-xl sm:text-2xl">Salut, voici la maison ✦</h1><p className="text-xs text-smoke">Centre-Ville 0661 200 829 · Akid-Lotfi 0661 597 598</p></div>
          <div className="ms-auto flex items-center gap-2">
            <input placeholder="Recherche…" className="input-luxe hidden !w-64 md:block" />
            <Link href="/admin/tarifs" className="hidden rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black sm:block">+ Tarif / Service</Link>
          </div>
        </header>
        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
      {open && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />}
    </div>
    </CartProvider>
  );
}
