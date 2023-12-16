interface Props {
  label?: string;
  children?: React.ReactNode;
}

function Tab({ label, children }: Props) {
  return <div data-label={label}>{children}</div>;
}

export default Tab;
