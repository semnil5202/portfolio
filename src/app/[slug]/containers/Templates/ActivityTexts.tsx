import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';

interface Props {
  heading: string;
  subHeading?: string;
  first: {
    title: string;
    contents: {
      heading: string;
      descriptions: string[];
    }[];
  };
  second: {
    title: string;
    contents: {
      heading: string;
      descriptions: string[];
    }[];
  };
}

const ActivityTexts = ({ heading, subHeading, first, second }: Props) => {
  return (
    <section className="w-full h-full px-[12%] pb-[4%]">
      <div className="w-full h-[28%] flex flex-col justify-end">
        <h2 className="text-4xl text-fff font-bold">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        {subHeading ? (
          <h4 className="text-lg text-fff font-extralight">{subHeading}</h4>
        ) : (
          <div className="w-full h-[28px]" />
        )}
      </div>
      <div className="w-full h-[72%] flex pt-6">
        <div className="w-[50%] h-full flex flex-col pr-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-4">
            {first.title}
          </h5>
          {first.contents.map(({ heading, descriptions }, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={idx}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-4">
            {second.title}
          </h5>
          {second.contents.map(({ heading, descriptions }, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={idx}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityTexts;
