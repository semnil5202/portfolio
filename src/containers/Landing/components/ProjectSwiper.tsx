'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import ProjectCard from './ProjectCard';
import CARDS from '@/constants/cards';
import { useEffect, useState } from 'react';

interface Props {
  currentPageIndex: number;
}

const PROJECT_SLIDE_INDEX = 2;

const ProjectSwiper = ({ currentPageIndex }: Props) => {
  const [viewTime, setViewTime] = useState<number>(0);

  const isIntoView = currentPageIndex === PROJECT_SLIDE_INDEX;
  const isFirstView = viewTime === 1;

  useEffect(() => {
    if (!isIntoView) return;

    setViewTime((prev) => prev + 1);
  }, [isIntoView]);

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
      className="w-full h-full"
      style={{ '--swiper-pagination-color': '#ffffff' } as {}}
    >
      {CARDS.map(({ id, src, title, description, slug }) => (
        <SwiperSlide key={id}>
          <div
            className={`${
              isIntoView && isFirstView && 'animate-slide-image-hint-move'
            }`}
          >
            <ProjectCard
              src={src}
              title={title}
              description={description}
              slug={slug}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
