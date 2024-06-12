'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Thumbs } from 'swiper/modules';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import useSwipeNavigation from '@/hooks/useSwipeNavigation';
import { StaticImageData } from 'next/image';
import NavBackground from '../NavBackground';

interface BackgroundProps {
  landingImage: StaticImageData;
  slideLength: number;
}

interface Props {
  backgroundProps: BackgroundProps;
  setThumbsSwiper: Dispatch<SetStateAction<any>>;
  children: ReactElement[];
}

const NavigationSwiper = ({
  backgroundProps,
  setThumbsSwiper,
  children,
}: Props) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(true);
  const thumbTranslate = isMouseEnter
    ? 'translate-x-[0%]'
    : 'translate-x-[105%]';

  const { onTouchNavigation, onTouchEndNavigation } = useSwipeNavigation({
    setState: setIsMouseEnter,
  });

  return (
    <div
      className="fixed top-0 right-0 w-[2%] h-full bg-transparent z-50 md:w-[8%]"
      // onMouseEnter={() => setIsMouseEnter(true)}
      // onMouseLeave={() => setIsMouseEnter(false)}
      onTouchMove={onTouchNavigation}
      onTouchEnd={onTouchEndNavigation}
    >
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={60}
        direction="vertical"
        slidesPerView={6}
        spaceBetween={20}
        watchSlidesProgress={true}
        modules={[Thumbs, Mousewheel]}
        mousewheel
        className={`w-[15%] ${thumbTranslate} bg-white h-full animate-nav-hint-move transition-all ease duration-300 md:w-[35%]`}
        style={{ position: 'fixed', top: '0', right: '0' }}
      >
        {children.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full relative cursor-pointer"
          >
            <NavBackground
              currentPageIndex={idx}
              landingImage={backgroundProps.landingImage}
              slideLength={backgroundProps.slideLength}
            />
            {slide}
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
