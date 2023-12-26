import styles from './Strength.module.css';

interface Props {
  title: string;
  descriptions: string[];
}

export default function Strength({ title, descriptions }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>{title}</div>
      <ul className={styles.descriptionWrapper}>
        {descriptions.map((description, idx) => (
          <li key={`${description}-${idx}`}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
