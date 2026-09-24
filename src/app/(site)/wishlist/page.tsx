'use client';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/components/store';
import { useLang } from '@/lib/i18n';
import { PRODUCTS } from '@/lib/data';

export default function WishlistPage() {
  const { wishlist } = useCart();
  const { t } = useLang();
  const list = PRODUCTS.filter((p) => wishlist.includes(p.id));
  return (
    <div className="container-luxe py-14">
      <p className="eyebrow">— PRESTO · Oran —</p>
      <h1 className="h-display mt-3 text-5xl sm:text-6xl">{t('wish.titleA')} <span className="gold-text italic">{t('wish.titleB')} ({list.length})</span></h1>
      {list.length === 0 ? <div className="mt-10 text-center"><p className="text-smoke">♡</p><Link href="/shop" className="btn-gold mt-6 inline-flex">{t('cart.shop')}</Link></div>
      : <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}</div>}
    </div>
  );
}
