'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface Props {
  heading: string;
  subHeading?: string;
  images: StaticImageData[];
  contents: {
    heading: string;
    descriptions: string[];
  }[];
}

const ActivityImages = ({ heading, subHeading, images, contents }: Props) => {
  const swiperRef = useRef<HTMLDivElement | null>(null);

  console.dir(swiperRef);

  return (
    <section className="w-full h-full px-[12%] pb-[4%]">
      <div className="w-full h-[28%] flex flex-col justify-end">
        <h2 className="text-4xl text-fff font-bold">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        {subHeading ? (
          <h4 className="text-lg text-fff font-extralight">{subHeading}</h4>
        ) : (
          <div className="w-full h-[28px]" />
        )}
      </div>
      <div className="w-full h-[72%] flex items-center pt-10">
        <div className="w-[50%] h-full">
          <div
            className="w-full h-full flex transition-all ease duration-400 hover:scale-135 hover:translate-y-16"
            ref={swiperRef}
          >
            <Swiper
              speed={700}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              grabCursor
              className="w-full h-max"
              style={{ '--swiper-pagination-color': '#2A392F' } as {}}
            >
              {images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-lg overflow-hidden">
                    <Image src={image} alt={heading} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12">
          {contents.map(({ heading, descriptions }, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
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
        </div>
      </div>
    </section>
  );
};

export default ActivityImages;
