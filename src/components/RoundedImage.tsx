'use client';

import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  alt: string;
  bgColor?: string;
}

const RoundedImage = ({ src, alt, bgColor = 'bg-white' }: Props) => {
  return (
    <div
      className={`w-[250px] h-[250px] ${bgColor} rounded-[50%] overflow-hidden lg:w-[220px] lg:h-[220px] md:w-[200px] md:h-[200px]`}
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        className="animate-pulse bg-gray-500"
        onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
      />
    </div>
  );
};

export default RoundedImage;
