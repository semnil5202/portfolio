import LinkIcon from './components/LinkIcon';
import HomeIcon from './components/HomeIcon';

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
    <section className="relative w-full h-full md:flex md:flex-col-reverse">
      <HomeIcon position="fixed" />
      <div className="w-3/6 h-full flex flex-col items-center mt-[-4%] justify-center animate-init-fade-in-move md:w-full md:h-[55%] md:mt-0">
        <div className="ml-[-20px] max-w-[75%] md:ml-0 md:mt-[-120px]">
          <h1 className="text-7xl text-white font-bold lg:text-6xl md:text-4xl md:font-medium">
            {title}
          </h1>
          <div className="flex mt-6 md:mt-3">
            <div className="w-[2px] h-[18px] bg-white mt-[6px] mr-4 md:w-px md:h-[14px] md:mt-[4px] md:mr-2" />
            <p className="text-lg text-white lg:text-normal md:text-[14px] md:leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-12 fixed md:mt-6 md:flex md:flex-wrap">
            {links.map(({ name, href, svg }) => (
              <LinkIcon key={name} name={name} href={href} svg={svg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
