'use client';
import { useState } from 'react';
import { Reveal } from '@/components/ui';
import { useLang } from '@/lib/i18n';
import { INFO, ORAN } from '@/lib/data';

export default function ContactPage() {
  const { t, lang } = useLang();
  const [name, setName] = useState('');
  const [need, setNeed] = useState('');
  const [shop, setShop] = useState(INFO.wa1);
  const wa = `${shop}?text=${encodeURIComponent(`${name} — ${need}`)}`;
  return (
    <div className="container-luxe grid gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-2">
      <Reveal>
        <p className="eyebrow">— {t('contact.eyebrow')} —</p>
        <h1 className="h-display mt-3 text-4xl sm:text-6xl">{t('contact.titleA')} <span className="gold-text italic">{t('contact.titleB')}</span></h1>
        <div className="mt-6 space-y-4 sm:mt-8">
          {[{ img: ORAN.theatre, addr: INFO.addr1, tel: INFO.tel1, wa: INFO.wa1 }, { img: ORAN.gare, addr: INFO.addr2, tel: INFO.tel2, wa: INFO.wa2 }].map((s) => (
            <div key={s.addr} className="card flex gap-5 overflow-hidden p-4">
              <img src={s.img} alt={s.addr} className="h-24 w-24 shrink-0 rounded-xl object-cover" />
              <div><b className="font-display text-xl text-gold-300">PRESTO {s.addr}</b>
                <a href={`tel:${s.tel.replace(/\s/g, '')}`} className="mt-1 block font-bold">📞 {s.tel}</a>
                <p className="text-xs text-smoke">📧 {INFO.email} · {t('contact.hours')}</p>
                <a href={s.wa} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs font-bold uppercase tracking-widest text-gold-300">WhatsApp →</a></div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card space-y-5 p-8">
          <h2 className="font-display text-3xl">{t('contact.form')}</h2>
          <div><label className="label-luxe">{t('contact.name')}</label><input value={name} onChange={(e) => setName(e.target.value)} className="input-luxe" placeholder={lang === 'ar' ? 'مثال: أمين' : 'Ex : Amine'} /></div>
          <div><label className="label-luxe">Boutique</label><select value={shop} onChange={(e) => setShop(e.target.value)} className="input-luxe"><option value={INFO.wa1}>{INFO.addr1}</option><option value={INFO.wa2}>{INFO.addr2}</option></select></div>
          <div><label className="label-luxe">{t('contact.need')}</label><textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={4} className="input-luxe" /></div>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-gold w-full">{t('contact.send')}</a>
        </div>
      </Reveal>
    </div>
  );
}
