'use client';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { ORAN, INFO } from '@/lib/data';

export default function LoginPage() {
  const { t } = useLang();
  return (
    <div className="container-luxe grid min-h-[70vh] max-w-5xl items-center gap-8 py-14 lg:grid-cols-2">
      <div className="hidden overflow-hidden rounded-3xl lg:block">
        <img src={ORAN.theatre} alt="Théâtre d'Oran" className="aspect-[4/5] w-full animate-kenburns object-cover" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="card p-8 sm:p-10">
        <p className="eyebrow">— PRESTO · Oran —</p>
        <h1 className="h-display mt-3 text-4xl sm:text-5xl">{t('login.titleA')} <span className="gold-text italic">{t('login.titleB')}</span></h1>
        <div className="mt-7 space-y-4">
          <div><label className="label-luxe">{t('co.phone')}</label><input required className="input-luxe" placeholder="0661…" /></div>
          <div><label className="label-luxe">Password</label><input required type="password" className="input-luxe" placeholder="••••••••" /></div>
        </div>
        <button className="btn-gold mt-6 w-full">OK ✦</button>
        <div className="mt-4 text-center text-xs uppercase tracking-widest text-smoke"><Link href="/admin" className="hover:text-gold-300">Admin →</Link></div>
        <div className="hairline my-6" />
        <p className="text-center text-sm text-smoke">{INFO.tel1} · {INFO.tel2}</p>
      </form>
    </div>
  );
}
