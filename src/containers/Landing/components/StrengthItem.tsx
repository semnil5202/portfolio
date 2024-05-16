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
    <div className="flex flex-col items-center">
      <RoundedImage src={image} alt={alt} bgColor="bg-white" />
      <ul className="w-[300px] mt-10 font-light lg:w-[264px] md:w-[31vw] md:mt-[1.5vw]">
        {contents.map(({ name, link }) => (
          <ListItem
            key={name}
            textColor="text-white"
            bgColor="bg-white"
            mb="mb-3 md:mb-[0.4vw]"
          >
            {name}{' '}
            <Link
              href={link.href}
              target="_blank"
              className="text-link underline underline-offset-4 hover:text-white"
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
