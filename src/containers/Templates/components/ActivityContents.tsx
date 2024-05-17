import ListItem from '@/components/ListItem';
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
        <div key={heading} className="mb-4 last:mb-0 lg:mb-2 md:mb-2">
          <p className="text-lg text-white font-semibold mb-2 md:text-[14px] md:leading-snug md:mb-[1px] md:font-medium">
            {heading}
          </p>
          {descriptions.map((description) => (
            <ListItem
              key={description}
              textColor="text-white"
              bgColor="bg-white"
              mb="mb-2 lg:mb-1 md:mb-1"
              weight="extralight"
              mediaText="md:text-[12px]"
              mediaBullet="md:min-w-[2px] md:min-h-[2px] md:mt-[8px]"
            >
              {description}
            </ListItem>
          ))}
        </div>
      ))}
      {link && (
        <div className="mb-4 last:mb-0 lg:mb-2 md:mb-2">
          <p className="text-lg text-white font-semibold mb-2 md:text-[14px] md:leading-snug md:mb-[1px] md:font-medium">
            {link.heading}
          </p>
          <ListItem
            bgColor="bg-white"
            mb="mb-2 lg:mb-1 md:mb-0"
            weight="extralight"
            mediaText="md:text-[12px]"
            mediaBullet="md:min-w-[2px] md:min-h-[2px] md:mt-[8px]"
          >
            <Link
              href={link.href}
              target="_blank"
              className="underline underline-offset-4 text-link hover:text-white"
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
