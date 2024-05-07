import { StaticImageData } from 'next/image';
import LinkIcon from './components/LinkIcon';

interface Props {
  title: string;
  description: string;
  links: {
    name: string;
    href: string;
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

const Title = ({ title, description, links }: Props) => {
  return (
    <section
      className={`w-3/6 h-full flex flex-col items-center mt-[-40px] justify-center animate-init-fade-in`}
    >
      <div className="ml-[-20px] max-w-[70%]">
        <h1 className="text-7xl text-fff font-bold">{title}</h1>
        <div className="flex mt-6">
          <div className="w-[2px] h-[18px] bg-fff mt-[6px] mr-4" />
          <p className="text-lg text-fff">{description}</p>
        </div>
        <div className="mt-12 fixed">
          {links.map(({ name, href, svg }) => (
            <LinkIcon key={name} name={name} href={href} svg={svg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Title;
