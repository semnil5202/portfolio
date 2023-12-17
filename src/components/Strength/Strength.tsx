import { Typography } from '../common/Typography';
import styles from './Strength.module.css';

interface Props {
  title: string;
  descriptions: string[];
}

export default function Strength({ title, descriptions }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Typography size="medium">{title}</Typography>
      </div>
      <ul className={styles.descriptionWrapper}>
        {descriptions.map((description, idx) => (
          <Typography key={`${description}-${idx}`} tag="li">
            {description}
          </Typography>
        ))}
      </ul>
    </div>
  );
}
