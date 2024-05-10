import Link from 'next/link';
import HomeIcon from './components/HomeIcon';
import SVGNextIcon from '../../../../../public/assets/icons/next-icon.svg';
import { Dispatch } from 'react';

interface Props {
  type: 'end' | 'separate';
  heading: string;
  link?: string;
  svg?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Separator = ({ type, heading, link, svg }: Props) => {
  const Svg = svg;

  if (type === 'separate') {
    return (
      <section className="relative w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-7xl text-fff font-bold md:text-5xl">{heading}</p>
          <div className="w-[30%] h-[2px] bg-fff mt-10 mr-4 md:mt-5" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-full flex justify-center items-center">
      <HomeIcon position="absolute" />
      <Link href={`/${link}`} className="flex flex-col items-center">
        <div className="flex items-center">
          {Svg && (
            <div className="mr-4">
              <Svg />
            </div>
          )}
          <p className="text-7xl text-fff font-bold mr-4 md:text-5xl">
            {heading}
          </p>
          <SVGNextIcon />
        </div>
        <div className="w-[30%] h-[2px] bg-fff mt-10 mr-4 md:mt-5 md:w-[20%]" />
      </Link>
    </section>
  );
};

export default Separator;
