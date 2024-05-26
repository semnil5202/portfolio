'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import { ReactElement, useEffect, useState } from 'react';
import Background from '@/containers/Landing/Background';
import useStore from '@/store/store';

interface Props {
  children: ReactElement[];
}

const MainFullPageSwiper = ({ children }: Props) => {
  const [swiper, setSwiper] = useState(null);
  const { mainCurrentPageIndex, setMainCurrentPageIndex } = useStore(
    (state) => state,
  );

  useEffect(() => {
    if (!swiper) return;

    const swiperInstance = swiper as { slideTo: (index: number) => void };

    swiperInstance.slideTo(mainCurrentPageIndex);
  }, [swiper, mainCurrentPageIndex]);

  return (
    <>
      <Background currentPageIndex={mainCurrentPageIndex} />
      <Swiper
        onSwiper={setSwiper as () => void}
        tag="section"
        speed={700}
        direction="vertical"
        onSlideChange={(swiper) => {
          setMainCurrentPageIndex(swiper.activeIndex);
        }}
        modules={[Mousewheel]}
        mousewheel
        className="h-full"
      >
        {children.map((page, idx) => (
          <SwiperSlide tag="article" className="overflow-hidden" key={idx}>
            {page}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainFullPageSwiper;
