import type { Metadata } from 'next';
import '@/styles/globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import FloatingFAB from '@/components/FloatingFAB';

export const metadata: Metadata = {
  title: 'Willonack · Natural Scent Aesthetics',
  description: 'Explore our diffuser and essential oil collection. Redefine your space and mind with scent. Bespoke fragrance solutions available.',
  keywords: 'aromatherapy diffuser, essential oil, scented candle, fragrance, bespoke scent, Willonack',
  openGraph: {
    title: 'Willonack · Natural Scent Aesthetics',
    description: 'Redefine your space with scent',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <FloatingFAB />
        </LanguageProvider>
      </body>
    </html>
  );
}
