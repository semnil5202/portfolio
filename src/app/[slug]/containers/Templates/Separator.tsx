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
          <p className="text-7xl text-fff font-bold lg:text-6xl md:text-[5vw] md:font-medium">
            {heading}
          </p>
          <div className="w-[30%] h-[2px] bg-fff mt-10 lg:w-[25%] md:w-[20%] md:mt-[2vw]" />
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
              <Svg className="md:w-[4.8vw] md:h-[4.8vw]" viewBox="0 0 72 72" />
            </div>
          )}
          <p className="text-7xl text-fff font-bold mr-4 lg:text-6xl md:text-[5vw] md:font-medium">
            {heading}
          </p>
          <SVGNextIcon
            className="md:w-[4.8vw] md:h-[4.8vw]"
            viewBox="0 0 72 72"
          />
        </div>
        <div className="w-[30%] h-[2px] bg-fff mt-10 mr-4 lg:w-[25%] md:w-[15%] md:mt-[2vw]" />
      </Link>
    </section>
  );
};

export default Separator;
