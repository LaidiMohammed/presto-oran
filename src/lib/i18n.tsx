'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'fr' | 'ar';

const dict: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil', 'nav.services': 'Services & Tarifs', 'nav.shop': 'Boutique', 'nav.collections': 'Univers', 'nav.about': 'La Maison', 'nav.journal': 'Journal', 'nav.contact': 'Contact',
    'top.visit': '2 boutiques à Oran', 'top.ship': 'Retouche express 24h',
    'hero.eyebrow': 'Retouche · Couture · Repassage — Oran',
    'hero.titleA': 'L’ÉLÉGANCE,',
    'hero.titleB': 'COUSUE MAIN.',
    'hero.sub': 'PRESTO habille Oran depuis le Centre-Ville et Akid-Lotfi : retouches express en 24h, costumes sur mesure, repassage soigné. Déposez aujourd’hui, brillez demain.',
    'hero.cta1': 'Voir les tarifs', 'hero.cta2': 'Boutique',
    'stats.artisans': 'Maîtres tailleurs', 'stats.clients': 'Clients fidèles', 'stats.note': 'Note moyenne',
    'sec.servicesEyebrow': 'Nos services', 'sec.servicesTitleA': 'Le geste juste,',
    'sec.servicesTitleB': 'au prix juste.',
    'sec.servicesCopy': 'Tarifs affichés en dinars, modifiables à tout moment depuis le tableau de bord. Devis gratuit en boutique.',
    'sec.boutiqueEyebrow': 'La boutique', 'sec.boutiqueTitleA': 'Pièces & tissus,',
    'sec.boutiqueTitleB': 'prêts à porter.',
    'sec.locEyebrow': 'Nos adresses', 'sec.locTitleA': 'Deux portes,',
    'sec.locTitleB': 'une même exigence.',
    'sec.craftEyebrow': 'L’atelier', 'sec.journalEyebrow': 'Journal',
    'btn.all': 'Tout voir', 'btn.book': 'Réserver sur WhatsApp', 'btn.call': 'Appeler', 'btn.quote': 'Devis gratuit',
    'card.from': 'dès', 'card.order': 'Commander',
    'shop.eyebrow': 'La boutique', 'shop.titleA': 'Articles',
    'shop.titleB': 'disponibles.',
    'shop.search': 'Rechercher…', 'shop.all': 'Tout', 'shop.pieces': 'articles',
    'prod.delivery': 'Retrait boutique gratuit', 'prod.size': 'Taille', 'prod.add': 'Ajouter au panier', 'prod.added': '✓ Ajouté !', 'prod.related': 'Vous aimerez',
    'prod.wa': 'Commander sur WhatsApp',
    'cart.title': 'Votre panier', 'cart.empty': 'Votre panier est vide.', 'cart.emptySub': 'De belles pièces vous attendent.',
    'cart.shop': 'Voir la boutique', 'cart.summary': 'Résumé', 'cart.subtotal': 'Sous-total', 'cart.pickup': 'Retrait boutique', 'cart.free': 'Gratuit', 'cart.total': 'Total', 'cart.checkout': 'Commander', 'cart.continue': 'Continuer mes achats', 'cart.remove': 'Retirer',
    'co.title': 'Finaliser la commande', 'co.contact': 'Vos coordonnées', 'co.pickup': 'Retrait', 'co.pay': 'Paiement à la livraison', 'co.name': 'Nom complet', 'co.phone': 'Téléphone', 'co.city': 'Commune', 'co.note': 'Note (taille, couleur…)', 'co.payBtn': 'Confirmer la commande', 'co.done': 'Merci ! Commande confirmée.', 'co.doneSub': 'Nous vous appellerons pour confirmer le retrait.',
    'co.back': 'Retour boutique', 'co.cash': 'Paiement en espèces à la livraison / au retrait.',
    'contact.eyebrow': 'Contact & Devis', 'contact.titleA': 'Passez nous voir,',
    'contact.titleB': 'on s’occupe du reste.',
    'contact.form': 'Demande de devis', 'contact.send': 'Envoyer sur WhatsApp', 'contact.name': 'Votre nom', 'contact.need': 'Votre besoin (ourlet, costume…)',
    'contact.hours': 'Sam – Jeu · 9h à 19h',
    'faq.titleA': 'Questions',
    'faq.titleB': 'fréquentes.',
    'foot.tag': 'Retouche, couture et repassage à Oran. Deux adresses, une exigence : la perfection.',
    'foot.maison': 'Maison', 'foot.care': 'Aide', 'foot.follow': 'Suivez-nous', 'foot.rights': '© 2026 PRESTO Oran · Tous droits réservés',
    'svc.titleA': 'Services',
    'svc.titleB': '& tarifs.',
    'svc.sub': 'Prix en dinars algériens. Devis gratuit en boutique ou sur WhatsApp.',
    'svc.duration': 'Délai', 'svc.book': 'Réserver',
    'about.titleA': 'Une maison née',
    'about.titleB': 'à Oran.',
    'col.titleA': 'Quatre univers,',
    'col.titleB': 'une obsession.',
    'jour.titleA': 'Histoires',
    'jour.titleB': 'de l’atelier.',
    'wish.titleA': 'Vos',
    'wish.titleB': 'coups de cœur.',
    'login.titleA': 'Bon',
    'login.titleB': 'retour.',
    'admin.tarifs': 'Tarifs'
  },
  ar: {
    'nav.home': 'الرئيسية', 'nav.services': 'الخدمات والأسعار', 'nav.shop': 'المتجر', 'nav.collections': 'الأقسام', 'nav.about': 'الدار', 'nav.journal': 'المدونة', 'nav.contact': 'اتصل بنا',
    'top.visit': 'محلّان في وهران', 'top.ship': 'تعديل سريع خلال 24 ساعة',
    'hero.eyebrow': 'تعديل · خياطة · كيّ — وهران',
    'hero.titleA': 'الأناقة،',
    'hero.titleB': 'بخياطة يدوية.',
    'hero.sub': 'برستو تلبس وهران من وسط المدينة وعكيد لطفي: تعديلات سريعة خلال 24 ساعة، بدلات حسب المقاس، كيّ متقن. اتركوا ملابسكم اليوم وتألقوا غداً.',
    'hero.cta1': 'شاهد الأسعار', 'hero.cta2': 'المتجر',
    'stats.artisans': 'خياطون محترفون', 'stats.clients': 'زبائن أوفياء', 'stats.note': 'متوسط التقييم',
    'sec.servicesEyebrow': 'خدماتنا', 'sec.servicesTitleA': 'اللمسة الصحيحة،',
    'sec.servicesTitleB': 'بالسعر الصحيح.',
    'sec.servicesCopy': 'أسعار معلنة بالدينار، قابلة للتعديل في أي وقت من لوحة التحكم. تقدير مجاني في المحل.',
    'sec.boutiqueEyebrow': 'المتجر', 'sec.boutiqueTitleA': 'منتجات وأقمشة،',
    'sec.boutiqueTitleB': 'جاهزة للبس.',
    'sec.locEyebrow': 'عناويننا', 'sec.locTitleA': 'بابان،',
    'sec.locTitleB': 'وجودة واحدة.',
    'sec.craftEyebrow': 'الورشة', 'sec.journalEyebrow': 'المدونة',
    'btn.all': 'شاهد الكل', 'btn.book': 'احجز عبر واتساب', 'btn.call': 'اتصل', 'btn.quote': 'تقدير مجاني',
    'card.from': 'ابتداءً من', 'card.order': 'اطلب',
    'shop.eyebrow': 'المتجر', 'shop.titleA': 'منتجات',
    'shop.titleB': 'متوفرة.',
    'shop.search': 'ابحث…', 'shop.all': 'الكل', 'shop.pieces': 'منتج',
    'prod.delivery': 'استلام مجاني من المحل', 'prod.size': 'المقاس', 'prod.add': 'أضف إلى السلة', 'prod.added': '✓ تمت الإضافة!', 'prod.related': 'قد يعجبك',
    'prod.wa': 'اطلب عبر واتساب',
    'cart.title': 'سلة التسوق', 'cart.empty': 'سلتكم فارغة.', 'cart.emptySub': 'منتجات جميلة بانتظاركم.',
    'cart.shop': 'تصفح المتجر', 'cart.summary': 'الملخص', 'cart.subtotal': 'المجموع الفرعي', 'cart.pickup': 'استلام من المحل', 'cart.free': 'مجاني', 'cart.total': 'المجموع', 'cart.checkout': 'أتمم الطلب', 'cart.continue': 'مواصلة التسوق', 'cart.remove': 'احذف',
    'co.title': 'إتمام الطلب', 'co.contact': 'معلوماتكم', 'co.pickup': 'الاستلام', 'co.pay': 'الدفع عند الاستلام', 'co.name': 'الاسم الكامل', 'co.phone': 'الهاتف', 'co.city': 'البلدية', 'co.note': 'ملاحظة (المقاس، اللون…)', 'co.payBtn': 'تأكيد الطلب', 'co.done': 'شكراً! تم تأكيد الطلب.', 'co.doneSub': 'سنتصل بكم لتأكيد الاستلام.',
    'co.back': 'عودة للمتجر', 'co.cash': 'الدفع نقداً عند التسليم / الاستلام.',
    'contact.eyebrow': 'اتصل وتقدير', 'contact.titleA': 'زورونا،',
    'contact.titleB': 'والباقي علينا.',
    'contact.form': 'طلب تقدير سعر', 'contact.send': 'أرسل عبر واتساب', 'contact.name': 'اسمكم', 'contact.need': 'طلبكم (تقصير، بدلة…)',
    'contact.hours': 'السبت – الخميس · 9ص إلى 7م',
    'faq.titleA': 'أسئلة',
    'faq.titleB': 'شائعة.',
    'foot.tag': 'تعديل وخياطة وكيّ في وهران. عنوانان بمعيار واحد: الإتقان.',
    'foot.maison': 'الدار', 'foot.care': 'مساعدة', 'foot.follow': 'تابعونا', 'foot.rights': '© 2026 برستو وهران · جميع الحقوق محفوظة',
    'svc.titleA': 'الخدمات',
    'svc.titleB': 'والأسعار.',
    'svc.sub': 'الأسعار بالدينار الجزائري. تقدير مجاني في المحل أو عبر واتساب.',
    'svc.duration': 'المدة', 'svc.book': 'احجز',
    'about.titleA': 'دار وُلدت',
    'about.titleB': 'في وهران.',
    'col.titleA': 'أربعة أقسام،',
    'col.titleB': 'وهوس واحد.',
    'jour.titleA': 'حكايات',
    'jour.titleB': 'من الورشة.',
    'wish.titleA': 'منتجاتكم',
    'wish.titleB': 'المفضلة.',
    'login.titleA': 'مرحباً',
    'login.titleB': 'بعودتكم.',
    'admin.tarifs': 'الأسعار'
  }
};

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; ar: boolean };

const Ctx = createContext<LangCtx>({ lang: 'fr', setLang: () => {}, t: (k) => k, ar: false });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-ar', lang === 'ar');
  }, [lang]);
  const t = (k: string) => dict[lang][k] ?? dict.fr[k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t, ar: lang === 'ar' }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const pick = (lang: Lang, fr: string, ar: string) => (lang === 'ar' ? ar : fr);
