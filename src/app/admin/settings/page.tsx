'use client';
import { useState } from 'react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [notifs, setNotifs] = useState([true, true, false, true]);
  const toggle = (i: number) => setNotifs(notifs.map((n, k) => k === i ? !n : n));
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="space-y-6">
      <div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">Configuration maison</p><h2 className="mt-1 font-display text-3xl sm:text-4xl">Réglages</h2></div>
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-7">
            <div className="flex items-center justify-between"><h2 className="font-display text-2xl">Profil maison</h2><span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">● En ligne</span></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="label-luxe">Nom boutique</label><input defaultValue="PRESTO — Retouche & Couture, Oran" className="input-luxe" /></div>
              <div><label className="label-luxe">Devise</label><select className="input-luxe"><option>DZD (DA)</option><option>EUR (€)</option><option>USD ($)</option></select></div>
              <div><label className="label-luxe">Tél Centre-Ville</label><input defaultValue="0661 200 829" className="input-luxe" /></div>
              <div><label className="label-luxe">Tél Akid-Lotfi</label><input defaultValue="0661 597 598" className="input-luxe" /></div>
              <div><label className="label-luxe">Instagram</label><input defaultValue="https://www.instagram.com/presto.dz" className="input-luxe" /></div>
              <div><label className="label-luxe">Logo — /prest.png</label><input defaultValue="/prest.png" className="input-luxe font-mono text-xs" /></div>
              <div className="sm:col-span-2"><label className="label-luxe">Bandeau annonce</label><input defaultValue="Retouche 24h — Centre-Ville · Akid-Lotfi — Devis gratuit" className="input-luxe" /></div>
              <div className="sm:col-span-2"><label className="label-luxe">Horaires</label><input defaultValue="Sam – Jeu · 9h00 – 19h00 · Ven fermé" className="input-luxe" /></div>
            </div>
            <button onClick={save} className="mt-5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_8px_24px_rgba(201,162,75,0.35)]">{saved ? '✓ Enregistré' : 'Enregistrer'}</button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h2 className="font-display text-2xl">Notifications</h2>
            {[['Alertes commandes', 'SMS + WhatsApp au gérant'], ['Stock bas', 'Moins de 8 pièces par SKU'], ['Digest hebdo', 'Chaque lundi 8h00'], ['Mentions presse', 'Instagram · TikTok tracking']].map(([t, d], i) => (
              <button key={t as string} onClick={() => toggle(i)} className="flex w-full items-center justify-between border-b border-white/5 py-4 text-left last:border-0"><div><b className="block text-sm">{t}</b><span className="text-xs text-smoke">{d}</span></div><span className={`h-6 w-11 shrink-0 rounded-full p-1 transition ${notifs[i] ? 'bg-gold-500' : 'bg-white/10'}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${notifs[i] ? 'ml-auto' : ''}`} /></span></button>
            ))}</div>
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h2 className="font-display text-2xl">Intégrations</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[['WhatsApp', 'Connecté', true], ['Instagram', 'Connecté', true], ['CCP / BaridiMob', 'Manuel', false]].map(([n, s, on]) => (
                <div key={n as string} className="rounded-xl border border-white/10 p-4 text-center"><b className="block text-sm">{n}</b><span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${on ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/5 text-smoke'}`}>{s as string}</span></div>
              ))}
            </div></div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-gold-500/30 bg-gradient-to-b from-gold-500/15 to-transparent p-7 text-center"><p className="font-display text-6xl text-gold-300">98</p><p className="text-xs font-bold uppercase tracking-[0.25em]">Score boutique</p><p className="mt-3 text-sm text-smoke">Checkout, photos <code>/products/</code> et logo <code>/prest.png</code> optimaux.</p><a href="https://presto-31.vercel.app" target="_blank" rel="noreferrer" className="mt-4 block rounded-xl border border-gold-500/40 py-2.5 text-xs font-bold uppercase tracking-widest text-gold-300 hover:bg-gold-500 hover:text-black transition">Voir le site →</a></div>
          <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h3 className="font-display text-xl">Équipe</h3>
            {[['Gérant PRESTO', 'Owner · Oran', 12], ['Atelier Couture', 'Retouche lead', 32], ['Accueil Boutique', 'Conseillère', 45]].map(([n, r, img]) => (<div key={n as string} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"><img src={`https://i.pravatar.cc/60?img=${img}`} alt="" className="h-9 w-9 rounded-full ring-1 ring-white/10" /><div><b className="block text-sm">{n}</b><span className="text-xs text-smoke">{r}</span></div><span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Actif</span></div>))}</div>
        </div>
      </div>
    </div>
  );
}
