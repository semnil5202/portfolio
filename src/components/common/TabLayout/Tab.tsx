interface Props {
  label?: string;
  children?: React.ReactNode;
}

export default function Tab({ label, children }: Props) {
  return <div data-label={label}>{children}</div>;
}
