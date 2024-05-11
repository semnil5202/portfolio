import ListItem from '@/components/ListItem/ListItem';
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
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full max-w-[1140px] h-[74%] flex pt-12 lg:h-[80%] lg:pt-6">
        <div className="w-[50%] h-full flex flex-col pr-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8">
            {first.title}
          </h5>
          <ActivityContents contents={first.contents} link={first.link} />
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8">
            {second.title}
          </h5>
          <ActivityContents contents={second.contents} link={second.link} />
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityTexts;
