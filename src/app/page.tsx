'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import Background from '@/containers/Landing/Background';
import LandingMain from '@/containers/Landing/LandingMain';
import Strength from '@/containers/Landing/Strength';
import Projects from '@/containers/Landing/Projects';

let pageIndexBeforeRouting = 0;

export default function Home() {
  const [swiper, setSwiper] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(
    pageIndexBeforeRouting
  );

  useEffect(() => {
    if (!swiper) return;

    const swiperInstance = swiper as { slideTo: (index: number) => void };

    swiperInstance.slideTo(pageIndexBeforeRouting);
  }, [swiper]);

  return (
    <main className="w-screen h-dvh">
      <Background currentPageIndex={currentPageIndex} />
      <Swiper
        onSwiper={setSwiper as () => void}
        tag="section"
        speed={700}
        direction="vertical"
        onSlideChange={(swiper) => {
          setCurrentPageIndex(swiper.activeIndex);
          pageIndexBeforeRouting = swiper.activeIndex;
        }}
        modules={[Mousewheel, Zoom]}
        mousewheel
        className="h-full"
      >
        <SwiperSlide tag="article" className="overflow-hidden">
          <LandingMain />
        </SwiperSlide>
        <SwiperSlide tag="article" className="overflow-hidden">
          <Strength />
        </SwiperSlide>
        <SwiperSlide tag="article" className="overflow-hidden">
          <Projects currentPageIndex={currentPageIndex} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
