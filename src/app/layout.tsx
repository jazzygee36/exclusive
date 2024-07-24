import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { AppProps } from 'next/app';
import { MyProvider } from '@/useContexts/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'exclusive',
  description: 'Your home for all appliance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MyProvider key={''}>
          <Header />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html>
  );
}
