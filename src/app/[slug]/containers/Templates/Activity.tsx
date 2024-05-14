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
      <div className="w-full h-[74%] max-w-[1140px] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:h-[86%] md:pt-[1.2vw]">
        <div className="w-[50%] h-full flex md:w-[37%]">
          <div className="h-max rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10 md:rounded-md md:hover:translate-x-[5vw] md:hover:translate-y-[-1.5vw]">
            <Image
              src={image}
              alt={heading}
              loading="lazy"
              className="animate-skeleton"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 md:pl-[2vw] md:w-[63%]">
          <ActivityContents contents={contents} link={link} />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default Activity;
