import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Cesar Gomez',
  description: 'cesar gomez website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${GeistSans.variable} ${roboto_slab.variable} max-w-[90rem] mx-auto px-5 bg-neutral-50 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400 transition-colors duration-200 ease-in-out`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
