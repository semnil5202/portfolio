'use client';

import STRENGTHS from '@/constants/strength';
import StrengthItem from './components/StrengthItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

const Strength = () => {
  return (
    <div className="w-[1140px] h-full mx-auto lg:w-full md:w-full md:justify-around">
      <article className="w-full h-full flex justify-center items-center">
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
          {STRENGTHS.map((strength) => (
            <SwiperSlide key={strength.id}>
              <StrengthItem {...strength} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </div>
  );
};

export default Strength;
