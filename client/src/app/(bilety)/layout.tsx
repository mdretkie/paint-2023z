import type { Metadata } from 'next';
import { Roboto, Black_Han_Sans } from 'next/font/google';
import 'material-symbols';
import '../globals.css';
import { FormProvider } from '@/components/providers/FormContext';

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
  title: 'Formularz Kupowania Biletów',
  description: 'To jest formularz kupowania biletów dla aplikacji kina.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${black_han_sans.variable} bg-zinc-900 h-full`}
      >
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
