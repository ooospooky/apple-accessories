import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { CartProviders } from '@/xstate/provider';

import { Footer } from './components/Footer';
import Navbar from './components/Navbar';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apple Accessories  - Apple(台灣)',
  description: 'Apple accessories store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/apple_logo_icon.ico" type="image/x-icon" sizes="any" />
      <body className={roboto.className}>
        <CartProviders>
          <Navbar />
          {children}
        </CartProviders>
        <Footer />
      </body>
    </html>
  );
}
