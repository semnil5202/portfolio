'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import ProjectCard from './ProjectCard';
import CARDS from '@/constants/cards';

const ProjectSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      modules={[Pagination, Mousewheel]}
      pagination={{
        clickable: true,
      }}
      mousewheel
      grabCursor
      nested
      loop
      className="w-full h-full"
      style={{ '--swiper-pagination-color': '#ffffff' } as {}}
    >
      {CARDS.map(({ id, src, title, description, slug }) => (
        <SwiperSlide key={id}>
          <ProjectCard
            src={src}
            title={title}
            description={description}
            slug={slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
