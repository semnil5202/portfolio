import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
      <div className="w-full h-[72%] max-w-[1140px] flex items-center pt-12 md:pt-0 md:h-[82%]">
        <div className="w-[50%] h-full flex md:w-[45%] md:items-center">
          <div className="h-max rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10 md:hover:translate-y-[-12px] md:hover:translate-x-12">
            <Image
              src={image}
              alt={heading}
              loading="lazy"
              className="animate-skeleton"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 md:w-[55%] md:pl-6 md:justify-center">
          {contents.map(({ heading, descriptions }, idx) => (
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
          {link && (
            <div className="mb-6 last:mb-0 md:mb-1">
              <p className="text-lg text-fff font-semibold mb-2 md:text-sm md:mb-1">
                {link.heading}
              </p>
              <ListItem bgColor="fff" mb="mb-2" weight="extralight">
                <Link
                  href={link.href}
                  target="_blank"
                  className="underline text-link hover:text-fff"
                  media="md:text-xs"
                >
                  {link.name}
                </Link>
              </ListItem>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Activity;
