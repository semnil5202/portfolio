import styles from './Skill.module.css';

interface Props {
  content: string;
}

export default function Skill({ content }: Props) {
  return <div className={styles.wrapper}>{content}</div>;
}
