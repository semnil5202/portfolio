'use client';

import STRENGTHS from '@/constants/strength';
import StrengthItem from './components/StrengthItem';
import { Swiper, SwiperSlide } from 'swiper/react';

const Strength = () => {
  return (
    <div className="w-[1140px] h-full mx-auto flex justify-between items-center lg:w-full lg:justify-around md:w-full md:justify-around">
      <article className="w-full h-[470px]">
        <Swiper slidesPerView={3} nested className="w-full h-full">
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
