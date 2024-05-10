import Link from 'next/link';

interface Props {
  name: string;
  href: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LinkIcon = ({ name, href, svg: Svg }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center mb-5 md:w-[88px] md:mb-4"
    >
      <div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-4 md:mr-2">
        <Svg />
      </div>
      <span className="text-fff font-extralight md:text-sm">{name}</span>
    </Link>
  );
};

export default LinkIcon;
