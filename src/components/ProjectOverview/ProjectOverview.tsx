import Image, { StaticImageData } from 'next/image';
import { Typography } from '../common/Typography';
import styles from './ProjectOverview.module.css';
import { Button } from '../common/Button';

interface Props {
  imageSrc: StaticImageData;
  name: string;
  intros: string[];
  tecStack: string;
  links: { name: string; link: string }[];
  personnel?: string;
  role?: string;
  period?: string;
}

export default function ProjectOverview({
  imageSrc,
  name,
  intros,
  period,
  personnel,
  role,
  tecStack,
  links,
}: Props) {
  return (
    <section className={styles.main}>
      <div className={styles.typographyWrapper}>
        <h2 className={styles.typography}>Overview.</h2>
      </div>
      <div className={styles.overviewWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt="프로젝트 이미지"
            width={440}
            height={440}
          />
        </div>
        <div className={styles.infoWrapper}>
          <Typography size="medium" weight="bold">
            {name}
          </Typography>
          <ul className={styles.listWrapper}>
            {intros.map((intro) => (
              <li key={intro} className={styles.listItem}>
                <span>•</span>
                <Typography>{intro}</Typography>
              </li>
            ))}
            <li className={styles.listItem} style={{ marginTop: '16px' }}>
              <Typography weight="bold">기간 :</Typography>
              <Typography>{period}</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography weight="bold">인원 :</Typography>
              <Typography>{personnel}</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography weight="bold">수행 역할 :</Typography>
              <Typography>{role}</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography
                weight="bold"
                customStyle={{ minWidth: 'max-content' }}
              >
                기술 스택 :
              </Typography>
              <Typography>{tecStack}</Typography>
            </li>
          </ul>
          <div className={styles.buttonWrapper}>
            {links.map(({ name, link }) => (
              <Button
                key={link}
                tag="a"
                href={link}
                type="active"
                customStyle={{ marginRight: '16px' }}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
