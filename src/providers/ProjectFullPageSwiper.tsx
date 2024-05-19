'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Thumbs } from 'swiper/modules';

import { ReactElement, useEffect, useState } from 'react';
import useStore from '@/store/store';
import { StaticImageData } from 'next/image';
import Background from '@/containers/Templates/Background';
import NavigationSwiper from '@/providers/NavigationSwiper';

interface Props {
  landingImage: StaticImageData;
  navigationImages: StaticImageData[];
  slideLength: number;
  children: ReactElement[];
}

const ProjectFullPageSwiper = ({
  landingImage,
  navigationImages,
  slideLength,
  children,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {
    projectCurrentPageIndex,
    setProjectCurrentPageIndex,
    resetProjectContentSwiperViewTime,
    resetProjectImageSwiperViewTime,
  } = useStore((state) => state);

  useEffect(() => {
    return () => {
      setProjectCurrentPageIndex(0);
      resetProjectContentSwiperViewTime();
      resetProjectImageSwiperViewTime();
    };
  }, [
    setProjectCurrentPageIndex,
    resetProjectContentSwiperViewTime,
    resetProjectImageSwiperViewTime,
  ]);

  return (
    <>
      <Background
        currentPageIndex={projectCurrentPageIndex}
        landingImage={landingImage}
        slideLength={slideLength}
      />
      <NavigationSwiper
        setThumbsSwiper={setThumbsSwiper}
        navigationImages={navigationImages}
      />
      <Swiper
        tag="section"
        speed={700}
        direction="vertical"
        pagination={{
          type: 'progressbar',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) =>
          setProjectCurrentPageIndex(swiper.activeIndex)
        }
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
        {children.map((page, idx) => (
          <SwiperSlide tag="article" className="overflow-hidden" key={idx}>
            {page}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectFullPageSwiper;
