'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Thumbs } from 'swiper/modules';

import { ReactElement, useEffect, useState } from 'react';
import useStore from '@/store/store';
import { StaticImageData } from 'next/image';
import Background from '@/containers/Templates/Background';
import NavigationSwiper from '@/containers/Navigations/components/NavigationSwiper';

interface Props {
  landingImage: StaticImageData;
  slideLength: number;
  navigations: ReactElement[];
  projects: ReactElement[];
}

const ProjectFullPageSwiper = ({
  landingImage,
  navigations,
  slideLength,
  projects,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {
    projectCurrentPageIndex,
    setProjectCurrentPageIndex,
    resetProjectContentSwiperViewTime,
    resetProjectImageSwiperViewTime,
    setProjectTextToggle,
  } = useStore((state) => state);

  useEffect(() => {
    return () => {
      setProjectCurrentPageIndex(0);
      resetProjectContentSwiperViewTime();
      resetProjectImageSwiperViewTime();
      setProjectTextToggle(false);
    };
  }, [
    setProjectCurrentPageIndex,
    resetProjectContentSwiperViewTime,
    resetProjectImageSwiperViewTime,
    setProjectTextToggle,
  ]);

  return (
    <>
      <Background
        currentPageIndex={projectCurrentPageIndex}
        landingImage={landingImage}
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
        {projects.map((page, idx) => (
          <SwiperSlide tag="article" className="overflow-hidden" key={idx}>
            {page}
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationSwiper
        backgroundProps={{
          landingImage,
          slideLength,
        }}
        setThumbsSwiper={setThumbsSwiper}
      >
        {navigations}
      </NavigationSwiper>
    </>
  );
};

export default ProjectFullPageSwiper;
