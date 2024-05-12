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
      className="flex items-center mb-5 md:mb-[0.1vw] md:mr-[0.8vw]"
    >
      <div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center mr-4 md:mr-0 md:ml-[-0.5vw]">
        <Svg className="md:w-[24px] md:h-[24px]" viewBox="0 0 40 40" />
      </div>
      <span className="text-fff font-extralight md:text-[1.6vw]">{name}</span>
    </Link>
  );
};

export default LinkIcon;
