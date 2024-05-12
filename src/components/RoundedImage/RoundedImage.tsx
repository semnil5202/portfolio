import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  alt: string;
  bgColor?: string;
}

const RoundedImage = ({ src, alt, bgColor = 'fff' }: Props) => {
  const backgroundColor = `#${bgColor}`;

  return (
    // TODO: 테일윈드 background Color 적용 불가 원인 파악 후 style attr 제거
    <div
      className="w-[250px] h-[250px] rounded-[50%] overflow-hidden md:w-[14vw] md:h-[14vw]"
      style={{ backgroundColor }}
    >
      <Image src={src} alt={alt} loading="lazy" className="animate-skeleton" />
    </div>
  );
};

export default RoundedImage;
