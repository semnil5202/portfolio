import { ReactNode } from 'react';

interface Props {
  textColor?: string;
  bgColor?: string;
  mb?: string;
  weight?: string;
  size?: string;
  mediaText?: string;
  mediaBullet?: string;
  children: ReactNode;
}

const ListItem = ({
  textColor = 'text-black',
  bgColor = 'bg-black',
  mb = 'mb-0',
  weight = 'light',
  size = 'base',
  mediaText = 'md:text-[1.5vw]',
  mediaBullet = '',
  children,
}: Props) => {
  const fontWeight = `font-${weight}`;
  const fontSize = `text-${size}`;

  return (
    <li className={`flex items-start gap-2 ${mb}`}>
      <div
        className={`min-w-1 min-h-1 ${bgColor} rounded-[50%] mt-[10px] md:mt-[0.9vw] md:min-w-[0.38vw] md:min-h-[0.38vw] ${mediaBullet}`}
      />
      <span
        className={`${textColor} ${fontWeight} ${fontSize} leading-relaxed ${mediaText}`}
      >
        {children}
      </span>
    </li>
  );
};

export default ListItem;
