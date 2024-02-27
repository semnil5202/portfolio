import Image from 'next/image';
import { Button } from '../../components/common/Button';
import { Typography } from '../../components/common/Typography';
import profileImage from '../../../public/assets/profile.png';
import styles from './Profile.module.css';
import { DynamicText } from '@/components/common/DynamicText';
import { Space } from '@/components/common/Space';
import { DYNAMIC_TEXTS } from '@/constants/data';

export default function Profile() {
  return (
    <>
      <section className={styles.profile}>
        <div className={styles.imageContainer}>
          <Image
            className="skeleton"
            src={profileImage}
            alt="프로필 이미지"
            width={352}
            height={352}
            quality={100}
          />
        </div>

        <div>
          <div className={styles.typographyContainer}>
            <Typography tag="h2" size="large" weight="bold" color="default">
              안녕하세요.
            </Typography>
            <Space size={8} />
            <DynamicText texts={DYNAMIC_TEXTS} />
            <Space size={8} />
            <Typography tag="h2" size="large" weight="bold" color="default">
              프론트엔드 개발자 이세민입니다.
            </Typography>
          </div>
          <Space size={32} />
          <div className={styles.buttonContainer}>
            <Button
              tag="a"
              href="https://github.com/semnil5202"
              target="_blank"
              type="active"
              customStyle={{ fontSize: '18px', marginRight: '16px' }}
            >
              Github
            </Button>
            <Button
              tag="a"
              href="https://velog.io/@semnil5202"
              target="_blank"
              type="active"
              customStyle={{ fontSize: '18px', marginRight: '16px' }}
            >
              Blog
            </Button>
            <Button
              tag="a"
              href="mailto:semnil5202@gmail.com"
              customStyle={{ fontSize: '18px' }}
            >
              semnil5202@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
