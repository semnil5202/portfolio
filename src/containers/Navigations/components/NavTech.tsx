import SkeletonImage from '@/components/SkeletonImage';
import { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const NavTech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[10px] h-[22px] flex-col items-center">
      <SkeletonImage
        image={image}
        alt={name}
        imageClassName="bg-gray-500"
        containerClassName="w-[10px] h-[10px] rounded-[1px] overflow-hidden"
      />
      <p className="text-white text-[3px] text-center font-extralight mt-[2px]">
        {name}
      </p>
    </li>
  );
};

export default NavTech;
