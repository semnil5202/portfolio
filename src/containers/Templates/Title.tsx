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
    <section className="relative w-full h-full">
      <HomeIcon position="fixed" />
      <div className="w-3/6 h-full flex flex-col items-center mt-[-40px] justify-center animate-init-fade-in-move md:mt-[-2.1vw]">
        <div className="ml-[-20px] max-w-[75%]">
          <h1 className="text-7xl text-white font-bold lg:text-6xl md:text-[4vw] md:font-medium">
            {title}
          </h1>
          <div className="flex mt-6 md:mt-[1.5vw]">
            <div className="w-[2px] h-[18px] bg-white mt-[6px] mr-4 md:w-px md:h-[1.2vw] md:mt-[0.65vw] md:mr-2" />
            <p className="text-lg text-white lg:text-base md:text-[1.6vw] md:leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-12 fixed md:mt-[2vw] md:flex md:flex-wrap md:w-[43.5vw]">
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
