import Image, { StaticImageData } from 'next/image';
import TemplateLayout from './components/TemplateLayout';
import ActivityContents from './components/ActivityContents';

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
}

const Activity = ({ heading, subHeading, image, contents, link }: Props) => {
  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full h-[74%] max-w-[1140px] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:flex-col md:h-[89%] md:pt-2">
        <div className="w-[50%] h-full flex md:w-[80%] md:h-[38%]">
          <div className="h-max rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10 md:rounded-sm md:hover:translate-y-[8px]">
            <Image
              src={image}
              alt={`${heading} 이미지`}
              loading="lazy"
              className="animate-pulse bg-gray-500"
              onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 lg:pl-6 md:pl-0 md:w-full md:h-[62%]">
          <ActivityContents contents={contents} link={link} />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default Activity;
