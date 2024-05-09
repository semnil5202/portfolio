import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[110px] h-[170px] flex-col items-center">
      <div className="w-[110px] h-[110px]">
        <Image src={image} alt={name} loading="lazy" />
      </div>
      <p className="text-fff text-center font-extralight">{name}</p>
    </li>
  );
};

export default Tech;
