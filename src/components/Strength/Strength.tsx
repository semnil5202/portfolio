import { Typography } from '../common/Typography';
import styles from './Strength.module.css';

interface Props {
  title: string;
  description: string;
}

export default function Strength({ title, description }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Typography size="medium">{title}</Typography>
      </div>
      <div className={styles.descriptionWrapper}>
        <Typography tag="p">{description}</Typography>
      </div>
    </div>
  );
}
