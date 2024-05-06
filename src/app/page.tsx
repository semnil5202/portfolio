'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import Background from '@/containers/Landing/Background';
import LandingMain from '@/containers/Landing/LandingMain';

export default function Home() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  return (
    <main className="w-screen h-dvh">
      <Background currentPageIndex={currentPageIndex} />
      <Swiper
        tag="section"
        speed={700}
        direction="vertical"
        mousewheel={true}
        onSlideChange={(swiper) => setCurrentPageIndex(swiper.activeIndex)}
        modules={[Mousewheel]}
        className="h-full"
      >
        <SwiperSlide tag="article">
          <LandingMain />
        </SwiperSlide>
        <SwiperSlide tag="article">Slide 2</SwiperSlide>
        <SwiperSlide tag="article">Slide 3</SwiperSlide>
      </Swiper>
      <div className="flex">hello</div>
    </main>
  );
}
