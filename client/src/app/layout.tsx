import type { Metadata } from 'next';
import { Inter, Black_Han_Sans } from 'next/font/google';
import 'material-symbols';
import './globals.css';
import Navigation from '@/components/common/Navigation';

const inter = Inter({ subsets: ['latin'] });
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
      <body className={`${inter.className} ${black_han_sans.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
