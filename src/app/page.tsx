import styles from './page.module.css';
import { Profile } from '@/containers/Profile';
import { Ability } from '@/containers/Ability';
import { Projects } from '@/containers/Projects';
import { Space } from '@/components/common/Space';

export default function Home() {
  return (
    <main className={styles.main}>
      <Space id="about" size={72} />
      <Profile />
      <Space size={60} />
      <Ability />
      <Space id="projects" size={72} />
      <div className={styles.projectsWrapper}>
        <h2 className={styles.projects}>Projects</h2>
        <div className={styles.projectsLine}></div>
      </div>
      <Space size={40} />
      <Projects />
    </main>
  );
}
