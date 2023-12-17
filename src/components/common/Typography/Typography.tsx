import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import styles from './Typography.module.css';

type SizeType = 'small' | 'default' | 'medium' | 'large';
type WeightType = 'default' | 'bold';
type ColorType = 'default' | 'primary' | 'gray';

type Props<T extends ElementType> = {
  tag?: T;
  size?: SizeType;
  weight?: WeightType;
  color?: ColorType;
  customStyle?: CSSProperties;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Typography<T extends ElementType>({
  tag,
  size = 'default',
  weight = 'default',
  color = 'default',
  customStyle = {},
  children,
  ...attributes
}: Props<T>) {
  const Tag = tag || 'span';

  return (
    <Tag
      className={`${styles.default} ${styles[`size-${size}`]} ${
        styles[`weight-${weight}`]
      } ${styles[`color-${color}`]}`}
      style={{ ...customStyle }}
      {...attributes}
    >
      {children}
    </Tag>
  );
}
