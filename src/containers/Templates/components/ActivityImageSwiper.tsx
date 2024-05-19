'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { StaticImageData } from 'next/image';
import SkeletonImage from '@/components/SkeletonImage';
import { useEffect, useState } from 'react';
import useStore from '@/store/store';

interface Props {
  heading: string;
  slideIndex: number;
  images: StaticImageData[];
}

const ActivityImageSwiper = ({ images, heading, slideIndex }: Props) => {
  const {
    projectCurrentPageIndex,
    projectImageSwiperViewTime,
    increaseProjectImageSwiperViewTime,
  } = useStore((state) => state);

  const isIntoView = projectCurrentPageIndex === slideIndex;
  const isFirstView = projectImageSwiperViewTime === 1;

  useEffect(() => {
    if (!isIntoView) return;

    increaseProjectImageSwiperViewTime(1);
  }, [isIntoView, increaseProjectImageSwiperViewTime]);

  return (
    <Swiper
      speed={700}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      grabCursor
      className="w-full h-max"
      style={{ '--swiper-pagination-color': '#191F1E' } as {}}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <SkeletonImage
            image={image}
            alt={`${heading} ${idx + 1}번째 이미지`}
            imageClassName="bg-gray-500"
            containerClassName={`rounded-lg overflow-hidden ${
              isIntoView && isFirstView && 'animate-slide-image-hint-move'
            }`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ActivityImageSwiper;
