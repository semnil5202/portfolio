'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { ReactElement, useEffect, useState } from 'react';
import useCurrentPageIndexStore from '@/store/currentPageIndex';

interface Props {
  children: ReactElement[];
}

const PROJECT_SLIDE_INDEX = 2;

const ProjectSwiper = ({ children }: Props) => {
  const [viewTime, setViewTime] = useState<number>(0);
  const {
    mainCurrentPageIndex,
    mainProjectSwiperViewTime,
    increaseMainProjectSwiperViewTime,
  } = useCurrentPageIndexStore((state) => state);

  const isIntoView = mainCurrentPageIndex === PROJECT_SLIDE_INDEX;
  const isFirstView = viewTime === 1 && mainProjectSwiperViewTime === 1;

  useEffect(() => {
    if (!isIntoView) return;

    increaseMainProjectSwiperViewTime(1);
    setViewTime((prev) => prev + 1);
  }, [isIntoView, increaseMainProjectSwiperViewTime]);

  return (
    <Swiper
      slidesPerView={4}
      breakpoints={{
        1: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1140: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      grabCursor
      className="w-full h-full"
      style={{ '--swiper-pagination-color': '#ffffff' } as {}}
    >
      {children.map((projectCard, idx) => (
        <SwiperSlide key={idx}>
          <div
            className={`${
              isIntoView && isFirstView && 'animate-slide-image-hint-move'
            }`}
          >
            {projectCard}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
