'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import TemplateLayout from './components/TemplateLayout';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import ActivityContents from './components/ActivityContents';
import ActivitySwiperContents from './components/ActivitySwiperContents';

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
      <div className="w-full max-w-[1140px] h-[74%] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:flex-col md:h-[84%] md:pt-4">
        <div className="w-[50%] h-full md:w-[80%] md:max-w-[420px] md:h-[50%]">
          <div className="w-full h-full flex transition-all ease duration-400 hover:scale-125 hover:translate-y-14 md:hover:translate-y-[12px]">
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
        <div className="w-[50%] h-full flex flex-col pl-12 lg:pl-6 md:pl-0 md:w-full md:h-[50%] md:mt-3">
          <ActivitySwiperContents
            contents={contents}
            link={link}
            currentPageIndex={currentPageIndex}
            slideIndex={slideIndex}
          />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityImages;
