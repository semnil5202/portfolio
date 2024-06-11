interface Props {
  name: string;
  href: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavLinkIcon = ({ name, svg: Svg }: Props) => {
  return (
    <div className="flex items-center mb-[3px]">
      <div className="w-[4px] h-[4px] rounded-[50%] flex items-center justify-center mr-1">
        <Svg className="w-[4px] h-[4px]" viewBox="0 0 40 40" />
      </div>
      <span className="text-white font-extralight text-[2px]">{name}</span>
    </div>
  );
};

export default NavLinkIcon;
