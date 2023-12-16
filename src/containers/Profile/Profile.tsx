import Image from 'next/image';
import { Button } from '../../components/common/Button';
import { Typography } from '../../components/common/Typography';
import profileImage from '../../public/assets/profile.png';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <>
      <section className={styles.profile}>
        <div className={styles.imageContainer}>
          <Image
            src={profileImage}
            alt="프로필 이미지"
            width={400}
            height={400}
          />
        </div>

        <div>
          <div>
            <Typography tag="h2" size="large" weight="bold" color="default">
              안녕하세요.
            </Typography>
            <Typography tag="h2" size="large" weight="bold" color="default">
              000하는
            </Typography>
            <Typography tag="h2" size="large" weight="bold" color="default">
              프론트엔드 개발자 이세민입니다.
            </Typography>
          </div>
          <div className={styles.buttonContainer}>
            <Button tag="a" href="https://github.com/semnil5202" target="blank">
              Github
            </Button>
            <Button tag="a" href="https://velog.io/@semnil5202" target="blank">
              Blog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
