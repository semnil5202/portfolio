import Link from 'next/link';
import SVGHomeLogo from '../../../../public/assets/icons/home-logo.svg';

interface Props {
  position: 'fixed' | 'absolute';
}

const HomeIcon = ({ position }: Props) => {
  return (
    <Link href="/" className={`${position} top-[6%] left-[4%] md:top-[4%]`}>
      <div className="flex items-center">
        <SVGHomeLogo
          className="md:w-[36px] md:h-[36px] md:invert-[85%]"
          viewBox="0 0 40 40"
        />
      </div>
    </Link>
  );
};

export default HomeIcon;
