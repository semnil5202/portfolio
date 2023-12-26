import styles from './page.module.css';
import { Profile } from '@/containers/Profile';
import { Ability } from '@/containers/Ability';
import { Projects } from '@/containers/Projects';
import { Space } from '@/components/common/Space';

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <Space size={80} />
      <Ability />
      <Space size={100} />
      <div className={styles.projectsWrapper}>
        <h3 className={styles.projects}>Projects</h3>
        <div className={styles.projectsLine}></div>
      </div>
      <Space size={40} />
      <Projects />
    </main>
  );
}
