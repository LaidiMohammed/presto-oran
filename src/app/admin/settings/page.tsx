export default function SettingsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h2 className="font-display text-2xl">Maison profile</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><label className="label-luxe">House name</label><input defaultValue="PRESTO — Retouche & Couture, Oran" className="input-luxe" /></div>
            <div><label className="label-luxe">Currency</label><select className="input-luxe"><option>USD ($)</option><option>EUR (€)</option><option>AED (د.إ)</option></select></div>
            <div className="sm:col-span-2"><label className="label-luxe">Announcement bar</label><input defaultValue="FW26 Runway — complimentary shipping over $500" className="input-luxe" /></div>
          </div>
          <button className="mt-5 rounded-xl bg-gold-500 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-black">Save changes</button></div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h2 className="font-display text-2xl">Notifications</h2>
          {[['New order alerts', 'SMS + email to concierge', true], ['Low stock warnings', 'Below 8 pieces per SKU', true], ['Weekly performance digest', 'Every Monday 8:00', false], ['Press mentions', 'Vogue, Elle, GQ tracking', true]].map(([t, d, on]) => (
            <div key={t as string} className="flex items-center justify-between border-b border-white/5 py-4 last:border-0"><div><b className="block text-sm">{t}</b><span className="text-xs text-smoke">{d}</span></div><span className={`h-6 w-11 rounded-full p-1 transition ${on ? 'bg-gold-500' : 'bg-white/10'}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${on ? 'ml-auto' : ''}`} /></span></div>
          ))}</div>
      </div>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold-500/30 bg-gradient-to-b from-gold-500/10 to-transparent p-7 text-center"><p className="font-display text-5xl text-gold-300">98</p><p className="text-xs font-bold uppercase tracking-[0.25em]">Store health score</p><p className="mt-3 text-sm text-smoke">Checkout, shipping and video hosting all optimal.</p></div>
        <div className="rounded-2xl border border-white/10 bg-[#141417] p-7"><h3 className="font-display text-xl">Team</h3>
          {[['Hélène Noir', 'Owner', 12], ['Marc Aubert', 'Atelier lead', 8], ['Lina K.', 'Concierge', 5]].map(([n, r, img]) => (<div key={n as string} className="flex items-center gap-3 py-3"><img src={`https://i.pravatar.cc/60?img=${img}`} alt="" className="h-9 w-9 rounded-full" /><div><b className="block text-sm">{n}</b><span className="text-xs text-smoke">{r}</span></div><span className="ml-auto text-xs text-emerald-300">● Active</span></div>))}</div>
      </div>
    </div>
  );
}
