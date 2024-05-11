'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import TemplateLayout from './components/TemplateLayout';
import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
      <div className="w-full max-w-[1140px] h-[72%] flex items-center pt-12">
        <div className="w-[50%] h-full">
          <div className="w-full h-full flex transition-all ease duration-400 hover:scale-125 hover:translate-y-14">
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
                      alt={heading}
                      loading="lazy"
                      className="animate-skeleton"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12">
          {contents.map(({ heading, descriptions }, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={idx}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
          {link && (
            <div className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">
                {link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                >
                  {link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityImages;
