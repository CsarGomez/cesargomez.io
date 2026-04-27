import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Lustria } from 'next/font/google';
import '@/app/styles/globals.css';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { Providers } from '@/app/providers/ThemeProvider';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque-next',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter-next',
  subsets: ['latin'],
});

const lustria = Lustria({
  variable: '--font-lustria-next',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Cesar Gomez',
  description: 'Cesar Gomez website powered with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${bricolageGrotesque.variable} ${inter.variable} ${lustria.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col justify-between bg-white text-black dark:bg-black dark:text-white font-inter'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
