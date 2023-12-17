import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import styles from './Button.module.css';

type TagType = 'button' | 'a';
type ButtonType = 'primary' | 'secondary';

type Props<T extends ElementType> = {
  tag?: T extends TagType ? T : never;
  type?: ButtonType;
  customStyle?: CSSProperties;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Button<T extends ElementType>({
  tag,
  type = 'primary',
  customStyle = {},
  children,
  ...attribute
}: Props<T>) {
  const Tag = tag || 'button';

  return (
    <Tag
      className={`${styles.default} ${styles[`type-${type}`]}`}
      style={{ ...customStyle }}
      {...attribute}
    >
      {children}
    </Tag>
  );
}
