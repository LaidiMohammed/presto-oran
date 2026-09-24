import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRESTO — Retouche, Couture & Repassage à Oran',
  description: 'PRESTO Oran : retouches express 24h, costumes sur mesure, repassage soigné. Centre-Ville 0661 200 829 · Akid-Lotfi 0661 597 598.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700;800&family=Cairo:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
