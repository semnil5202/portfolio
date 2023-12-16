import Image from 'next/image';
import styles from './page.module.css';
import Profile from '@/components/Profile/Profile';

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}
