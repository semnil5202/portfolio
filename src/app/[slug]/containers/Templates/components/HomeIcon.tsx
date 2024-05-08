import Link from 'next/link';
import SVGHomeLogo from '../../../../../../public/assets/icons/home-logo.svg';

interface Props {
  position: 'fixed' | 'absolute';
}

const HomeIcon = ({ position }: Props) => {
  return (
    <Link href="/" className={`${position} top-[6%] left-[4%]`}>
      <div className="flex items-center">
        <SVGHomeLogo />
      </div>
    </Link>
  );
};

export default HomeIcon;
