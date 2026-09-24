import { CartProvider } from '@/components/store';
import { LangProvider } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <CartProvider>
        <Navbar />
        <main className="min-h-screen pt-[86px] sm:pt-[104px]">{children}</main>
        <Footer />
      </CartProvider>
    </LangProvider>
  );
}
