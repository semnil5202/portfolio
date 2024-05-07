import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'se-een.dev',
  description: '프론트엔드 개발자 이세민의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
