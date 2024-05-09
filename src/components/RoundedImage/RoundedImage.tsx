import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  bgColor?: string;
}

const RoundedImage = ({ src, alt, width, height, bgColor = 'fff' }: Props) => {
  const widthPx = `w-[${width}px]`;
  const heightPx = `h-[${height}px]`;
  const backgroundColor = `#${bgColor}`;

  return (
    // TODO: 테일윈드 background Color 적용 불가 원인 파악 후 style attr 제거
    <div
      className={`${widthPx} ${heightPx} rounded-[50%] overflow-hidden`}
      style={{ backgroundColor }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        loading="lazy"
        className="animate-skeleton"
      />
    </div>
  );
};

export default RoundedImage;
