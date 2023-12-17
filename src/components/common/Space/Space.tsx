interface Props {
  size: number;
}

export default function Space({ size }: Props) {
  return <div style={{ minWidth: `${size}px`, minHeight: `${size}px` }}></div>;
}
