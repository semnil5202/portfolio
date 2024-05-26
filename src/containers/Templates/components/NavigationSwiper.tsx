'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Thumbs } from 'swiper/modules';
import { Dispatch, SetStateAction, TouchEventHandler, useState } from 'react';
import { StaticImageData } from 'next/image';
import SkeletonImage from '@/components/SkeletonImage';
import useSwipeNavigation from '@/hooks/useSwipeNavigation';

interface Props {
  setThumbsSwiper: Dispatch<SetStateAction<any>>;
  navigationImages: StaticImageData[];
}

const NavigationSwiper = ({ setThumbsSwiper, navigationImages }: Props) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const thumbTranslate = isMouseEnter
    ? 'translate-x-[0%]'
    : 'translate-x-[105%]';

  const { onTouchNavigation, onTouchEndNavigation } = useSwipeNavigation({
    setState: setIsMouseEnter,
  });

  return (
    <div
      className="fixed top-0 right-0 w-[2%] h-full bg-transparent z-50 md:w-[5%]"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      onTouchMove={onTouchNavigation}
      onTouchEnd={onTouchEndNavigation}
    >
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={75}
        direction="vertical"
        slidesPerView={6}
        watchSlidesProgress={true}
        modules={[Thumbs, Mousewheel]}
        mousewheel
        className={`w-[15%] ${thumbTranslate} bg-white h-full animate-nav-hint-move transition-all ease duration-300`}
        style={{ position: 'fixed', top: '0', right: '0' }}
      >
        {navigationImages.map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full relative cursor-pointer"
            onTouchMove={onTouchNavigation}
            onTouchEnd={onTouchEndNavigation}
          >
            <SkeletonImage
              image={image}
              alt={`${idx + 1}번째 슬라이드 이미지`}
              imageClassName="bg-gray-500"
            />
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white text-[12px] flex justify-center items-center">
              {idx + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NavigationSwiper;
