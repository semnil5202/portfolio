'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Thumbs } from 'swiper/modules';

import { useState } from 'react';
import Background from './containers/Background';
import DETAILS, { DETAIL_LANDING, DETAIL_NAV } from '@/constants/details';
import TranslateTemplate from './containers/TranslateTemplate';
import { SlugType } from './types';
import ThumbsSwiper from './containers/Templates/components/ThumbsSwiper';

const ProjectDetail = ({ params }: { params: { slug: SlugType } }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const landingImage = DETAIL_LANDING[params.slug];
  const slideLength = DETAILS[params.slug].length;
  const navigations = DETAIL_NAV[params.slug];

  return (
    <main className="relative w-screen h-dvh">
      <Background
        currentPageIndex={currentPageIndex}
        landing={landingImage}
        slideLength={slideLength}
      />
      <Swiper
        tag="section"
        speed={700}
        direction="vertical"
        pagination={{
          type: 'progressbar',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setCurrentPageIndex(swiper.activeIndex)}
        modules={[Mousewheel, Pagination, Thumbs]}
        mousewheel
        className="h-full"
        style={
          {
            '--swiper-pagination-color': '#ffffff',
            '--swiper-pagination-progressbar-size': '6px',
          } as {}
        }
      >
        {DETAILS[params.slug].map((slide) => (
          <SwiperSlide key={slide.id} className="overflow-hidden">
            <TranslateTemplate slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ThumbsSwiper
        setThumbsSwiper={setThumbsSwiper}
        navigations={navigations}
      />
    </main>
  );
};

export default ProjectDetail;
