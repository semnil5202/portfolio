import Link from 'next/link';
import HomeIcon from './components/HomeIcon';
import SVGNextIcon from '../../../public/assets/icons/next-icon.svg';

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
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-7xl text-white font-bold lg:text-6xl md:text-4xl md:font-medium">
            {heading}
          </p>
          <div className="w-[30%] h-[2px] bg-white mt-10 lg:w-[25%] md:w-[20%] md:mt-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <HomeIcon position="absolute" mediaColor="white" />
      <Link href={`/${link}`} className="flex flex-col items-center">
        <div className="flex items-center">
          {Svg && (
            <div className="mr-4">
              <Svg className="md:w-[36px] md:h-[36px]" viewBox="0 0 72 72" />
            </div>
          )}
          <p className="text-7xl text-white font-bold mr-4 lg:text-6xl md:text-4xl md:font-medium">
            {heading}
          </p>
          <SVGNextIcon
            className="md:w-[36px] md:h-[36px]"
            viewBox="0 0 72 72"
          />
        </div>
        <div className="w-[30%] h-[2px] bg-white mt-10 mr-4 lg:w-[25%] md:w-[15%] md:mt-5" />
      </Link>
    </div>
  );
};

export default Separator;
