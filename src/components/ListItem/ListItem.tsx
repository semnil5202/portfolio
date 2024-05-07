import { ReactNode } from 'react';

interface Props {
  color?: string;
  bgColor?: string;
  mb?: string;
  weight?: string;
  size?: string;
  children: ReactNode;
}

const ListItem = ({
  color = '000',
  bgColor = '000',
  mb = 'mb-0',
  weight = 'light',
  size = 'base',
  children,
}: Props) => {
  const backgroundColor = `#${bgColor}`;
  const textColor = `text-${color}`;
  const fontWeight = `font-${weight}`;
  const fontSize = `text-${size}`;

  return (
    <li className={`flex items-start gap-2 ${mb}`}>
      {/* TODO: 테일윈드 background Color 적용 불가 원인 파악 후 style attr 제거 */}
      <div
        className={`min-w-1 min-h-1 rounded-[50%] mt-[10px]`}
        style={{ backgroundColor }}
      />
      <span className={`${textColor} ${fontWeight} ${fontSize}`}>
        {children}
      </span>
    </li>
  );
};

export default ListItem;
