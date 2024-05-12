import localFont from 'next/font/local';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import AlertRotateMobile from './[slug]/containers/Templates/components/AlertRotateMobile';
import AlertNewTabMobile from './[slug]/containers/Templates/components/AlertNewTabMobile';

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
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <AlertRotateMobile />
        <AlertNewTabMobile />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
