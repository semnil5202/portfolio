import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TemplateLayout from './components/TemplateLayout';

interface Props {
  heading: string;
  subHeading?: string;
  image: StaticImageData;
  contents: {
    heading: string;
    descriptions: string[];
  }[];
  link?: {
    heading: string;
    name: string;
    href: string;
  };
}

const Activity = ({ heading, subHeading, image, contents, link }: Props) => {
  return (
    <TemplateLayout heading={heading} subHeading={subHeading}>
      <div className="w-full h-[72%] max-w-[1140px] flex items-center pt-12">
        <div className="w-[50%] h-full flex">
          <div className="h-max rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10">
            <Image
              src={image}
              alt={heading}
              loading="lazy"
              className="animate-skeleton"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12">
          {contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                  media=""
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
          {link && (
            <div className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">
                {link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                  media=""
                >
                  {link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
      </div>
    </TemplateLayout>
  );
};

export default Activity;
