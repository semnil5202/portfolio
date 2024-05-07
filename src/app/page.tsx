'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useState } from 'react';
import Background from '@/containers/Landing/Background';
import LandingMain from '@/containers/Landing/LandingMain';
import Strength from '@/containers/Landing/Strength';
import Projects from '@/containers/Landing/Projects';

export default function Home() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  return (
    <main className="w-screen h-dvh">
      <Background currentPageIndex={currentPageIndex} />
      <Swiper
        tag="section"
        speed={700}
        direction="vertical"
        onSlideChange={(swiper) => setCurrentPageIndex(swiper.activeIndex)}
        modules={[Mousewheel]}
        mousewheel
        className="h-full"
      >
        <SwiperSlide tag="article">
          <LandingMain />
        </SwiperSlide>
        <SwiperSlide tag="article">
          <Strength />
        </SwiperSlide>
        <SwiperSlide tag="article">
          <Projects />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
