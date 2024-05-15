import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[100px] h-[174px] flex-col items-center lg:w-[8vw] lg:h-[15vw] md:w-[7vw] md:h-[11.5vw]">
      <div className="w-[100px] h-[100px] rounded-md overflow-hidden lg:w-[8vw] lg:h-[8vw] md:w-[7vw] md:h-[7vw]">
        <Image
          src={image}
          alt={name}
          loading="lazy"
          className="animate-pulse bg-gray-500"
          onLoad={(e) => e.currentTarget.classList.remove('animate-pulse')}
        />
      </div>
      <p className="text-white text-center font-extralight mt-2 md:text-[1.2vw] md:leading-tight md:mt-[0.5vw]">
        {name}
      </p>
    </li>
  );
};

export default Tech;
