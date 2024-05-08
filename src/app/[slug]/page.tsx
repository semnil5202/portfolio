'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import { useState } from 'react';
import Background from './containers/Background';
import DETAILS, { DETAIL_LANDING } from '@/constants/details';
import TranslateTemplate from './containers/TranslateTemplate';
import { SlugType } from './types';

const ProjectDetail = ({ params }: { params: { slug: SlugType } }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const landingImage = DETAIL_LANDING[params.slug];

  return (
    <main className="w-screen h-dvh">
      <Background currentPageIndex={currentPageIndex} landing={landingImage} />
      <Swiper
        tag="section"
        speed={700}
        direction="vertical"
        pagination={{
          type: 'progressbar',
        }}
        onSlideChange={(swiper) => setCurrentPageIndex(swiper.activeIndex)}
        modules={[Mousewheel, Pagination]}
        mousewheel
        className="h-full"
      >
        {DETAILS[params.slug].map((slide, idx) => (
          <SwiperSlide key={idx} className="overflow-hidden">
            <TranslateTemplate slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ProjectDetail;
