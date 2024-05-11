import { ReactNode } from 'react';

interface Props {
  heading: string;
  subHeading?: string;
  children: ReactNode;
}

const TemplateLayout = ({ heading, subHeading, children }: Props) => {
  return (
    <>
      <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center">
        <div className="w-full max-w-[1140px] h-[26%] flex flex-col justify-end lg:h-[20%]">
          <h2 className="text-4xl text-fff font-bold lg:text-3xl">{heading}</h2>
          <div className="w-[48px] h-[2px] bg-fff my-3 lg:my-2 lg:w-[36px]" />
          {subHeading ? (
            <h4 className="text-lg text-fff font-extralight lg:text-base">
              {subHeading}
            </h4>
          ) : (
            <div className="w-full h-[28px] lg:h-[24px]" />
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default TemplateLayout;
