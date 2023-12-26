import Link from 'next/link';
import styles from './NavBar.module.css';
import { Typography } from '../common/Typography';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.titleWrapper}>
        <Link className={styles.title} href="/">
          se-een&apos;s dev
        </Link>
      </div>
      <div>
        <Link
          className={styles.navigator}
          style={{ cursor: 'pointer', marginRight: '32px' }}
          href="/#about"
        >
          About
        </Link>
        <Link
          className={styles.navigator}
          style={{ cursor: 'pointer' }}
          href="/#projects"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
