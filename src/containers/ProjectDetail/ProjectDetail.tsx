import Image, { StaticImageData } from 'next/image';
import { Typography } from '../../components/common/Typography';
import styles from './ProjectDetail.module.css';
import { ListText } from '@/components/common/ListText';

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
          <ListText key={problem}>{problem}</ListText>
        ))}
      </ul>
      <ul className={styles.listWrapper}>
        <Typography weight="bold">해결 과정</Typography>
        {solves.map((solve) => (
          <ListText key={solve}>{solve}</ListText>
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
                  color="gray"
                >
                  {result.description?.name}
                </Typography>
              </>
            ) : (
              result.description?.name && (
                <>
                  <span className={styles.sidebar}>•</span>
                  <Typography>{result.description.name}</Typography>
                </>
              )
            )}
          </li>
          {result.imageSrc && (
            <Image
              className="skeleton"
              src={result.imageSrc}
              alt="결과 이미지"
              width={1140}
              loading="lazy"
              quality={100}
            />
          )}
        </ul>
      )}
    </article>
  );
}
