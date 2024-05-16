import Image, { StaticImageData } from 'next/image';

interface Props {
  currentPageIndex: number;
  landing: StaticImageData;
  slideLength: number;
}

const Background = ({ currentPageIndex, landing, slideLength }: Props) => {
  const primaryColorWidth =
    currentPageIndex === 0 ? 'w-3/6 md:w-full md:h-1/2' : 'w-full md:h-full';
  const landingWidth =
    currentPageIndex === 0 ? 'w-4/6 md:w-full md:h-1/2' : 'w-0 md:h-0';
  const bgColor =
    currentPageIndex === slideLength - 1 ? 'bg-dark' : 'bg-primary';

  return (
    <>
      <div className="w-full h-full fixed md:flex md:flex-col-reverse">
        <div
          className={`${landingWidth} h-full fixed right-0 z-[-1] animate-init-fade-in-move transition-all ease duration-700 md:top-0`}
        >
          <Image
            src={landing}
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
      </div>
    </>
  );
};

export default Background;
