import ListItem from '@/components/ListItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TemplateLayout from './components/TemplateLayout';
import ActivityContents from './components/ActivityContents';

interface Props {
  heading: string;
  subHeading?: string;
  first: {
    title: string;
    contents: {
      heading: string;
      descriptions: string[];
    }[];
    link?: {
      heading: string;
      name: string;
      href: string;
    };
  };
  second: {
    title: string;
    contents: {
      heading: string;
      descriptions: string[];
    }[];
    link?: {
      heading: string;
      name: string;
      href: string;
    };
  };
}

const ActivityTexts = ({ heading, subHeading, first, second }: Props) => {
  return (
    <TemplateLayout heading={heading}>
      <div className="w-full max-w-[1140px] h-[74%] flex pt-10 lg:h-[80%] lg:pt-6 md:h-[86%] md:pt-2 md:flex-col">
        <div className="w-[50%] h-full flex flex-col pr-10 lg:pr-5 md:w-full md:pr-0">
          <h5 className="w-full flex justify-center text-lg text-dark bg-white py-1 font-semibold rounded-[4px] mb-8 lg:mb-4 md:text-[14px] md:leading-tight md:py-[2px] md:px-[2px] md:rounded-sm md:mb-1 md:font-medium">
            {first.title}
          </h5>
          <ActivityContents contents={first.contents} link={first.link} />
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10 lg:pl-5 md:w-full md:pl-0 md:mt-2">
          <h5 className="w-full flex justify-center text-lg text-dark bg-white py-1 font-semibold rounded-[4px] mb-8 lg:mb-4 md:text-[14px] md:leading-tight md:py-[2px] md:px-[2px] md:rounded-sm md:mb-1 md:font-medium">
            {second.title}
          </h5>
          <ActivityContents contents={second.contents} link={second.link} />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityTexts;
