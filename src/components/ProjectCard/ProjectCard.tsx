import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';
import { Typography } from '../common/Typography';
import Link from 'next/link';
import { Button } from '../common/Button';

interface Props {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  slug,
}: Props) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt="프로젝트 이미지"
          width={265}
          height={265}
          loading="lazy"
        />
      </div>
      <div className={styles.contentWrapper}>
        <Typography size="medium" weight="bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href={`/${slug}`}>
          <Button type="active">자세히 보기</Button>
        </Link>
      </div>
    </article>
  );
}
