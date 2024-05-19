import TemplateLayout from './components/TemplateLayout';
import { StaticImageData } from 'next/image';
import ActivitySwiperContents from './components/ActivitySwiperContents';
import ActivityImageSwiper from './components/ActivityImageSwiper';

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
  slideIndex: number;
}

const ActivityImages = ({
  heading,
  subHeading,
  images,
  contents,
  link,
  slideIndex,
}: Props) => {
  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <section className="w-full max-w-[1140px] h-[74%] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:flex-col md:h-[84%] md:pt-4">
        <div className="w-[50%] h-full md:w-[85%] md:max-w-[420px] md:h-[50%]">
          <div className="relative z-10 w-full flex transition-all ease duration-400 hover:scale-125 hover:translate-y-10 lg:hover:translate-x-12 lg:hover:translate-y-10 md:hover:translate-y-[12px]">
            <ActivityImageSwiper
              images={images}
              heading={heading}
              slideIndex={slideIndex}
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 lg:pl-6 md:pl-0 md:w-full md:h-[50%] md:mt-3">
          <ActivitySwiperContents
            contents={contents}
            link={link}
            slideIndex={slideIndex}
          />
        </div>
      </section>
    </TemplateLayout>
  );
};

export default ActivityImages;
