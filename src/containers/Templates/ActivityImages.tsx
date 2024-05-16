'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import TemplateLayout from './components/TemplateLayout';
import ListItem from '@/components/ListItem';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ActivityContents from './components/ActivityContents';

interface Props {
  heading: string;
  subHeading?: string;
  images: StaticImageData[];
  contents: {
    heading: string;
    descriptions: string[];
  }[];
  link?: {
    heading: string;
    name: string;
    href: string;
  };
  currentPageIndex: number;
  slideIndex: number;
}

const ActivityImages = ({
  heading,
  subHeading,
  images,
  contents,
  link,
  currentPageIndex,
  slideIndex,
}: Props) => {
  const [viewTime, setViewTime] = useState<number>(0);

  const isIntoView = currentPageIndex === slideIndex;
  const isFirstView = viewTime === 1;

  useEffect(() => {
    if (!isIntoView) return;

    setViewTime((prev) => prev + 1);
  }, [isIntoView]);

  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full max-w-[1140px] h-[74%] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:h-[84%] md:pt-[1.2vw]">
        <div className="w-[50%] h-full md:w-[37%]">
          <div className="w-full h-full flex transition-all ease duration-400 hover:scale-125 hover:translate-y-14 md:rounded-md md:hover:translate-x-[5vw] md:hover:translate-y-[-0.5vw]">
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
                  <div
                    className={`rounded-lg overflow-hidden ${
                      isIntoView &&
                      isFirstView &&
                      'animate-slide-image-hint-move'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${heading} ${idx + 1}번째 이미지`}
                      loading="lazy"
                      className="animate-pulse bg-gray-500"
                      onLoad={(e) =>
                        e.currentTarget.classList.remove('animate-pulse')
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 lg:pl-6 md:pl-[2vw] md:w-[63%]">
          <ActivityContents contents={contents} link={link} />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityImages;
