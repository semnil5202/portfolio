import { StaticImageData } from 'next/image';
import NavTemplateLayout from './components/NavTemplateLayout';
import SkeletonImage from '@/components/SkeletonImage';

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
  slideIndex,
}: Props) => {
  return (
    <NavTemplateLayout heading={heading} subHeading={subHeading}>
      <section className="w-full h-[74%] max-w-[1140px] flex items-center pt-10 lg:h-[80%] lg:pt-6 md:flex-col md:h-[84%] md:pt-4">
        <div className="w-[50%] h-full flex md:w-[100%] md:tall:w-[85%] md:max-w-[420px] md:h-[50%]">
          <SkeletonImage
            image={images ? images[0] : (image as StaticImageData)}
            alt={`${heading} 이미지`}
            imageClassName="bg-gray-500"
            containerClassName="h-max relative z-10 rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-125 hover:translate-y-10 lg:hover:translate-x-12 md:hover:scale-100 md:hover:translate-y-0"
          />
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12 lg:pl-6 md:pl-0 md:w-full md:h-[50%] md:mt-3">
          acitvity content swiper
        </div>
      </section>
    </NavTemplateLayout>
  );
};

export default NavActivity;
