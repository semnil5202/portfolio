'use client';

import ListItem from '@/components/ListItem';
import useStore from '@/store/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  contents: {
    heading: string;
    descriptions: string[];
  }[];
  link?: {
    heading: string;
    name: string;
    href: string;
  };
  slideIndex: number;
}

const ActivitySwiperContents = ({ contents, link, slideIndex }: Props) => {
  const {
    projectContentSwiperViewTime,
    projectCurrentPageIndex,
    increaseProjectContentSwiperViewTime,
  } = useStore((state) => state);

  const isIntoView = projectCurrentPageIndex === slideIndex;
  const isFirstView = projectContentSwiperViewTime === 1;

  useEffect(() => {
    if (!isIntoView || innerWidth > 767) return;

    increaseProjectContentSwiperViewTime(1);
  }, [isIntoView, increaseProjectContentSwiperViewTime]);

  return (
    <Swiper
      slidesPerView={contents.length}
      breakpoints={{
        1: {
          slidesPerView: 1,
          direction: 'horizontal',
          spaceBetween: 20,
        },
        768: {
          slidesPerView: link ? contents.length + 1 : contents.length,
          direction: 'vertical',
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      grabCursor
      className="w-full h-swiper-max md:max-w-[420px]"
      style={
        { '--swiper-pagination-color': '#ffffff', paddingBottom: 40 } as {}
      }
    >
      {contents.map(({ heading, descriptions }) => (
        <SwiperSlide
          tag="ul"
          key={heading}
          className={`h-swiper-min mb-4 last:mb-0 lg:mb-2 md:h-swiper-full md:mb-2 ${
            isIntoView && isFirstView && 'md:animate-slide-image-hint-move'
          }`}
        >
          <p className="text-lg text-white font-semibold mb-2 md:text-[14px] md:leading-snug md:font-medium">
            {heading}
          </p>
          {descriptions.map((description) => (
            <ListItem
              key={description}
              textColor="text-white"
              bgColor="bg-white"
              mb="mb-2 lg:mb-1 md:mb-1"
              weight="extralight"
              mediaText="md:text-[12px]"
              mediaBullet="md:min-w-[2px] md:min-h-[2px] md:mt-[8px]"
            >
              {description}
            </ListItem>
          ))}
        </SwiperSlide>
      ))}
      {link && (
        <SwiperSlide
          tag="ul"
          className="h-swiper-min mb-4 last:mb-0 lg:mb-2 md:h-swiper-full md:mb-2"
        >
          <p className="text-lg text-white font-semibold mb-2 md:text-[14px] md:leading-snug md:font-medium">
            {link.heading}
          </p>
          <ListItem
            bgColor="bg-white"
            mb="mb-2 lg:mb-1 md:mb-0"
            weight="extralight"
            mediaText="md:text-[12px]"
            mediaBullet="md:min-w-[2px] md:min-h-[2px] md:mt-[8px]"
          >
            <Link
              href={link.href}
              target="_blank"
              className="underline underline-offset-4 text-link hover:text-white"
            >
              {link.name}
            </Link>
          </ListItem>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default ActivitySwiperContents;
