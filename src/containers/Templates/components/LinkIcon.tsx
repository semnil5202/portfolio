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
      className="flex items-center mb-5 md:w-[120px] md:mb-3 md:mr-6"
    >
      <div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-4 md:mr-2">
        <Svg className="md:w-[36px] md:h-[36px]" viewBox="0 0 40 40" />
      </div>
      <span className="text-white font-extralight md:text-[12px]">{name}</span>
    </Link>
  );
};

export default LinkIcon;
