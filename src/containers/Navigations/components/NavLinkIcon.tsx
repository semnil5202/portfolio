interface Props {
  name: string;
  href: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavLinkIcon = ({ name, svg: Svg }: Props) => {
  return (
    <div className="flex items-center mb-5">
      <div className="w-[6px] h-[6px] rounded-[50%] flex items-center justify-center mr-4">
        <Svg className="" viewBox="0 0 6 6" />
      </div>
      <span className="text-white font-extralight text-[2px]">{name}</span>
    </div>
  );
};

export default NavLinkIcon;
