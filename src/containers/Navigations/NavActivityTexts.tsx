import NavTemplateLayout from './components/NavTemplateLayout';
import NavActivityContents from './components/NavActivityContents';
import NavActivityTextTitle from './components/NavActivityTextTitle';

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
  slideIndex: number;
}

const NavActivityTexts = ({
  heading,
  subHeading,
  first,
  second,
  slideIndex,
}: Props) => {
  return (
    <NavTemplateLayout heading={heading} subHeading={subHeading}>
      <section className="w-full max-w-[1140px] h-[74%] flex pt-10 lg:h-[80%] lg:pt-6 md:h-[84%] md:pt-4 md:flex-col">
        <div className="w-[50%] h-full flex flex-col pr-10 lg:pr-5 md:w-full md:h-max md:pr-0">
          <NavActivityTextTitle title={first.title} slideIndex={slideIndex}>
            <NavActivityContents contents={first.contents} link={first.link} />
          </NavActivityTextTitle>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10 lg:pl-5 md:w-full md:pl-0 md:mt-2">
          <NavActivityTextTitle
            title={second.title}
            slideIndex={slideIndex}
            isNotifyToggle
          >
            <NavActivityContents
              contents={second.contents}
              link={second.link}
            />
          </NavActivityTextTitle>
        </div>
      </section>
    </NavTemplateLayout>
  );
};

export default NavActivityTexts;
