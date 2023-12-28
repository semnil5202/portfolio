import Image, { StaticImageData } from 'next/image';
import { Typography } from '../../components/common/Typography';
import styles from './ProjectDetail.module.css';

interface Props {
  title: string;
  problems: string[];
  solves: string[];
  result?: {
    description?: { name: string; link?: string };
    imageSrc?: StaticImageData;
  };
}

export default function ProjectDetail({
  title,
  problems,
  solves,
  result,
}: Props) {
  return (
    <article className={styles.wrapper}>
      <Typography size="medium" weight="bold">
        {title}
      </Typography>
      <ul className={styles.listWrapper}>
        <Typography weight="bold">문제 상황</Typography>
        {problems.map((problem) => (
          <li key={problem} className={styles.listItem}>
            <span className={styles.sidebar}>•</span>
            <Typography>{problem}</Typography>
          </li>
        ))}
      </ul>
      <ul className={styles.listWrapper}>
        <Typography weight="bold">해결 과정</Typography>
        {solves.map((solve) => (
          <li key={solve} className={styles.listItem}>
            <span className={styles.sidebar}>•</span>
            <Typography>{solve}</Typography>
          </li>
        ))}
      </ul>
      {result && (
        <ul className={styles.listWrapper}>
          <Typography weight="bold">결과</Typography>
          <li className={styles.listItem}>
            {result.description?.link ? (
              <>
                <span className={styles.sidebar}>•</span>
                <Typography
                  tag="a"
                  href={result.description.link}
                  target="_blank"
                  customStyle={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {result.description?.name}
                </Typography>
              </>
            ) : (
              <Typography>{result.description?.name}</Typography>
            )}
          </li>
          {result.imageSrc && (
            <Image
              className="skeleton"
              src={result.imageSrc}
              alt="결과 이미지"
              width={1140}
              loading="lazy"
            />
          )}
        </ul>
      )}
    </article>
  );
}
