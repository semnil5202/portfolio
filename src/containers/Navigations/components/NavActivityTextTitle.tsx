import { ReactElement } from 'react';

interface Props {
  title: string;
  slideIndex: number;
  isNotifyToggle?: boolean;
  children: ReactElement;
}

const NavActivityTextTitle = ({ title, children }: Props) => {
  return (
    <>
      <h5 className="w-full flex justify-center items-center text-[2px] text-dark bg-white py-px font-semibold rounded-[1px] mb-1">
        {title}
      </h5>
      <div>{children}</div>
    </>
  );
};

export default NavActivityTextTitle;
