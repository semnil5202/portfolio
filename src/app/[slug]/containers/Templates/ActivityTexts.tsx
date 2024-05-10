import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
}

const ActivityTexts = ({ heading, subHeading, first, second }: Props) => {
  return (
    <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center md:px-[4%] md:pb-0">
      <div className="w-full max-w-[1140px] h-[28%] flex flex-col justify-end md:h-[18%]">
        <h2 className="text-4xl text-fff font-bold md:text-2xl">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3 md:my-1 md:w-[24px]" />
        {subHeading ? (
          <h4 className="text-lg text-fff font-extralight md:text-sm md:mb-1">
            {subHeading}
          </h4>
        ) : (
          <div className="w-full h-[28px] md:h-[14px]" />
        )}
      </div>
      <div className="w-full max-w-[1140px] h-[72%] flex pt-12 md:pt-0 md:h-[82%]">
        <div className="w-[50%] h-full flex flex-col pr-10 md:pr-4">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8 md:py-[2px] md:text-sm md:mb-2 md:rounded-[2px]">
            {first.title}
          </h5>
          {first.contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0 md:mb-1">
              <p className="text-lg text-fff font-semibold mb-2 md:text-sm md:mb-1">
                {heading}
              </p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                  media="md:text-xs"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
          {first.link && (
            <div className="mb-6 last:mb-0 md:mb-1">
              <p className="text-lg text-fff font-semibold mb-2 md:text-sm md:mb-1">
                {first.link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={first.link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                  media="md:text-xs"
                >
                  {first.link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10 md:pl-4">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8 md:py-[2px] md:text-sm md:mb-2 md:rounded-[2px]">
            {second.title}
          </h5>
          {second.contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0 md:mb-1">
              <p className="text-lg text-fff font-semibold mb-2 md:text-sm md:mb-1">
                {heading}
              </p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                  media="md:text-xs"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
          {second.link && (
            <div className="mb-6 last:mb-0 md:mb-1">
              <p className="text-lg text-fff font-semibold mb-2 md:text-sm md:mb-1">
                {second.link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={second.link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                  media="md:text-xs"
                >
                  {second.link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActivityTexts;
