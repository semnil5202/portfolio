interface Props {
  children: string;
}

const NavMediaTitle = ({ children }: Props) => {
  return (
    <div className="hidden w-full h-full text-[10px] text-white relative px-3 md:flex md:justify-center md:items-center">
      {children}
    </div>
  );
};

export default NavMediaTitle;
