import SkeletonImage from '@/components/SkeletonImage';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  src: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

const ProjectCard = ({ src, title, description, slug }: Props) => {
  return (
    <Link href={`/${slug}`} className="flex justify-center">
      <div className="w-[250px] flex flex-col items-center lg:w-[236px] md:w-[168px]">
        <SkeletonImage
          image={src}
          alt={`${title} 이미지`}
          isBlur
          imageClassName="bg-gray-500"
          containerClassName="w-[250px] h-[250px] rounded-xl overflow-hidden lg:w-[236px] lg:h-[236px] md:w-[168px] md:h-[168px] md:rounded-md"
        />
        <div>
          <h4 className="text-white text-xl font-semibold mt-4 md:text-[14px] md:mt-2 md:font-medium md:leading-normal">
            {title}
          </h4>
          <p className="text-white font-light mt-2 leading-relaxed md:text-[12px] md:mt-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
