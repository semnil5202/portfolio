import Image, { StaticImageData } from 'next/image';

interface Props {
  currentPageIndex: number;
  landingImage: StaticImageData;
  slideLength: number;
}

const Background = ({ currentPageIndex, landingImage, slideLength }: Props) => {
  const primaryColorWidth =
    currentPageIndex === 0 ? 'w-3/6 md:w-full md:h-[55%]' : 'w-full md:h-full';
  const landingWidth =
    currentPageIndex === 0 ? 'w-4/6 md:w-full md:h-1/2' : 'w-0 md:h-0';
  const bgColor =
    currentPageIndex === slideLength - 1 ? 'bg-dark' : 'bg-primary';

  return (
    <>
      <section className="w-full h-full absolute md:flex md:flex-col-reverse">
        <div
          className={`${landingWidth} h-full absolute right-0 z-[-1] animate-init-fade-in-move transition-all ease duration-700 md:top-0`}
        >
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
          className={`${primaryColorWidth} h-full ${bgColor} animate-init-background transition-all ease duration-700`}
        />
      </section>
    </>
  );
};

export default Background;
