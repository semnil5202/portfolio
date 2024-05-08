import Image, { StaticImageData } from 'next/image';

interface Props {
  currentPageIndex: number;
  landing: StaticImageData;
  slideLength: number;
}

const Background = ({ currentPageIndex, landing, slideLength }: Props) => {
  const primaryColorWidth = currentPageIndex === 0 ? 'w-3/6' : 'w-full';
  const landingWidth = currentPageIndex === 0 ? 'w-4/6' : 'w-0';
  const bgColor =
    currentPageIndex === slideLength - 1 ? 'bg-dark' : 'bg-primary';

  return (
    <>
      <div className="w-full h-full fixed">
        <div
          className={`${landingWidth} h-full fixed right-0 z-[-1] animate-init-fade-in-move transition-all ease duration-700`}
        >
          <Image src={landing} alt="랜딩 이미지" fill />
        </div>
        <div
          className={`${primaryColorWidth} h-full ${bgColor} animate-init-background transition-all ease duration-700`}
        />
      </div>
    </>
  );
};

export default Background;
