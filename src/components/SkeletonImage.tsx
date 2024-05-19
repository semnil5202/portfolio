'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Props {
  image: StaticImageData;
  alt: string;
  isBlur?: boolean;
  imageClassName?: string;
  containerClassName?: string;
}

const SkeletonImage = ({
  image,
  alt,
  isBlur,
  imageClassName,
  containerClassName,
}: Props) => {
  return (
    <div className={containerClassName}>
      <Image
        src={image}
        alt={alt}
        placeholder={isBlur ? 'blur' : 'empty'}
        className={`${imageClassName} animate-pulse`}
        onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
      />
    </div>
  );
};

export default SkeletonImage;
