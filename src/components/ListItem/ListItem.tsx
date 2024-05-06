interface Props {
  color?: string;
  bgColor?: string;
  children: string;
}

const ListItem = ({ color = '000', bgColor = '000', children }: Props) => {
  const backgroundColor = `#${bgColor}`;
  const textColor = `text-${color}`;

  return (
    <li className="flex items-center gap-2">
      {/* TODO: 테일윈드 background Color 적용 불가 원인 파악 후 style attr 제거 */}
      <div className={`w-1 h-1 rounded-[50%]`} style={{ backgroundColor }} />
      <span className={`${textColor}`}>{children}</span>
    </li>
  );
};

export default ListItem;
