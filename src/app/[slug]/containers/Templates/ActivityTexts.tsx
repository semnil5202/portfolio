import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TemplateLayout from './components/TemplateLayout';

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
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full max-w-[1140px] h-[72%] flex pt-12">
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
    </TemplateLayout>
  );
};

export default ActivityTexts;
