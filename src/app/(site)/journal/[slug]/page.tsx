import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, INFO } from '@/lib/data';

export function generateStaticParams() { return POSTS.map((p) => ({ slug: p.slug })); }

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = POSTS.find((x) => x.slug === params.slug);
  if (!a) return notFound();
  return (
    <article className="container-luxe max-w-4xl py-14">
      <p className="text-[11px] uppercase tracking-[0.25em] text-smoke"><Link href="/journal" className="hover:text-gold-300">← Journal</Link></p>
      <p className="eyebrow mt-6">— {a.categoryFr} · {a.date} —</p>
      <h1 className="h-display mt-4 text-4xl sm:text-6xl">{a.fr}</h1>
      <p className="mt-3 font-display text-2xl text-gold-300">{a.ar}</p>
      <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl"><Image src={a.image} alt={a.fr} fill priority sizes="80vw" className="object-cover" /></div>
      <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-cream/85">
        <p className="font-display text-2xl italic text-gold-300">“{a.exFr}”</p>
        <p>Chez PRESTO Oran, chaque pièce qui entre à l’atelier est examinée, mesurée puis traitée par un maître tailleur. Ourlets invisibles, fermetures YKK originales, repassage vapeur professionnel.</p>
        <p>Déposez au Centre-Ville ({INFO.tel1}) ou à Akid-Lotfi ({INFO.tel2}), recevez un ticket avec délai garanti, et repartez impeccable. Photos réelles de nos réalisations sur Instagram @presto.dz.</p>
        <p className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-6 text-center" dir="rtl">“{a.exAr}”</p>
        <div className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-8 text-center">
          <p className="font-display text-3xl">Confiez-nous vos vêtements.</p>
          <Link href="/contact" className="btn-gold mt-5 inline-flex">Devis gratuit</Link>
        </div>
      </div>
    </article>
  );
}
