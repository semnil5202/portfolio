import NavTemplateLayout from './components/NavTemplateLayout';
import NavActivityContents from './components/NavActivityContents';
import NavActivityTextTitle from './components/NavActivityTextTitle';
import NavMediaTitle from './components/NavMediaTitle';

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
    <>
      <NavMediaTitle>{heading}</NavMediaTitle>
      <NavTemplateLayout heading={heading} subHeading={subHeading}>
        <section className="w-full max-w-[1140px] h-[80%] flex pt-1">
          <div className="w-[50%] h-full flex flex-col pr-1">
            <NavActivityTextTitle title={first.title} slideIndex={slideIndex}>
              <NavActivityContents
                contents={first.contents}
                link={first.link}
              />
            </NavActivityTextTitle>
          </div>
          <div className="w-[50%] h-full flex flex-col pl-1">
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
    </>
  );
};

export default NavActivityTexts;
