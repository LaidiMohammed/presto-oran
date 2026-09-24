import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, money } from '@/lib/data';
import { ProductDetails } from './details';

export function generateStaticParams() { return PRODUCTS.map((p) => ({ id: p.id })); }

export default function ProductPage({ params }: { params: { id: string } }) {
  const p = PRODUCTS.find((x) => x.id === params.id);
  if (!p) return notFound();
  const related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 3);
  return (
    <div className="container-luxe py-14">
      <p className="text-[11px] uppercase tracking-[0.25em] text-smoke"><Link href="/" className="hover:text-gold-300">PRESTO</Link> / <Link href="/shop" className="hover:text-gold-300">Boutique</Link> / <span className="text-gold-300">{p.fr}</span></p>
      <ProductDetails id={p.id} />
      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {related.map((r) => (
          <Link key={r.id} href={`/product/${r.id}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-noir-900 transition hover:border-gold-500/40">
            <div className="relative aspect-[16/11]"><Image src={r.image} alt={r.fr} fill sizes="33vw" className="object-cover transition duration-1000 group-hover:scale-110" /></div>
            <div className="flex items-center justify-between gap-3 p-5"><div><p className="font-display text-xl">{r.fr}</p><p className="text-sm text-smoke">{r.ar}</p></div><p className="font-bold text-gold-300">{money(r.price)}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
