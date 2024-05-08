import Link from 'next/link';
import HomeIcon from './components/HomeIcon';
import SVGNextIcon from '../../../../../public/assets/icons/next-icon.svg';
import { Dispatch } from 'react';

interface Props {
  type: 'end' | 'separate';
  heading: string;
  link?: string;
}

const Separator = ({ type, heading, link }: Props) => {
  if (type === 'separate') {
    return (
      <section className="relative w-full h-full flex justify-center items-center">
        {/* <div className="w-40 h-40 fixed translate-x-[-250%] translate-y-[-100%] border-l-8 border-t-8 rounded-tl-xl border-fff" /> */}
        <div className="flex flex-col items-center">
          <p className="text-7xl text-fff font-bold">{heading}</p>
          <div className="w-[30%] h-[2px] bg-fff mt-10 mr-4" />
        </div>
        {/* <div className="w-40 h-40 fixed translate-x-[250%] translate-y-[100%] border-r-8 border-b-8 rounded-br-xl border-fff" /> */}
      </section>
    );
  }

  return (
    <section className="relative w-full h-full flex justify-center items-center">
      <HomeIcon />
      <Link href={`/${link}`} className="flex flex-col items-center">
        <div className="flex items-center">
          <p className="text-7xl text-fff font-bold mr-4">{heading}</p>
          <SVGNextIcon />
        </div>
        <div className="w-[30%] h-[2px] bg-fff mt-10 mr-4" />
      </Link>
    </section>
  );
};

export default Separator;
