import NavLinkIcon from './components/NavLinkIcon';

interface Props {
  title: string;
  description: string;
  links: {
    name: string;
    href: string;
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

const NavTitle = ({ title, description, links }: Props) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="max-w-[75%]">
          <h1 className="text-[8px] text-white font-bold">{title}</h1>
          <div className="flex mt-1">
            <div className="w-[0.5px] h-[2px] bg-white mt-[0.5px] mr-[1px]" />
            <p className="text-[2px] text-white">{description}</p>
          </div>
          <div className="mt-12 fixed">
            {links.map(({ name, href, svg }) => (
              <NavLinkIcon key={name} name={name} href={href} svg={svg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTitle;
