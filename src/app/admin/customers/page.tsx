const CLIENTS = [
  ['Amine Benali', 'Centre-Ville', '84 500 DA', 'VIP · 14 retouches', 12], ['Yasmine Kaci', 'Akid-Lotfi', '52 300 DA', 'VIP · 9 commandes', 32],
  ['Mohamed Cherif', 'Oran', '96 000 DA', 'Marié · 21 pièces', 53], ['Lina Boumediene', 'Bir El Djir', '41 200 DA', 'Gold · 7 visites', 45],
  ['Sara Haddad', 'Centre-Ville', '28 900 DA', 'Gold · 5 visites', 26], ['Karim Ziani', 'Es Sénia', '33 400 DA', 'Gold · 6 visites', 59],
  ['Nour Elhouda', 'Akid-Lotfi', '19 800 DA', 'Silver · 4 visites', 41], ['Walid Mansouri', 'Oran', '61 700 DA', 'VIP · 11 visites', 68]
];
export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="font-display text-3xl">Clients</h2><p className="text-sm text-smoke">8 412 clients · 640 fidèles des deux boutiques.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {CLIENTS.map(([n, c, life, tier, img]) => (
          <div key={n as string} className="rounded-2xl border border-white/10 bg-[#141417] p-6 text-center transition hover:border-gold-500/40">
            <img src={`https://i.pravatar.cc/120?img=${img}`} alt={n as string} className="mx-auto h-16 w-16 rounded-full border-2 border-gold-500/50" />
            <b className="mt-3 block">{n}</b><p className="text-xs uppercase tracking-widest text-smoke">{c}</p>
            <p className="mt-2 font-display text-xl text-gold-300">{life}</p>
            <span className="mt-2 inline-block rounded-full bg-white/5 px-3 py-1 text-[11px] font-bold">{tier}</span>
            <div className="mt-4 flex gap-2"><button className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-bold">Message</button><button className="flex-1 rounded-lg bg-gold-500 py-2 text-xs font-extrabold text-black">Fiche</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
