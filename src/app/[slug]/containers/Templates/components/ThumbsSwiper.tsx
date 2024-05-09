'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Thumbs } from 'swiper/modules';
import { Dispatch, SetStateAction, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  setThumbsSwiper: Dispatch<SetStateAction<any>>;
  navigations: StaticImageData[];
}

const ThumbsSwiper = ({ setThumbsSwiper, navigations }: Props) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const thumbTranslate = isMouseEnter
    ? 'translate-x-[0%]'
    : 'translate-x-[-105%]';

  return (
    <div
      className={`fixed top-0 left-0 w-[4%] h-full bg-transparent z-50`}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <Swiper
        onSwiper={setThumbsSwiper}
        speed={75}
        direction="vertical"
        slidesPerView={6}
        watchSlidesProgress={true}
        modules={[Thumbs, Mousewheel]}
        grabCursor
        mousewheel
        className={`w-[15%] ${thumbTranslate} bg-fff h-full animate-nav-hint-move transition-all ease duration-300`}
        style={{ position: 'fixed', top: '0', left: '0' }}
      >
        {navigations.map((template, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <Image src={template} alt={`${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsSwiper;
