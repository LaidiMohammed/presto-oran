'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { CartProvider } from '@/components/store';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, BellIcon, MoonIcon, SunIcon } from '@/components/icons';

const NAV = [
  { key: 'overview', label: 'Tableau de bord', href: '/admin', icon: '◈' },
  { key: 'orders', label: 'Commandes', href: '/admin/orders', icon: '❖', badge: 7 },
  { key: 'tarifs', label: 'Tarifs & Services', href: '/admin/tarifs', icon: '✎' },
  { key: 'products', label: 'Boutique', href: '/admin/products', icon: '✦' },
  { key: 'customers', label: 'Clients', href: '/admin/customers', icon: '●' },
  { key: 'analytics', label: 'Analytics', href: '/admin/analytics', icon: '▲' },
  { key: 'settings', label: 'Réglages', href: '/admin/settings', icon: '⚙' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const currentPath = path.split('/')[2] || 'overview';

  return (
    <CartProvider>
      <div className="flex min-h-screen bg-[#0a0a0c] text-cream">
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-gradient-to-b from-[#111114] to-[#0d0d0f] transition-all duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ${sidebarCollapsed ? 'lg:w-20 lg:overflow-hidden' : ''}`}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-4 lg:px-5">
            <Link href="/" title="Retour à l'accueil"><Logo size={32} /></Link>
            {!sidebarCollapsed && (
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="rounded-lg p-1.5 text-smoke hover:text-cream hover:bg-white/5 transition"
                aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {sidebarCollapsed ? <ChevronRightIcon size={18} /> : <ChevronLeftIcon size={18} />}
              </button>
            )}
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto p-3 lg:p-4" aria-label="Admin navigation">
            <p className={`px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke transition-opacity ${sidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              Gérer — PRESTO Oran
            </p>
            {NAV.map(({ key, label, href, icon, badge }) => {
              const isActive = currentPath === key;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-500/20 to-gold-500/5 text-gold-300 shadow-[0_0_24px_rgba(201,162,75,0.25)] border border-gold-500/20'
                      : 'text-cream/70 hover:bg-white/5 hover:text-cream hover:border-white/10'
                  } group`}
                  title={sidebarCollapsed ? label : undefined}
                >
                  <span className="flex w-6 shrink-0 items-center justify-center text-base">{icon}</span>
                  {!sidebarCollapsed && (
                    <>
                      <span className="truncate">{label}</span>
                      {badge && (
                        <span className="ms-auto rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300 animate-pulse">
                          {badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
            {!sidebarCollapsed && (
              <>
                <div className="h-px bg-white/5 my-2" />
                <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">Site public</p>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-cream/70 hover:bg-white/5 hover:text-cream transition"
                >
                  <span className="w-6 text-center">←</span>
                  <span className="truncate">Voir le site</span>
                </Link>
                <Link
                  href="/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-cream/70 hover:bg-white/5 hover:text-cream transition"
                >
                  <span className="w-6 text-center">✦</span>
                  <span className="truncate">Voir les tarifs</span>
                </Link>
              </>
            )}
          </nav>

          <div className={`border-t border-white/10 p-4 transition-opacity ${sidebarCollapsed ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100'}`}>
            <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="admin"
                className="h-10 w-10 rounded-full border-2 border-gold-500/40"
              />
              <div className="min-w-0">
                <b className="block text-sm truncate">Gérant PRESTO</b>
                <span className="text-xs text-smoke">Oran · Administrateur</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-white/10 bg-[#0a0a0c]/95 px-5 py-4 backdrop-blur-xl lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden rounded-lg border border-white/15 px-3 py-2"
              aria-label="Open menu"
            >
              ☰
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-xl sm:text-2xl tracking-tight">Tableau de bord PRESTO</h1>
              <p className="text-xs text-smoke">Centre-Ville 0661 200 829 · Akid-Lotfi 0661 597 598</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-smoke"><SearchIcon /></span>
                <input
                  type="search"
                  placeholder="Rechercher commandes, clients, produits…"
                  className="input-luxe pl-10 w-64 bg-[#141417] border-white/10 placeholder:text-smoke focus:border-gold-500/50"
                  aria-label="Global search"
                />
              </div>
              <button className="relative rounded-xl p-2 text-smoke hover:text-cream hover:bg-white/5 transition" aria-label="Notifications">
                <BellIcon size={20} />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold flex items-center justify-center">3</span>
              </button>
              <button className="rounded-xl p-2 text-smoke hover:text-cream hover:bg-white/5 transition" aria-label="Theme">
                <MoonIcon size={20} />
              </button>
              <div className="relative hidden sm:block">
                <Link
                  href="/admin/tarifs"
                  className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black hover:from-gold-400 hover:to-gold-500 shadow-[0_8px_24px_rgba(201,162,75,0.35)] transition-all"
                >
                  + Nouveau tarif
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1 p-5 lg:p-8">{children}</main>
        </div>
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </CartProvider>
  );
}
