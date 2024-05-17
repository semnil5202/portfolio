import Link from 'next/link';
import SVGHomeLogo from '../../../../public/assets/icons/home-logo.svg';

interface Props {
  position: 'fixed' | 'absolute';
  mediaColor?: 'white' | 'black';
}

const HomeIcon = ({ position, mediaColor = 'black' }: Props) => {
  return (
    <Link
      href="/"
      className={`${position} top-[6%] left-[4%] md:top-[4%] md:left-[6%]`}
    >
      <div className="flex items-center">
        <SVGHomeLogo
          className={`md:w-[36px] md:h-[36px] ${
            mediaColor === 'black' ? 'md:invert-[85%]' : ''
          }`}
          viewBox="0 0 40 40"
        />
      </div>
    </Link>
  );
};

export default HomeIcon;
