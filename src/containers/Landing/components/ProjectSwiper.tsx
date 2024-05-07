'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import CARDS from '@/constants/cards';

const ProjectSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      grabCursor={true}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="w-full h-full"
    >
      {CARDS.map(({ id, src, title, description }) => (
        <SwiperSlide key={id}>
          <ProjectCard src={src} title={title} description={description} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
