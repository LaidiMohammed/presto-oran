'use client';
import { useState } from 'react';
import { Reveal } from '@/components/ui';
import { useLang } from '@/lib/i18n';

export default function FaqPage() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(0);
  const FAQS: [string, string][] = lang === 'ar' ? [
    ['ما هي مدة التعديل؟', 'معظم التعديلات خلال 24 ساعة. البدلات والفساتين المعقدة 48 ساعة إلى 7 أيام.'],
    ['كيف تتم المحاسبة؟', 'الأسعار معلنة بالدينار في المحل وعلى الموقع، وتقدير مجاني قبل أي عمل.'],
    ['أين أستلم ملابسي؟', 'من نفس المحل: وسط المدينة 0661200829 أو عكيد لطفي 0661597598.'],
    ['هل الكيّ في نفس اليوم؟', 'نعم للقمصان والبدلات قبل الساعة 12:00.'],
    ['هل تخيطون حسب المقاس؟', 'نعم: قمصان، بدلات، قشابية وقفطان — مع 2 إلى 3 تجارب.'],
    ['كيف أحجز؟', 'واتساب أو اتصال مباشر بأقرب محل إليكم.']
  ] : [
    ['Quels délais ?', 'La plupart des retouches en 24h. Costumes et pièces complexes : 48h à 7 jours.'],
    ['Comment sont calculés les prix ?', 'Tarifs affichés en dinars en boutique et sur le site, devis gratuit avant tout travail.'],
    ['Où récupérer mes vêtements ?', 'Dans la même boutique : Centre-Ville 0661 200 829 ou Akid-Lotfi 0661 597 598.'],
    ['Repassage le jour même ?', 'Oui pour chemises et costumes déposés avant midi.'],
    ['Faites-vous du sur-mesure ?', 'Oui : chemises, costumes, qamis et caftans — avec 2 à 3 essayages.'],
    ['Comment réserver ?', 'WhatsApp ou appel direct à la boutique la plus proche.']
  ];
  return (
    <div className="container-luxe max-w-3xl py-10 sm:py-14">
      <Reveal><p className="eyebrow">— PRESTO · Oran —</p><h1 className="h-display mt-3 text-4xl sm:text-6xl">{t('faq.titleA')} <span className="gold-text italic">{t('faq.titleB')}</span></h1></Reveal>
      <div className="mt-10 space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className={`overflow-hidden rounded-2xl border transition ${open === i ? 'border-gold-500/50 bg-noir-900' : 'border-white/10 bg-noir-900/60'}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-6 text-start font-display text-xl">{q}<span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition ${open === i ? 'rotate-45 border-gold-400 text-gold-300' : 'border-white/20'}`}>+</span></button>
            {open === i && <p className="px-6 pb-6 leading-relaxed text-smoke">{a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
