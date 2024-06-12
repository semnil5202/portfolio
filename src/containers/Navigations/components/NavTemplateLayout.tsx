import { ReactNode } from 'react';

interface Props {
  heading: string;
  subHeading?: string;
  children: ReactNode;
}

const NavTemplateLayout = ({ heading, subHeading, children }: Props) => {
  return (
    <>
      <section className="w-full h-full relative px-[10%] py-[12%] flex flex-col items-center">
        <div className="w-full max-w-[1140px] h-[20%] flex flex-col justify-end">
          <h2 className="text-[5px] text-white font-bold">{heading}</h2>
          <div className="w-[12px] h-[0.5px] bg-white my-[2px]" />
          {subHeading ? (
            <h4 className="text-lg text-white font-extralight">{subHeading}</h4>
          ) : (
            <div className="w-full h-[8px]" />
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default NavTemplateLayout;
