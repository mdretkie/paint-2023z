import type { Metadata } from 'next';
import { Roboto, Russo_One } from 'next/font/google';
import 'material-symbols';
import '../globals.css';
import Navigation from '@/components/common/navigation/Navigation';
import Footer from '@/components/common/footer/Footer';
import { AuthProvider } from '@/components/providers/AuthContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
const black_han_sans = Russo_One({
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
      <body
        className={`${roboto.className} ${black_han_sans.variable} h-[100dvh] bg-zinc-900 flex flex-col`}
      >
        <AuthProvider>
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
