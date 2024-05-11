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
        <div className="w-full max-w-[1140px] h-[28%] flex flex-col justify-end">
          <h2 className="text-4xl text-fff font-bold">{heading}</h2>
          <div className="w-[48px] h-[2px] bg-fff my-3" />
          {subHeading ? (
            <h4 className="text-lg text-fff font-extralight">{subHeading}</h4>
          ) : (
            <div className="w-full h-[28px]" />
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default TemplateLayout;
