import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styles from './Button.module.css';

type TagType = 'button' | 'a';
type ButtonType = 'primary' | 'secondary';

type Props<T extends ElementType> = {
  tag?: T extends TagType ? T : never;
  type?: ButtonType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType>({
  tag,
  type = 'primary',
  children,
  ...attribute
}: Props<T>) {
  const Tag = tag || 'button';

  return (
    <Tag
      className={`${styles.default} ${styles[`type-${type}`]}`}
      {...attribute}
    >
      {children}
    </Tag>
  );
}

export default Button;
