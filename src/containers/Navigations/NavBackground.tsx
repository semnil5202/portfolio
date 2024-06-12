import Image, { StaticImageData } from 'next/image';

interface Props {
  currentPageIndex: number;
  landingImage: StaticImageData;
  slideLength: number;
}

const NavBackground = ({
  currentPageIndex,
  landingImage,
  slideLength,
}: Props) => {
  const primaryColorWidth = currentPageIndex === 0 ? 'w-3/6' : 'w-full';
  const landingWidth = currentPageIndex === 0 ? 'w-4/6' : 'w-0';
  const bgColor =
    currentPageIndex === slideLength - 1 ? 'bg-dark' : 'bg-primary';

  return (
    <section className="w-full h-full absolute">
      <div className={`${landingWidth} h-full absolute right-0 z-[-1] md:w-0`}>
        <Image
          src={landingImage}
          alt="프로젝트 소개 이미지"
          fill
          loading="lazy"
          placeholder="blur"
          className="animate-pulse bg-gray-500"
          onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
        />
      </div>
      <div
        className={`${primaryColorWidth} h-full ${bgColor} md:w-full md:bg-primary`}
      />
    </section>
  );
};

export default NavBackground;
