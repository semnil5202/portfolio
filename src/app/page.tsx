import styles from './page.module.css';
import { Profile } from '@/containers/Profile';
import { Ability } from '@/containers/Ability';
import { Projects } from '@/containers/Projects';
import { Space } from '@/components/common/Space';

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <Space size={120} />
      <Ability />
      <Space size={120} />
      <Projects />
    </main>
  );
}
