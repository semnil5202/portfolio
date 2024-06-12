import { StaticImageData } from 'next/image';
import NavTemplateLayout from './components/NavTemplateLayout';
import SkeletonImage from '@/components/SkeletonImage';
import NavActivityContents from './components/NavActivityContents';

interface Props {
  heading: string;
  subHeading?: string;
  image?: StaticImageData;
  images?: StaticImageData[];
  contents: {
    heading: string;
    descriptions: string[];
  }[];
  link?: {
    heading: string;
    name: string;
    href: string;
  };
  slideIndex: number;
}

const NavActivity = ({
  heading,
  subHeading,
  image,
  images,
  contents,
  link,
}: Props) => {
  return (
    <NavTemplateLayout heading={heading} subHeading={subHeading}>
      <section className="w-full h-[80%] max-w-[1140px] flex items-center pt-1">
        <div className="w-[50%] h-full flex">
          <SkeletonImage
            image={images ? images[0] : (image as StaticImageData)}
            alt={`${heading} 이미지`}
            imageClassName="bg-gray-500"
            containerClassName="h-max relative z-10 rounded-[2px] overflow-hidden"
          />
        </div>
        <div className="w-[50%] h-full flex flex-col pl-2">
          <NavActivityContents contents={contents} link={link} />
        </div>
      </section>
    </NavTemplateLayout>
  );
};

export default NavActivity;
