import { ReactNode } from 'react';

interface Props {
  heading: string;
  subHeading?: string;
  children: ReactNode;
}

const TemplateLayout = ({ heading, subHeading, children }: Props) => {
  return (
    <>
      <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center lg:px-[4%] md:px-[4%] md:pb-[1%]">
        <div className="w-full max-w-[1140px] h-[26%] flex flex-col justify-end lg:h-[20%] md:h-[14%]">
          <h2 className="text-4xl text-white font-bold lg:text-3xl md:text-[2.2vw] md:leading-tight md:font-medium">
            {heading}
          </h2>
          <div className="w-[48px] h-[2px] bg-white my-3 lg:my-2 lg:w-[36px] md:hidden" />
          {subHeading ? (
            <h4 className="text-lg text-white font-extralight lg:text-base md:text-[1.3vw] md:leading-tight">
              {subHeading}
            </h4>
          ) : (
            <div className="w-full h-[28px] lg:h-[24px] md:h-[1.3vw]" />
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default TemplateLayout;
