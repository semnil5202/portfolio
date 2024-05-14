import ListItem from '@/components/ListItem/ListItem';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
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

const ActivityContents = ({ contents, link }: Props) => {
  return (
    <>
      {contents.map(({ heading, descriptions }, idx) => (
        <div key={heading} className="mb-4 last:mb-0 md:mb-[0.4vw]">
          <p className="text-lg text-fff font-semibold mb-2 md:text-[1.4vw] md:leading-snug md:mb-[0.1vw] md:font-medium">
            {heading}
          </p>
          {descriptions.map((description) => (
            <ListItem
              key={description}
              color="fff"
              bgColor="fff"
              mb="mb-2 md:mb-0"
              weight="extralight"
              mediaText="md:text-[1.2vw]"
              mediaBullet="md:min-w-[0.3vw] md:min-h-[0.3vw] md:mt-[0.8vw]"
            >
              {description}
            </ListItem>
          ))}
        </div>
      ))}
      {link && (
        <div className="mb-4 last:mb-0 md:mb-[0.4vw]">
          <p className="text-lg text-fff font-semibold mb-2 md:text-[1.4vw] md:leading-snug md:mb-[0.1vw] md:font-medium">
            {link.heading}
          </p>
          <ListItem
            bgColor="fff"
            mb="mb-2 md:mb-0"
            weight="extralight"
            mediaText="md:text-[1.2vw]"
            mediaBullet="md:min-w-[0.3vw] md:min-h-[0.3vw] md:mt-[0.8vw]"
          >
            <Link
              href={link.href}
              target="_blank"
              className="underline text-link hover:text-fff"
            >
              {link.name}
            </Link>
          </ListItem>
        </div>
      )}
    </>
  );
};

export default ActivityContents;
