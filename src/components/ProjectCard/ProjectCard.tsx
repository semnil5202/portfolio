import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';
import { Typography } from '../common/Typography';
import Link from 'next/link';
import { Button } from '../common/Button';

interface Props {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  personnel: string;
  slug: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  personnel,
  slug,
}: Props) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt="프로젝트 이미지" width={265} height={265} />
      </div>
      <div className={styles.contentWrapper}>
        <Typography size="medium">{title}</Typography>
        <Typography>{description}</Typography>
        <Typography color="gray">{personnel}</Typography>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href={`/${slug}`}>
          <Button>자세히 보기</Button>
        </Link>
      </div>
    </article>
  );
}
