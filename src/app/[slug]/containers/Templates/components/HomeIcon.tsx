import Link from 'next/link';
import SVGHomeLogo from '../../../../../../public/assets/icons/home-logo.svg';

const HomeIcon = () => {
  return (
    <Link href="/" className="fixed top-[6%] left-[4%]">
      <div className="flex items-center">
        <SVGHomeLogo />
      </div>
    </Link>
  );
};

export default HomeIcon;
