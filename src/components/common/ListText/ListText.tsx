import { ComponentPropsWithoutRef, ElementType } from 'react';
import { Typography } from '../Typography';
import styles from './ListText.module.css';

type Props<T extends ElementType> = {
  tag?: T;
  sideText?: string;
  children: string;
} & ComponentPropsWithoutRef<T>;

export default function ListText<T extends ElementType>({
  tag,
  sideText = '•',
  children,
  ...attributes
}: Props<T>) {
  const Tag = tag || 'li';

  return (
    <Tag className={styles.wrapper} {...attributes}>
      <span className={styles.sidebar}>{sideText}</span>
      <Typography>{children}</Typography>
    </Tag>
  );
}
