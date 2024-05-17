import Image, { StaticImageData } from 'next/image';
import TemplateLayout from './components/TemplateLayout';
import ActivitySwiperContents from './components/ActivitySwiperContents';

interface Props {
  heading: string;
  subHeading?: string;
  image: StaticImageData;
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

const Activity = ({
  heading,
  subHeading,
  image,
  contents,
  link,
  currentPageIndex,
  slideIndex,
}: Props) => {
  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full h-[74%] max-w-[1140px] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:flex-col md:h-[84%] md:pt-4">
        <div className="w-[50%] h-full flex md:w-[85%] md:max-w-[420px] md:h-[50%]">
          <div className="h-max relative z-10 rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10 lg:hover:translate-x-12 md:hover:translate-y-[10px]">
            <Image
              src={image}
              alt={`${heading} 이미지`}
              loading="lazy"
              className="animate-pulse bg-gray-500"
              onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
            />
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

export default Activity;
