import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  name: string;
}

const Tech = ({ image, name }: Props) => {
  return (
    <li className="flex w-[110px] h-[174px] flex-col items-center">
      <div className="w-[110px] h-[110px] rounded-md overflow-hidden">
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
