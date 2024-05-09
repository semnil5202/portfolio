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
    <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center">
      <div className="w-full max-w-[1140px] h-[24%] flex flex-col justify-end">
        <h2 className="text-4xl text-fff font-bold">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        {subHeading ? (
          <h4 className="text-lg text-fff font-extralight">{subHeading}</h4>
        ) : (
          <div className="w-full h-[28px]" />
        )}
      </div>
      <div className="w-full max-w-[1140px] h-[76%] flex pt-6">
        <div className="w-[50%] h-full flex flex-col pr-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8">
            {first.title}
          </h5>
          {first.contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
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
          {first.link && (
            <div className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">
                {first.link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={first.link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                >
                  {first.link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
        <div className="w-[50%] h-full flex flex-col pl-10">
          <h5 className="w-max text-lg bg-fff py-1 px-3 font-semibold rounded-[4px] mb-8">
            {second.title}
          </h5>
          {second.contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
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
          {second.link && (
            <div className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">
                {second.link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={second.link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
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
