'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import {
  Children,
  ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react';
import Background from '@/containers/Landing/Background';

interface Props {
  children: ReactElement[];
}

let pageIndexBeforeRouting = 0;

const MainFullPageSwiper = ({ children }: Props) => {
  const [swiper, setSwiper] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(
    pageIndexBeforeRouting
  );

  const pages = Children.map(children, (child) =>
    cloneElement(child, { currentpageindex: currentPageIndex })
  );

  console.log(pages);

  useEffect(() => {
    if (!swiper) return;

    const swiperInstance = swiper as { slideTo: (index: number) => void };

    swiperInstance.slideTo(pageIndexBeforeRouting);
  }, [swiper]);

  return (
    <>
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
        modules={[Mousewheel]}
        mousewheel
        className="h-full"
      >
        {pages.map((page, idx) => (
          <SwiperSlide tag="article" className="overflow-hidden" key={idx}>
            {page}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainFullPageSwiper;
