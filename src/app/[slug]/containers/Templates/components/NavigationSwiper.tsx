'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Thumbs } from 'swiper/modules';
import { Dispatch, SetStateAction, TouchEventHandler, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  setThumbsSwiper: Dispatch<SetStateAction<any>>;
  navigations: StaticImageData[];
}

const NavigationSwiper = ({ setThumbsSwiper, navigations }: Props) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [prevTouch, setPrevTouch] = useState<React.Touch | null>(null);
  const thumbTranslate = isMouseEnter
    ? 'translate-x-[0%]'
    : 'translate-x-[-105%]';

  const onTouchNavigation: TouchEventHandler = (event) => {
    const touch = event.touches[0]!;

    setPrevTouch(touch);
    if (!prevTouch) return;

    const diff = touch.pageX - prevTouch.pageX;
    const otherDiff = touch.pageY - prevTouch.pageY;

    if (diff > 3 && Math.abs(otherDiff) < 3) setIsMouseEnter(true);
    if (diff < -3 && Math.abs(otherDiff) < 3) setIsMouseEnter(false);
  };

  const onTouchEndNavigation: TouchEventHandler = () => {
    setPrevTouch(null);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-[2%] h-full bg-transparent z-50 md:w-[5%]`}
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
        className={`w-[15%] ${thumbTranslate} bg-fff h-full animate-nav-hint-move transition-all ease duration-300`}
        style={{ position: 'fixed', top: '0', left: '0' }}
      >
        {navigations.map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full relative cursor-pointer"
            onTouchMove={onTouchNavigation}
            onTouchEnd={onTouchEndNavigation}
          >
            <Image
              src={image}
              alt={`${idx + 1}`}
              loading="lazy"
              className="animate-skeleton"
            />
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-fff text-[12px] flex justify-center items-center">
              {idx + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NavigationSwiper;
