export type Service = {
  id: string;
  fr: string;
  ar: string;
  price: number;
  duration: string;
  image: string;
};

export type Product = {
  id: string;
  fr: string;
  ar: string;
  categoryFr: string;
  categoryAr: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  colors: string[];
  descFr: string;
  descAr: string;
};

export const INFO = {
  name: 'PRESTO',
  city: 'Oran, Algérie',
  email: 'zoulimmez@gmail.com',
  instagram: 'https://www.instagram.com/presto.dz',
  tel1: '0661 200 829',
  tel2: '0661 597 598',
  wa1: 'https://wa.me/213661200829',
  wa2: 'https://wa.me/213661597598',
  addr1: 'Centre-Ville, Oran',
  addr2: 'Akid-Lotfi, Oran'
};

export const ORAN = {
  hero: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Pasha_mosque_Oran.jpg',
  fort: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Fort_Santa_Cruz%2C_Oran_2013.jpg',
  pano: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Oran_train_station%2C_Boumlik_Messaili%2C_29-07-2008.jpg',
  chapel: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Oran_train_station%2C_Boumlik_Messaili%2C_29-07-2008.jpg',
  theatre: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Regional_Theatre_of_Oran_1.jpg',
  minaret: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Minaret_of_the_Hassan_Pasha_Mosque_in_Oran.jpg',
  mosque: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Pasha_mosque_Oran.jpg',
  bay: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Vue_sur_Oran_-_Chapelle_de_Santa-Cruz.jpg',
  gare: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Oran_train_station%2C_Boumlik_Messaili%2C_29-07-2008.jpg'
};

export const SHOP = {
  hero: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1920&auto=format&fit=crop',
  atelier: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop',
  rack: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1920&auto=format&fit=crop',
  cta: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop',
  tailor: 'https://images.unsplash.com/photo-1593032465175-84a2a3c1aaa7?q=80&w=1200&auto=format&fit=crop'
};

export const VIDEOS = {
  hero: 'https://videos.pexels.com/video-files/7677252/7677252-hd_1920_1080_25fps.mp4',
  atelier: 'https://videos.pexels.com/video-files/6060027/6060027-hd_1920_1080_25fps.mp4',
  campaign: 'https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4',
  runway: 'https://videos.pexels.com/video-files/7677253/7677253-hd_1920_1080_25fps.mp4'
};

const SEW = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop';

export const SERVICES: Service[] = [
  { id: 'ourlet-pantalon', fr: 'Ourlet pantalon', ar: 'تقصير السروال', price: 400, duration: '24h', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=900&auto=format&fit=crop' },
  { id: 'fermeture-eclair', fr: 'Fermeture éclair', ar: 'سحّاب', price: 800, duration: '24–48h', image: SEW },
  { id: 'retouche-taille', fr: 'Retouche taille', ar: 'تعديل الخصر', price: 600, duration: '24h', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900&auto=format&fit=crop' },
  { id: 'veste-ajust', fr: 'Ajustement veste / costume', ar: 'تعديل السترة', price: 1500, duration: '48h', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop' },
  { id: 'robe-soiree', fr: 'Retouche robe de soirée', ar: 'تعديل فستان سهرة', price: 1200, duration: '48h', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=900&auto=format&fit=crop' },
  { id: 'repassage-costume', fr: 'Repassage costume complet', ar: 'كيّ بدلة كاملة', price: 500, duration: 'Jour même', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop' },
  { id: 'repassage-chemise', fr: 'Repassage chemise', ar: 'كيّ قميص', price: 200, duration: 'Jour même', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop' },
  { id: 'chemise-mesure', fr: 'Chemise sur mesure', ar: 'قميص حسب المقاس', price: 4500, duration: '7 jours', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop' },
  { id: 'costume-mesure', fr: 'Costume sur mesure', ar: 'بدلة حسب المقاس', price: 24000, duration: '14 jours', image: 'https://images.unsplash.com/photo-1594938374182-a56908d3f4ee?q=80&w=900&auto=format&fit=crop' },
  { id: 'broderie', fr: 'Broderie initiales', ar: 'تطريز الأحرف', price: 600, duration: '48h', image: SEW }
];

export const PRODUCTS: Product[] = [
  { id: 'costume-presto', fr: 'Costume Prestige', ar: 'بدلة برستيج', categoryFr: 'Sur mesure', categoryAr: 'حسب المقاس', price: 24500, oldPrice: 28000, rating: 4.9, reviews: 86, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop', tag: 'Signature', colors: ['#0a0a0b', '#2a2a3a'], descFr: 'Costume deux-pièces coupé à Oran, toile demi-mesure, finitions main.', descAr: 'بدلة من خياطة وهران، تشطيبات يدوية.' },
  { id: 'robe-soiree-nuit', fr: 'Robe de soirée Nuit d’Oran', ar: 'فستان سهرة ليل وهران', categoryFr: 'Couture', categoryAr: 'خياطة', price: 15900, rating: 4.8, reviews: 64, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=900&auto=format&fit=crop', tag: 'Nouveau', colors: ['#0a0a0b', '#c9a24b'], descFr: 'Satin drapé main, corsage structuré, pièce numérotée.', descAr: 'ساتان مطوي يدوياً، قطعة مرقّمة.' },
  { id: 'qamis-brodi', fr: 'Qamis brodé', ar: 'قميص مطرّز', categoryFr: 'Traditionnel', categoryAr: 'تقليدي', price: 6800, rating: 4.9, reviews: 112, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop', colors: ['#f5f0e8', '#0a0a0b'], descFr: 'Qamis coton premium, broderie col et poignets.', descAr: 'قميص قطن فاخر بتطريز.' },
  { id: 'chemise-blanche', fr: 'Chemise blanche Oran', ar: 'قميص أبيض', categoryFr: 'Sur mesure', categoryAr: 'حسب المقاس', price: 4500, oldPrice: 5200, rating: 4.7, reviews: 58, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop', tag: '-13%', colors: ['#f5f0e8'], descFr: 'Popeline double retors, col coupe italienne.', descAr: 'قطن ممتاز، ياقة إيطالية.' },
  { id: 'tissu-premium', fr: 'Tissu premium (mètre)', ar: 'قماش فاخر (للمتر)', categoryFr: 'Tissus', categoryAr: 'أقمشة', price: 1800, rating: 4.8, reviews: 143, image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=900&auto=format&fit=crop', colors: ['#1a2a5b', '#5b1a1a', '#0a0a0b'], descFr: 'Lainage italien et soieries au mètre, conseils offerts.', descAr: 'أقمشة إيطالية بالمتر مع استشارة.' },
  { id: 'foulard-soie', fr: 'Foulard soie', ar: 'وشاح حريري', categoryFr: 'Accessoires', categoryAr: 'إكسسوارات', price: 2400, rating: 4.9, reviews: 97, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=900&auto=format&fit=crop', colors: ['#1a2a5b', '#c9a24b'], descFr: 'Soie de mûrier 90cm, roulottage main.', descAr: 'حرير طبيعي 90 سم.' },
  { id: 'jupe-plissee', fr: 'Jupe plissée soleil', ar: 'تنورة بكسرات', categoryFr: 'Couture', categoryAr: 'خياطة', price: 5900, rating: 4.7, reviews: 41, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d44?q=80&w=900&auto=format&fit=crop', colors: ['#0a0a0b', '#3b2a1a'], descFr: 'Plissé main, taille élastiquée invisible.', descAr: 'كسرات يدوية.' },
  { id: 'ensemble-enfant', fr: 'Ensemble enfant Aid', ar: 'لباس أطفال للعيد', categoryFr: 'Enfants', categoryAr: 'أطفال', price: 3900, rating: 5.0, reviews: 73, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=900&auto=format&fit=crop', tag: 'Aid', colors: ['#f5f0e8', '#1a2a5b'], descFr: 'Ensemble 3 pièces pour enfants, du 2 au 12 ans.', descAr: 'طقم 3 قطع للأطفال.' }
];

export const COLLECTIONS = [
  { slug: 'retouche', fr: 'Retouche Express', ar: 'تعديل سريع', pieces: 12, image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1200&auto=format&fit=crop', descFr: 'Ourlets, fermetures, ajustements en 24h', descAr: 'تقصير وتعديلات خلال 24 ساعة' },
  { slug: 'mesure', fr: 'Sur Mesure', ar: 'حسب المقاس', pieces: 18, image: 'https://images.unsplash.com/photo-1594938374182-a56908d3f4ee?q=80&w=1200&auto=format&fit=crop', descFr: 'Costumes, chemises et robes uniques', descAr: 'بدلات وقمصان وفساتين فريدة' },
  { slug: 'repassage', fr: 'Repassage & Soin', ar: 'الكيّ والعناية', pieces: 8, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop', descFr: 'Pressing délicat, jour même', descAr: 'كيّ دقيق في نفس اليوم' },
  { slug: 'boutique', fr: 'Boutique', ar: 'المتجر', pieces: 16, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop', descFr: 'Articles et tissus disponibles', descAr: 'منتجات وأقمشة متوفرة' }
];

export const POSTS = [
  { slug: 'retouches-aid', fr: 'Préparez l’Aïd : retouches en 24h', ar: 'استعدوا للعيد: تعديلات خلال 24 ساعة', categoryFr: 'Conseils', categoryAr: 'نصائح', date: 'Sep 12, 2026', read: '4 min', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop', exFr: 'Affluence des fêtes : déposez tôt, repartez impeccable.', exAr: 'زحمة الأعياد: اتركوا ملابسكم مبكراً واستلموها مثالية.' },
  { slug: 'costume-mariage', fr: 'Costume de marié : le guide Oranais', ar: 'بدلة العريس: الدليل الوهراني', categoryFr: 'Mariage', categoryAr: 'زفاف', date: 'Aug 28, 2026', read: '6 min', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop', exFr: 'Trois essayages, une coupe parfaite pour le grand jour.', exAr: 'ثلاث تجارب وقصّة مثالية ليومكم الكبير.' },
  { slug: 'tissus-ete', fr: 'Quels tissus pour l’été Oranais ?', ar: 'أي أقمشة لصيف وهران؟', categoryFr: 'Tissus', categoryAr: 'أقمشة', date: 'Aug 10, 2026', read: '5 min', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1200&auto=format&fit=crop', exFr: 'Lin, coton et popeline contre la chaleur du front de mer.', exAr: 'كتان وقطن ضد حرارة الواجهة البحرية.' },
  { slug: 'akid-lotfi', fr: 'Nouveau : PRESTO Akid-Lotfi', ar: 'جديد: برستو عكيد لطفي', categoryFr: 'Maison', categoryAr: 'الدار', date: 'Jul 22, 2026', read: '3 min', image: ORAN.fort, exFr: 'Deuxième adresse, même exigence : 0661 597 598.', exAr: 'عنوان ثانٍ بنفس الجودة: 0661 597 598.' }
];

export const ORDERS = [
  { id: '#PS-90412', customer: 'Amine Benali', avatar: 'https://i.pravatar.cc/100?img=12', product: 'Costume sur mesure', date: 'Sep 20, 2026', total: 24500, status: 'Delivered', pay: 'Espèces' },
  { id: '#PS-90411', customer: 'Yasmine Kaci', avatar: 'https://i.pravatar.cc/100?img=32', product: 'Robe de soirée + ourlet', date: 'Sep 20, 2026', total: 17100, status: 'Shipped', pay: 'CCP' },
  { id: '#PS-90409', customer: 'Mohamed Cherif', avatar: 'https://i.pravatar.cc/100?img=53', product: '3 chemises sur mesure', date: 'Sep 19, 2026', total: 13500, status: 'Processing', pay: 'Espèces' },
  { id: '#PS-90407', customer: 'Lina Boumediene', avatar: 'https://i.pravatar.cc/100?img=45', product: 'Qamis brodé ×2', date: 'Sep 19, 2026', total: 13600, status: 'Delivered', pay: 'BaridiMob' },
  { id: '#PS-90402', customer: 'Karim Ziani', avatar: 'https://i.pravatar.cc/100?img=59', product: 'Repassage costume', date: 'Sep 18, 2026', total: 500, status: 'Refunded', pay: 'Espèces' },
  { id: '#PS-90398', customer: 'Sara Haddad', avatar: 'https://i.pravatar.cc/100?img=26', product: 'Jupe plissée', date: 'Sep 18, 2026', total: 5900, status: 'Shipped', pay: 'CCP' },
  { id: '#PS-90395', customer: 'Nour Elhouda', avatar: 'https://i.pravatar.cc/100?img=41', product: 'Ensemble enfant ×2', date: 'Sep 17, 2026', total: 7800, status: 'Delivered', pay: 'BaridiMob' }
];

export const REVENUE = [
  { m: 'Mar', revenue: 182, orders: 410 }, { m: 'Apr', revenue: 214, orders: 480 },
  { m: 'May', revenue: 248, orders: 560 }, { m: 'Jun', revenue: 231, orders: 520 },
  { m: 'Jul', revenue: 289, orders: 640 }, { m: 'Aug', revenue: 342, orders: 740 },
  { m: 'Sep', revenue: 398, orders: 861 }
];

export const money = (n: number) =>
  n.toLocaleString('en-US').replace(/,/g, ' ') + ' DA';
