import { Button } from '@/components/common/Button';
import { Space } from '@/components/common/Space';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <Space size={260} />
      <div className={styles.notFoundWrapper}>
        <h2 className={styles.notFound}>404 Not Found</h2>
        <div className={styles.notFoundLine}></div>
      </div>
      <Space size={40} />
      <div className={styles.contentWrapper}>
        <Link href="/">
          <Button type="active">메인 페이지로 돌아가기</Button>
        </Link>
      </div>
      <Space size={100} />
    </section>
  );
}
