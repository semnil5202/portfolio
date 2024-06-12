import ListItem from '@/components/ListItem';
import RoundedImage from '@/components/RoundedImage';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  image: StaticImageData;
  alt: string;
  contents: {
    name: string;
    link: {
      href: string;
      name: string;
    };
  }[];
}

const StrengthItem = ({ image, alt, contents }: Props) => {
  return (
    <div className="flex flex-col items-center md:h-full md:justify-center">
      <RoundedImage src={image} alt={alt} bgColor="bg-white" />
      <ul className="w-[300px] mt-10 font-light lg:w-[232px] md:w-[248px] md:mt-6">
        {contents.map(({ name, link }) => (
          <ListItem
            key={name}
            textColor="text-white"
            bgColor="bg-white"
            mb="mb-3"
            mediaText="md:text-[14px]"
          >
            {name}{' '}
            <Link
              href={link.href}
              target="_blank"
              className="text-gray-400 underline underline-offset-4 hover:text-white"
            >
              {link.name}
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default StrengthItem;
