import type { Metadata } from 'next';
import { Roboto, Black_Han_Sans } from 'next/font/google';
import 'material-symbols';
import '../globals.css';
import Navigation from '@/components/common/navigation/Navigation';
import Footer from '@/components/common/footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
const black_han_sans = Black_Han_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-logo',
});

export const metadata: Metadata = {
  title: 'Kino',
  description: 'To jest aplikacja internetowa kina.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${black_han_sans.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
