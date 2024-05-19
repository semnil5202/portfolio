'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement[];
}

const StrengthSwiper = ({ children }: Props) => {
  return (
    <Swiper
      slidesPerView={3}
      breakpoints={{
        1: {
          slidesPerView: 1,
          direction: 'vertical',
        },
        768: {
          slidesPerView: 3,
          direction: 'horizontal',
        },
      }}
      modules={[Mousewheel]}
      speed={700}
      nested
      mousewheel
      className="w-full h-max flex md:h-full"
    >
      {children.map((child, idx) => (
        <SwiperSlide key={idx}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StrengthSwiper;
