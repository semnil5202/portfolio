import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[120px] h-[170px] flex-col items-center">
      <div className="w-[120px] h-[120px]">
        <Image src={image} alt={name} />
      </div>
      <p className="text-fff text-center font-extralight">{name}</p>
    </li>
  );
};

export default Tech;
