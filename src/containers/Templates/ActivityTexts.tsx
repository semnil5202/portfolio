'use client';

import TemplateLayout from './components/TemplateLayout';
import ActivityContents from './components/ActivityContents';
import { useEffect, useState } from 'react';
import SVGToggle from '../../../public/assets/icons/toggle.svg';

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
  currentPageIndex: number;
  slideIndex: number;
}

const ActivityTexts = ({
  heading,
  subHeading,
  first,
  second,
  currentPageIndex,
  slideIndex,
}: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [viewTime, setViewTime] = useState<number>(0);

  const isIntoView = currentPageIndex === slideIndex;
  const isFirstView = viewTime === 1;

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (!isIntoView) return;

    setViewTime((prev) => prev + 1);
  }, [isIntoView]);

  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full max-w-[1140px] h-[74%] flex pt-10 lg:h-[80%] lg:pt-6 md:h-[84%] md:pt-2 md:flex-col">
        <div className="w-[50%] h-full flex flex-col pr-10 lg:pr-5 md:w-full md:h-max md:pr-0">
          <h5
            className="w-full flex justify-center items-center text-lg text-dark bg-white py-1 font-semibold rounded-[4px] mb-8 lg:mb-4 md:text-[14px] md:leading-tight md:rounded-sm md:mb-2 md:font-medium md:cursor-pointer"
            onClick={onClickToggle}
          >
            {first.title}
            <SVGToggle
              className={`hidden h-2 ml-1 ${!toggle && 'rotate-180'} md:block`}
              viewBox="0 0 26 20"
            />
          </h5>
          <div className={`${toggle && 'md:hidden'}`}>
            <ActivityContents contents={first.contents} link={first.link} />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10 lg:pl-5 md:w-full md:pl-0 md:mt-2">
          <h5
            className={`w-full flex justify-center items-center text-lg text-dark bg-white py-1 font-semibold rounded-[4px] mb-8 lg:mb-4 md:text-[14px] md:leading-tight md:rounded-sm md:mb-2 md:font-medium md:cursor-pointer ${
              isIntoView && isFirstView && 'md:animate-notify-toggle'
            }`}
            onClick={onClickToggle}
          >
            {second.title}
            <SVGToggle
              className={`hidden h-2 ml-1 ${toggle && 'rotate-180'} md:block`}
              viewBox="0 0 26 20"
            />
          </h5>
          <div className={`${!toggle && 'md:hidden'}`}>
            <ActivityContents contents={second.contents} link={second.link} />
          </div>
        </div>
      </div>
    </TemplateLayout>
  );
};

export default ActivityTexts;
