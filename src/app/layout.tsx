import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import AlertMobile from './[slug]/containers/Templates/components/AlertMobile';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

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
      <body className={pretendard.className}>
        {children}
        <AlertMobile />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
