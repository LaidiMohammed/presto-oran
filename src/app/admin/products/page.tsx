'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS as SEED, money, type Product } from '@/lib/data';

export default function ProductsAdmin() {
  const [list, setList] = useState<Product[]>(SEED);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ fr: '', ar: '', categoryFr: 'Sur mesure', price: '', image: '/products/costume-presto.jpg', tag: '' });

  const cats = useMemo(() => ['all', ...Array.from(new Set(list.map((p) => p.categoryFr)))], [list]);
  const filtered = list.filter((p) => (cat === 'all' || p.categoryFr === cat) && (p.fr + p.ar + p.id).toLowerCase().includes(q.toLowerCase()));

  const saveNew = () => {
    if (!form.fr || !form.price) return;
    const id = form.fr.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30) + '-' + Date.now().toString(36);
    setList([{ id, fr: form.fr, ar: form.ar || form.fr, categoryFr: form.categoryFr, categoryAr: form.categoryFr, price: Number(form.price), rating: 5.0, reviews: 0, image: form.image, tag: form.tag || undefined, colors: ['#0a0a0b'], descFr: '', descAr: '' }, ...list]);
    setShowAdd(false); setForm({ fr: '', ar: '', categoryFr: 'Sur mesure', price: '', image: '/products/costume-presto.jpg', tag: '' });
  };
  const saveEdit = () => {
    if (!editing) return;
    setList(list.map((p) => p.id === editing.id ? editing : p));
    setEditing(null);
  };
  const remove = (id: string) => { if (confirm('Supprimer ce produit ?')) setList(list.filter((p) => p.id !== id)); };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">Boutique · {list.length} pièces</p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">Produits</h2>
          <p className="mt-1 text-sm text-smoke">Images locales <code className="text-gold-300">/products/*.jpg</code> · <Link href="/shop" className="underline hover:text-gold-300">voir boutique →</Link></p></div>
        <button onClick={() => setShowAdd(true)} className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_8px_24px_rgba(201,162,75,0.35)]">+ Add product</button>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#141417] p-4 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (<button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition ${cat === c ? 'bg-gold-500 text-black' : 'border border-white/15 text-cream/60 hover:border-gold-400'}`}>{c === 'all' ? 'Tous' : c}</button>))}
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher produit…" className="input-luxe lg:ms-auto lg:max-w-xs" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filtered.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141417] transition hover:border-gold-500/40 hover:-translate-y-1">
            <div className="relative aspect-[16/10] bg-noir-900">
              <Image src={p.image} alt={p.fr} fill sizes="25vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              {p.tag && <span className="absolute left-3 top-3 rounded-md bg-gold-500 px-2.5 py-1 text-[10px] font-extrabold uppercase text-black">{p.tag}</span>}
              <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] backdrop-blur">★ {p.rating}</span>
              <span className="absolute bottom-3 left-3 text-[11px] font-mono text-cream/60">{p.id}</span>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">{p.categoryFr} · {p.ar}</p>
              <p className="mt-1 truncate font-display text-lg leading-tight">{p.fr}</p>
              <div className="mt-2 flex items-center justify-between"><b className="text-gold-300">{money(p.price)}</b><span className="text-xs text-smoke">{p.reviews} avis</span></div>
              <div className="mt-1 truncate text-[11px] text-smoke">{p.image}</div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => setEditing({ ...p })} className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-bold uppercase tracking-widest hover:border-gold-400 hover:text-gold-300">Edit</button>
                <Link href={`/product/${p.id}`} className="flex-1 rounded-lg bg-white/5 py-2 text-center text-xs font-bold uppercase tracking-widest hover:bg-white/10">Voir</Link>
                <button onClick={() => remove(p.id)} className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-300 hover:bg-red-500/10">✕</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="rounded-2xl border border-dashed border-white/15 p-12 text-center text-smoke">Aucun produit — ajoutez vos photos dans <code>public/products/</code></p>}

      {showAdd && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur" onClick={() => setShowAdd(false)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#141417] p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-2xl">Nouveau produit</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2"><label className="label-luxe">Nom FR *</label><input value={form.fr} onChange={(e) => setForm({ ...form, fr: e.target.value })} className="input-luxe" placeholder="Costume Prestige" /></div>
              <div><label className="label-luxe">Nom AR</label><input value={form.ar} onChange={(e) => setForm({ ...form, ar: e.target.value })} className="input-luxe" dir="rtl" /></div>
              <div><label className="label-luxe">Prix DA *</label><input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} type="number" className="input-luxe" placeholder="24500" /></div>
              <div><label className="label-luxe">Catégorie</label><input value={form.categoryFr} onChange={(e) => setForm({ ...form, categoryFr: e.target.value })} className="input-luxe" /></div>
              <div><label className="label-luxe">Tag</label><input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="input-luxe" placeholder="Nouveau" /></div>
              <div className="sm:col-span-2"><label className="label-luxe">Image — /products/*.jpg</label><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="input-luxe font-mono text-xs" /></div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-noir-900 sm:col-span-2">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={form.image} alt="" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.2'; }} /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div></div>
            </div>
            <div className="mt-5 flex gap-2"><button onClick={() => setShowAdd(false)} className="flex-1 rounded-xl border border-white/15 py-3 text-xs font-bold uppercase tracking-widest">Annuler</button><button onClick={saveNew} className="flex-1 rounded-xl bg-gold-500 py-3 text-xs font-extrabold uppercase tracking-widest text-black">Ajouter</button></div>
          </div>
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur" onClick={() => setEditing(null)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#141417] p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-2xl">Modifier — {editing.fr}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div><label className="label-luxe">Nom FR</label><input value={editing.fr} onChange={(e) => setEditing({ ...editing, fr: e.target.value })} className="input-luxe" /></div>
              <div><label className="label-luxe">Nom AR</label><input value={editing.ar} onChange={(e) => setEditing({ ...editing, ar: e.target.value })} className="input-luxe" dir="rtl" /></div>
              <div><label className="label-luxe">Prix DA</label><input value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) || 0 })} type="number" className="input-luxe" /></div>
              <div><label className="label-luxe">Ancien prix</label><input value={editing.oldPrice ?? ''} onChange={(e) => setEditing({ ...editing, oldPrice: Number(e.target.value) || undefined })} type="number" className="input-luxe" /></div>
              <div><label className="label-luxe">Catégorie</label><input value={editing.categoryFr} onChange={(e) => setEditing({ ...editing, categoryFr: e.target.value })} className="input-luxe" /></div>
              <div><label className="label-luxe">Tag</label><input value={editing.tag ?? ''} onChange={(e) => setEditing({ ...editing, tag: e.target.value || undefined })} className="input-luxe" /></div>
              <div className="sm:col-span-2"><label className="label-luxe">Image</label><input value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} className="input-luxe font-mono text-xs" /></div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-noir-900 sm:col-span-2"><Image src={editing.image} alt="" fill className="object-cover" sizes="50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div></div>
            </div>
            <div className="mt-5 flex gap-2"><button onClick={() => setEditing(null)} className="flex-1 rounded-xl border border-white/15 py-3 text-xs font-bold uppercase tracking-widest">Annuler</button><button onClick={saveEdit} className="flex-1 rounded-xl bg-gold-500 py-3 text-xs font-extrabold uppercase tracking-widest text-black">Enregistrer</button></div>
            <p className="mt-3 text-center text-[11px] text-smoke">Note : modifications en session uniquement — pour persister, copiez vers <code>src/lib/data.ts</code></p>
          </div>
        </div>
      )}
    </div>
  );
}
