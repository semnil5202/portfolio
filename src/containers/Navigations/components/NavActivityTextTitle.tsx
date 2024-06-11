'use client';

import { ReactElement, useEffect, useState } from 'react';
import SVGToggle from '../../../../public/assets/icons/toggle.svg';
import useStore from '@/store/store';

interface Props {
  title: string;
  slideIndex: number;
  isNotifyToggle?: boolean;
  children: ReactElement;
}

const NavActivityTextTitle = ({
  title,
  slideIndex,
  isNotifyToggle,
  children,
}: Props) => {
  const [viewTime, setViewTime] = useState<number>(0);
  const { projectTextToggle, projectCurrentPageIndex, setProjectTextToggle } =
    useStore((state) => state);

  const isIntoView = projectCurrentPageIndex === slideIndex;
  const isFirstView = viewTime === 1;
  const isHidden = isNotifyToggle ? !projectTextToggle : projectTextToggle;

  const onClickToggle = () => {
    setProjectTextToggle(!projectTextToggle);
  };

  useEffect(() => {
    if (!isIntoView) return;

    setViewTime((prev) => prev + 1);
  }, [isIntoView]);

  return (
    <>
      <h5
        className={`w-full flex justify-center items-center text-lg text-dark bg-white py-1 font-semibold rounded-[4px] mb-8 lg:mb-4 md:text-[14px] md:px-1 md:leading-tight md:rounded-sm md:mb-2 md:font-medium md:cursor-pointer ${
          isNotifyToggle &&
          isIntoView &&
          isFirstView &&
          'md:animate-notify-toggle'
        }`}
        onClick={onClickToggle}
      >
        {title}
        <SVGToggle
          className={`hidden h-2 ml-1 ${isHidden && 'rotate-180'} md:block`}
          viewBox="0 0 26 20"
        />
      </h5>
      <div className={`${isHidden && 'md:hidden'}`}>{children}</div>
    </>
  );
};

export default NavActivityTextTitle;
