import { ReactNode } from 'react';

interface Props {
  heading: string;
  subHeading?: string;
  hidingSubHeading?: 'introduction';
  children: ReactNode;
}

const TemplateLayout = ({
  heading,
  subHeading,
  hidingSubHeading,
  children,
}: Props) => {
  const isHide = hidingSubHeading === 'introduction';
  const headingMediaHeight = isHide ? 'md:h-[7%] md:mb-2' : 'h-[12%]';

  return (
    <>
      <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center lg:px-[4%] md:px-[4%] md:pb-[1%]">
        <div
          className={`w-full max-w-[1140px] h-[26%] flex flex-col justify-end lg:h-[20%] ${headingMediaHeight}`}
        >
          <h2 className="text-4xl text-white font-bold lg:text-3xl md:text-[22px] md:leading-tight md:font-medium">
            {heading}
          </h2>
          {isHide ? (
            <></>
          ) : (
            <>
              <div className="w-[48px] h-[2px] bg-white my-3 lg:my-2 lg:w-[36px] md:w-[20px]" />
              {subHeading ? (
                <h4 className="text-lg text-white font-extralight lg:text-base md:text-[14px] md:leading-tight">
                  {subHeading}
                </h4>
              ) : (
                <div className="w-full h-[28px] lg:h-[24px] md:h-[14px]" />
              )}
            </>
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default TemplateLayout;
