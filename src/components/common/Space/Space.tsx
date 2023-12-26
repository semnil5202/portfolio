interface Props {
  size: number;
  id?: string;
}

export default function Space({ id, size }: Props) {
  return (
    <div
      id={id}
      style={{ minWidth: `${size}px`, minHeight: `${size}px` }}
    ></div>
  );
}
