import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[100px] h-[174px] flex-col items-center lg:w-[92px] lg:h-[148px] md:w-[58px] md:h-[88px]">
      <div className="w-[100px] h-[100px] rounded-md overflow-hidden lg:w-[92px] lg:h-[92px] md:w-[58px] md:h-[58px]">
        <Image
          src={image}
          alt={name}
          loading="lazy"
          className="animate-pulse bg-gray-500"
          onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
        />
      </div>
      <p className="text-white text-center font-extralight mt-2 lg:mt-1 md:text-[10px] md:leading-tight md:mt-1">
        {name}
      </p>
    </li>
  );
};

export default Tech;
