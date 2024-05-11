import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[100px] h-[174px] flex-col items-center lg:w-[8vw] lg:h-[15vw]">
      <div className="w-[100px] h-[100px] rounded-md overflow-hidden lg:w-[8vw] lg:h-[8vw]">
        <Image
          src={image}
          alt={name}
          loading="lazy"
          className="animate-skeleton"
        />
      </div>
      <p className="text-fff text-center font-extralight mt-2">{name}</p>
    </li>
  );
};

export default Tech;
