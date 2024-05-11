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
          <p className="text-lg text-fff font-semibold mb-2">{link.heading}</p>
          <ListItem bgColor="fff" mb="mb-2" weight="extralight">
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
