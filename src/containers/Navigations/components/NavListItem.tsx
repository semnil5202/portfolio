import { ReactNode } from 'react';

interface Props {
  fontWeight: string;
  fontSize: string;
  children: ReactNode;
}

const NavListItem = ({ fontWeight, fontSize, children }: Props) => {
  return (
    <li className="flex items-start gap-[2px]">
      <div className="min-w-px min-h-px rounded-[50%] mt-px bg-white" />
      <span className={`text-white ${fontWeight} ${fontSize} leading-relaxed`}>
        {children}
      </span>
    </li>
  );
};

export default NavListItem;
