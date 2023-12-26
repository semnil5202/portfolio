import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/layouts/NavBar';
import { Footer } from '@/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Semin Lee's Portfolio",
  description: "FE Developer Semin Lee's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
