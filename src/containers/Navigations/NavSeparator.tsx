import SVGNextIcon from '../../../public/assets/icons/next-icon.svg';
import NavMediaTitle from './components/NavMediaTitle';

interface Props {
  type: 'end' | 'separate';
  heading: string;
  link?: string;
  svg?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavSeparator = ({ type, heading, svg }: Props) => {
  const Svg = svg;

  if (type === 'separate') {
    return (
      <>
        <NavMediaTitle>{heading}</NavMediaTitle>
        <div className="relative w-full h-full flex justify-center items-center md:hidden">
          <div className="flex flex-col items-center">
            <p className="text-[8px] text-white font-bold">{heading}</p>
            <div className="w-[30%] h-[0.5px] bg-white mt-[4px]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavMediaTitle>다음 프로젝트</NavMediaTitle>
      <div className="relative w-full h-full flex justify-center items-center md:hidden">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {Svg && (
              <div className="mr-1">
                <Svg className="w-[10px] h-[10px]" viewBox="0 0 72 72" />
              </div>
            )}
            <p className="text-[8px] text-white font-bold mr-1">{heading}</p>
            <SVGNextIcon className="w-[10px] h-[10px]" viewBox="0 0 72 72" />
          </div>
          <div className="w-[25%] h-[0.5px] bg-white mt-[4px]" />
        </div>
      </div>
    </>
  );
};

export default NavSeparator;
