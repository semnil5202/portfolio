import TemplateLayout from './components/TemplateLayout';
import ActivityContents from './components/ActivityContents';
import ActivityTextTitle from './components/ActivityTextTitle';

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

const ActivityTexts = ({
  heading,
  subHeading,
  first,
  second,
  slideIndex,
}: Props) => {
  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <section className="w-full max-w-[1140px] h-[74%] flex pt-10 lg:h-[80%] lg:pt-6 md:h-[84%] md:pt-4 md:flex-col">
        <div className="w-[50%] h-full flex flex-col pr-10 lg:pr-5 md:w-full md:h-max md:pr-0">
          <ActivityTextTitle title={first.title} slideIndex={slideIndex}>
            <ActivityContents contents={first.contents} link={first.link} />
          </ActivityTextTitle>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10 lg:pl-5 md:w-full md:pl-0 md:mt-2">
          <ActivityTextTitle
            title={second.title}
            slideIndex={slideIndex}
            isNotifyToggle
          >
            <ActivityContents contents={second.contents} link={second.link} />
          </ActivityTextTitle>
        </div>
      </section>
    </TemplateLayout>
  );
};

export default ActivityTexts;
