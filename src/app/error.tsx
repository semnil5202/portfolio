'use client';

import { Space } from '@/components/common/Space';
import styles from './error.module.css';
import { Button } from '@/components/common/Button';
import { useRouter } from 'next/navigation';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const onClickReset = () => {
    router.back();
  };

  return (
    <html>
      <body>
        <section className={styles.wrapper}>
          <Space size={260} />
          <div className={styles.badRequestWrapper}>
            <h2 className={styles.badRequest}>400 Bad Request</h2>
            <div className={styles.badRequestLine}></div>
          </div>
          <Space size={40} />
          <div className={styles.contentWrapper}>
            <Button type="active" onClick={onClickReset}>
              이전 페이지로 돌아가기
            </Button>
          </div>
          <Space size={100} />
        </section>
      </body>
    </html>
  );
}
